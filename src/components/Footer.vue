<template>
  <footer>
    <span class="feature">Made By <a href="https://battalsahin.com/" target="_blank" rel="noopener noreferrer">vbattalshn</a></span>
    <span class="line"></span>
    <span class="feature">Api By <a href="https://www.accuweather.com/" target="_blank" rel="noopener noreferrer">AccuWeather</a></span>
    <div class="version">
      Version: {{ version }}
    </div>
  </footer>
</template>

<script>
import { version } from "../../package.json"

export default {
  data(){
    return{
      version: version
    }
  }
}
</script>

<style>

</style>