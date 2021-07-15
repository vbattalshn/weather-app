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
};
</script>

<style>
</style>