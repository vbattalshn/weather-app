import Vue from "vue"
import VueProgressBar from 'vue-progressbar'

const options = {
  color: 'var(--color)',
  failedColor: '#ff0000',
  thickness: '2px',
  transition: {
    speed: '0.25s',
    opacity: '0.25s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)