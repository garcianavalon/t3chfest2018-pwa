import Vue from 'vue'
import * as firebase from 'firebase'
import 'firebase/firestore'

import App from './App'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDqKtT232W-dABx06sZS0jsvASOA97-QQM',
  authDomain: 't3chfest2018.firebaseapp.com',
  databaseURL: 'https://t3chfest2018.firebaseio.com',
  projectId: 't3chfest2018',
  storageBucket: 't3chfest2018.appspot.com',
  messagingSenderId: '50627842785'
}
firebase.initializeApp(config)

firebase.firestore().enablePersistence()
  .then(() => {
    console.log('persistance enabled')
  })
  .catch(err => {
    console.error(err)
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a a time.')
    } else if (err.code === 'unimplemented') {
      console.log('The current browser does not support all of the features required to enable persistence')
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
