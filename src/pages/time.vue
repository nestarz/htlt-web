<template>
  <div class="time">
    <a-scene vr-mode-ui="enabled: false" renderer="alpha: false;">
      <!-- <a-assets>
        <img v-for="texture in textures" :id="texture" :key="texture" crossorigin="anonymous" />
      </a-assets>-->
      <a-camera
        look-controls
        wasd-controls="acceleration: 1000"
        mouse-cursor
        rotation="0 0 0"
        :position="`0 ${(Math.random() > 0.5) ? 2.8 : 0} 2`"
      >
        <a-entity cursor="rayOrigin: mouse;" raycaster="objects: .clickable;"></a-entity>
      </a-camera>
      <a-plane
        :position="`${5.5 - x} 0 -1`"
        rotation="-90 0 0"
        :width="1"
        height="4000"
        v-for="x in 10"
        :key="`plane-${x}`"
        wireframe
      >
        <a-box
          ref="boxes"
          rotation
          :color="Math.random() > 0.8 ? 'red' : 'white'"
          :material="`src: ${box.texture};`"
          :position="`0 ${(1 + index) * Math.floor(50 * Math.random())} ${scaleY(1, box.height)}`"
          width="1"
          geometry
          height="0.1"
          :scale="`1 1 ${box.height}`"
          transparent="true"
          opacity="0.9"
          visible
          v-for="(box, index) in boxes"
          :key="`box-${index}-${x}`"
          cursor-listener
          class="clickable"
        ></a-box>
      </a-plane>
      <a-sky color="rgb(0,0,0)"></a-sky>
    </a-scene>
    <div class="overlay info">
      <box-layout></box-layout>
    </div>
    <div class="overlay" v-if="selectedbox">
      <div class="content">
        <div class="x" @click="selectedbox = null">&times;</div>
        <remarkable>{{ selectedbox }}</remarkable>
      </div>
    </div>
  </div>
</template>

<script>
AFRAME.registerComponent("wireframe", {
  dependencies: ["material"],
  init: function() {
    this.el.components.material.material.wireframe = true;
  }
});

const textures = ["assets/images/2.jpg", "assets/images/5.png"];

module.exports = {
  components: {
    boxLayout: httpVueLoader("src/components/box-layout.vue")
  },
  data() {
    return {
      selectedbox: null,
      categories: ["focus", "filter", "forum"],
      textures,
      boxes: [...Array(2).keys()].map(index => ({
        x: index
          ? (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 10)
          : 0,
        y: 1.6,
        z: -(4 + index * 8),
        height: 1 + Math.floor(Math.random() * 3),
        width: 5,
        lineOffset: (Math.random() > 0.5 ? -1 : 1) * Math.random() * 0.5,
        texture: textures[Math.floor(Math.random() * textures.length)]
      }))
    };
  },
  mounted() {
    this.$refs.boxes.map(el => {
      el.addEventListener("click", event => {
        this.selectedbox = `
# G18
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vero esse iste dolorem ea labore. Debitis molestiae sequi, labore corrupti accusantium veritatis ad saepe, facere incidunt voluptatem facilis? Assumenda, cum?
`;
      });
    });
  },
  methods: {
    scaleY(height, scale) {
      return (height * scale) / 2;
    }
  }
};
</script>

<style scoped>
.time {
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.info {
  pointer-events: none;
}

.overlay > .content {
  background: white;
  padding: 5em;
  margin: 5em;
  height: calc(100% - 20em);
  position: relative;
}

.x {
  position: absolute;
  font-size: 4em;
  line-height: 0;
  top: 1em;
  right: 1em;
  cursor: pointer;
}
</style>