<template>
  <div class="agenda">
    <span class="loading" v-if="contacts.length === 0">LOADING CONTACTS...</span>
    <contact-card
      v-for="contact in contacts"
      class="contact"
      :key="contact.name"
      :contact-details="contact">
    </contact-card>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import ContactCard from './contact-card'

export default {
  name: 'agenda',
  components: {
    'contact-card': ContactCard
  },
  data () {
    return {
      contacts: [
      ],
      db: null
    }
  },
  mounted () {
    this.db = firebase.firestore()

    this.db.collection('contacts').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.contacts.push(doc.data())
      })
    }).then(() => {
      console.log('all loaded')
    })
  }
}
</script>

<style scoped>
.agenda {
  display: flex;
  flex-wrap: wrap;
  margin: 5vw;
}
.contact {
  flex: 1;
  width: 450px;
  margin: 20px;
}
.loading {
  display: block;
}
</style>
