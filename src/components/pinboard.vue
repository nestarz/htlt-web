<template>
  <div class="pinboard">
    <div class="panel" ref="panel">
      <component
        v-bind:is="pin.type ? pin.type : 'div'"
        :id="pin.id"
        v-for="pin in pins"
        :key="pin.id"
        v-bind="pin"
        v-dragged
      >{{ pin.text }}</component>
      <slot />
    </div>
    <input ref="xy" @click="copy" type="textarea" :value="localStorage.positions" class="positions" />
    <div class="zoom">
      <input
        type="range"
        min="0.7"
        max="2"
        step="0.3"
        v-bind:value="zoomRatio"
        v-on:input="zoomSlider($event)"
      />
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {},
  props: ["contentSrc", "positionSrc", "forceInitial"],
  data() {
    return {
      localStorage: localStorage,
      initialPositions: {},
      zoomRatio: 0.9,
      pins: null
    };
  },
  created() {
    fetch(this.contentSrc)
      .then(response => response.json())
      .then(data => (this.pins = data));
    fetch(this.positionSrc)
      .then(response => response.json())
      .then(data => (this.initialPositions = data));
  },
  mounted() {},
  watch: {
    pins() {
      const positions = JSON.parse(localStorage.positions);
      this.position(positions);
    },
    initialPositions() {
      localStorage.positions = JSON.stringify(
        this.forceInitial
          ? {
              ...JSON.parse(localStorage.positions),
              ...this.initialPositions
            }
          : {
              ...this.initialPositions,
              ...JSON.parse(localStorage.positions)
            }
      );
      const positions = JSON.parse(localStorage.positions);
      this.position(positions);
    }
  },
  methods: {
    copy() {
      this.$refs.xy.select();
      document.execCommand("copy");
    },
    zoomSlider(e) {
      this.$refs.panel.style.fontSize = e.target.value + "em";
    },
    position(positions) {
      Object.keys(positions).map(id => {
        const el = document.getElementById(id);
        if (el) {
          el.style.top = positions[id].top + "em";
          el.style.left = positions[id].left + "em";
          el.style.position = "absolute";
        }
      });
    }
  }
};
</script>

<style scoped>
* {
  -webkit-user-drag: none;
}

.pinboard {
  position: absolute;
  width: 100%;
  height: 100%;
}

div {
  user-select: none !important;
}

.panel * {
  cursor: pointer;
}

.panel {
  position: relative;
  font-size: 0.9em;
  height: 100%;
  width: 100%;
  overflow: scroll;
  background-size: 10px 10px;
  background-image: linear-gradient(
      to right,
      rgb(15, 15, 15) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgb(15, 15, 15) 1px, transparent 1px);
}

.positions {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 99.6%;
  filter: invert(1);
}

.zoom {
  position: absolute;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  color: #000;
}
</style>