import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: {
      locationKey: null,
      locationName: null
    },
    user: {
      ipAddress: null
    },
    notification: {
      error: false,
      succ: false,
      msg: "" 
    },
    api: {
      apiKey: "MOHzrpD1ntPcR6iPxXp9UUOXGPd9m8ee",
      lang: "en-en"
    },
    weather: {
      hourData: null,
      fiveDayData: null
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
