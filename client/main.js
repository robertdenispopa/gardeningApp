import Vue from 'vue'
import router from './routes'
import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'



Meteor.startup(() => {
  new Vue({router,
    el: '#app',
    ...App,
  })
})
