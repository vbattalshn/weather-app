<template>
  <section >
    <Header page="Home" :location=" location.locationName " />
    <div v-if="weather.hourData && weather.fiveDayData" class="content fullheight centerpage">
      <div class="temperature-holder">
        <span class="value">{{ weather.hourData.Temperature.Value }}°C</span>
        <span class="phrase">{{ weather.hourData.IconPhrase }}</span>
      </div>
      <div class="days">
        <span class="day" v-for="(day, index) in weather.fiveDayData.DailyForecasts" :key="index">
          <span class="temperature-value">{{ day.Temperature.Maximum.Value }}°C</span>
          <span class="day-date">{{ new Date( day.EpochDate*1000).toLocaleString("en-US", {day: '2-digit', year: '2-digit', month: '2-digit'}) }}</span>
        </span>
      </div>
    </div>
    <Loading v-else />
    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import store from "../store"
import axios from "axios"

export default{
  components: {Header, Footer, Loading},
  computed: {
    location () {
      return store.state.location
    },
    user () {
      return store.state.user
    },
    api () {
      return store.state.api
    },
    weather () {
      return store.state.weather
    }
  },
  mounted(){
    if(!this.location.locationKey && !this.location.locationName){
      this.getIpAddress(true);
    }else{
      if(this.weather.hourData.Link.search(this.location.locationKey) == -1){
        this.weather.hourData = null;
        this.weather.fiveDayData = null;
        this.getWeatherData();
        this.get5DayWeatherData();
      }
    }
  },
  methods: {
    getIpAddress(param = false){
      axios
        .get("https://api.ipify.org?format=json")
        .then((Response) => {
          this.user.ipAddress = Response.data.ip;
          if(param){this.getLocation()}
        })
    },
    getLocation(){
      axios
        .get("http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=" + this.api.apiKey + "&q=" + this.user.ipAddress + "&language=" + this.api.lang + "&details=false")
        .then((Response) => {
          this.location.locationKey = Response.data.ParentCity.Key,
          this.location.locationName = Response.data.ParentCity.EnglishName
          this.getWeatherData();
          this.get5DayWeatherData();
        })
    },
    getWeatherData(){
      axios
        .get("https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/" + this.location.locationKey + "?apikey=" + this.api.apiKey + "&language=" + this.api.lang + "&details=false&metric=true")
        .then((Response) => {
          this.weather.hourData = Response.data[0];
        })
    },
    get5DayWeatherData(){
      axios
        .get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + this.location.locationKey + "?apikey=" + this.api.apiKey + "&language=" + this.api.lang + "&details=false&metric=true")
        .then((Response) => {
          this.weather.fiveDayData = Response.data;
        })
    }
  }
}
</script>
