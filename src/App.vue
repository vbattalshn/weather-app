<template>
  <div id="app" class="basepage">
    <router-view/>
    <vue-progress-bar />
    <notifications classes="my-notification" position="right bottom" />
  </div>
</template>

<script>

export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap');
@import url("./custom/stylesheets/style.css");
</style>
