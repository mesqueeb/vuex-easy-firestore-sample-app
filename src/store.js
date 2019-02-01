import firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'
import createEasyFirestore from 'vuex-easy-firestore'

import items from './vuex/modules/items'

Vue.use(Vuex)

// init firebase
const config = {
  apiKey: 'AIzaSyA-b17Iufd05WZOV66jzUNEQQk8UMMFcE4',
  authDomain: 'vuex-easy-firestore-sample-app.firebaseapp.com',
  databaseURL: 'https://vuex-easy-firestore-sample-app.firebaseio.com',
  projectId: 'vuex-easy-firestore-sample-app',
  storageBucket: 'vuex-easy-firestore-sample-app.appspot.com',
  messagingSenderId: '156749063015'
}
firebase.initializeApp(config)

// init store
const easyFirestore = createEasyFirestore(items, { logging: true })
const store = new Vuex.Store({
  plugins: [easyFirestore]
})

window.firebase = firebase
window.store = store

export default store
