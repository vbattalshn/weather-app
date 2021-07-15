<template>
  <header>
    <div class="location-holder">
      <div class="location-icon icon">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2083 21.8761C30.2083 18.9984 27.8766 16.6667 25.001 16.6667C22.1234 16.6667 19.7917 18.9984 19.7917 21.8761C19.7917 24.7516 22.1234 27.0833 25.001 27.0833C27.8766 27.0833 30.2083 24.7516 30.2083 21.8761Z" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.999 43.75C22.5022 43.75 9.375 33.1216 9.375 22.0069C9.375 13.3055 16.369 6.25 24.999 6.25C33.629 6.25 40.625 13.3055 40.625 22.0069C40.625 33.1216 27.4958 43.75 24.999 43.75Z" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <a :href="'https://www.google.com/maps/place/' + location" rel="noopener noreferrer" target="_blank" class="location" v-text="location"></a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#" v-on:click="changeMode">
            <span class="mode-icon">
              <svg v-if="mode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                <path style="width: auto" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
              </svg>
            </span>
          </a>
        </li>
        <li v-if='page != "home"'>
          <router-link to="/">
            <span class="icon home-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </router-link>
        </li>
        <li v-else>
          <router-link to="/search">
            <span class="icon search-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="24.5138" cy="24.5137" rx="18.7262" ry="18.7262" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M37.5381 38.5107L44.8799 45.8333" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    location: null,
    page: null
  },
  data(){
    return {
      mode: false
    }
  },
  methods: {
    changeMode: function(){
      var body = document.querySelector("body");
      if(this.mode){
        this.mode = false;
        body.classList.remove("dark");
        this.$cookies.set("theme", "default")
      }else{
        this.mode = true;
        body.classList.add("dark");
        this.$cookies.set("theme", "dark")
      }
    }
  },
  mounted(){
    var body = document.querySelector("body");
    if(this.$cookies.get("theme")){
      if(this.$cookies.get("theme") == "default"){
        this.mode = false;
        body.classList.remove("dark");
      }else{
        this.mode = true
        body.classList.add("dark");
      }
    }else{
      this.$cookies.set("theme", "default");
    }
  }  
};
</script>

<style>
</style>