<template>
  <div class="box" :id="id">
    <div class="top left">Play</div>
    <div class="top right">DAE</div>
    <div class="timer">
      <span class="number">{{ counter }}</span>
      <span>days left</span>
    </div>
    <div class="bottom left">HLTV</div>
    <div class="bottom right">--:--</div>
  </div>
</template>

<script>
module.exports = {
  props: ["id"],
  data() {
    return {
      counter: Math.floor(Math.random() * 20)
    };
  },
  mounted() {
    setInterval(
      () =>
        (this.counter = this.counter
          ? (this.counter -= 1)
          : Math.floor(Math.random() * 20)),
      2000
    );
  }
};
</script>

<style scoped>
.box {
  height: 20em;
  width: 20em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid white;
  color: white;
  background: rgb(0, 0, 255);
}

.box * {
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

.box .top,
.box .bottom,
.box .right,
.box .left {
  display: flex;
  padding: 1em;
}

.box .top {
  align-items: flex-start;
}

.box .bottom {
  align-items: flex-end;
}

.box .right {
  justify-content: flex-end;
}

.box .left {
  justify-content: flex-start;
}

.timer {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer .number {
  font-size: 10em;
  margin-top: -0.2em;
}
</style>