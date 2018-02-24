<template>
  <div>
    <div v-for="card in cards" :key="card.name">
      <h1>{{ card.name}}</h1>
      <!-- <img :src="card.src" :alt="card.name"> -->
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
  name: 'list',
  data () {
    return {
      cards: [
      ]
    }
  },
  mounted () {
    const db = firebase.firestore()
    // const storage = firebase.storage().ref()
    const _this = this
    db.collection('cards').get().then((querySnapshot) => {
      // const cards = []
      querySnapshot.forEach((doc) => {
        _this.cards.push(doc.data())
      })
      /*
      return Promise.all(cards.map(card => {
        return storage.child(card.image).getDownloadURL().then(url => {
          card.src = url
          _this.cards.push(card)
          console.log('loaded %s', card)
        })
      })) */
    }).then(() => {
      console.log('all loaded')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this _this only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
