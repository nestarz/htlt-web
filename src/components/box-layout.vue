<template>
  <div class="box-layout">
    <router-link to="/" class="top left">htlt-tv</router-link>
    <div class="top right">oblidge to care about what is connected to us</div>
    <div class="content">
      <slot />
    </div>
    <div class="bottom left">30.09.2019 5:09:10 PM</div>
    <div class="bottom right">how to live together tv</div>
  </div>
</template>

<script>
module.exports = {
  components: {}
};
</script>

<style scoped>
.box-layout {
  position: relative;
  color: white;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
}

.box-layout a {
  color: white;
  font-weight: bold;
}

.box-layout .top,
.box-layout .bottom,
.box-layout .right,
.box-layout .left {
  display: flex;
  padding: 5em;
}

.box-layout .top {
  align-items: flex-start;
}

.box-layout .bottom {
  align-items: flex-end;
}

.box-layout .right {
  justify-content: flex-end;
}

.box-layout .left {
  justify-content: flex-start;
  writing-mode: vertical-rl;
}

.box-layout .top.left {
  transform: rotate(180deg);
  justify-content: flex-end;
}

.box-layout .bottom.left {
  transform: rotate(180deg);
  align-items: baseline;
}

.box-layout .content {
  grid-column: span 2;
}
</style>