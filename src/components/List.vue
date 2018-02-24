<template>
  <div>
    <div v-for="card in cards" :key="card.id">
      <h1>{{ card.title}}</h1>
      <img :src="card.image" :alt="card.title">
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      cards: [
        {
          'id': 'golds',
          'title': 'Ace of Golds',
          'image': require('../assets/golds.jpeg')
        },
        {
          'id': 'big_sticks',
          'title': 'Ace of Big Sticks',
          'image': require('../assets/big_sticks.jpeg')
        },
        {
          'id': 'cups',
          'title': 'Ace of Cups',
          'image': require('../assets/cups.png')
        },
        {
          'id': 'swords',
          'title': 'Ace of Swords',
          'image': require('../assets/swords.jpeg')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
