<template>
  <div class="home">
    <div class="header">
      <box-layout>
        <box v-dragged="{ unit: 'percent' }" v-for="i in 5" :key="i" :id="i"></box>
      </box-layout>
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {
    boxLayout: httpVueLoader("src/components/box-layout.vue"),
    box: httpVueLoader("src/components/box.vue")
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes open {
  from {
    transform: scale(0, 1);
  }
  to {
    transform: scale(1);
  }
}

.header {
  height: 90%;
  width: 100%;
  max-width: 550px;
  animation: open .2s 1;
}

.box {
  height: 20em;
  width: 20em;
  transform: rotate(10deg) skewX(20deg) scaleY(0.95) translateX(-10em)
    translateY(-10em);
  transform-origin: 0px 0px;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>