<template>
  <div id="app">
    <h1>Sala de transmissão</h1>
    <Video/>

  </div>
</template>

<script>
import Video from "./components/Video.vue";


export default {
  components: { Video },
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}
* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e); 
}

</style>