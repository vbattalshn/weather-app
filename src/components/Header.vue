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
  },
};
</script>

<style>
</style>