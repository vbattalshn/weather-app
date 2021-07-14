<template>
  <div>
    <router-link to="/">Home</router-link>
    <button v-on:click="changeLocation">Change Location</button>
    {{ location }}
  </div>
</template>

<script>
import store from "../store"

export default {
  computed: {
    location (){
      return store.state.location
    }
  },
  methods: {
    changeLocation: function (){
      this.location.locationKey = "318582",
      this.location.locationName = "Kayseri"
    }
  }
}
</script>

<style>

</style>