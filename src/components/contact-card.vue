<template>
  <div class="card">
    <img src="../assets/contact-icon.png" alt="contact icon">
    <br>
    <span>{{contactDetails.name}}</span>
    <br>
    <span>{{contactDetails.email}}</span>
  </div>
</template>

<script>
export default {
  name: 'contact-card',
  props: [
    'contactDetails'
  ]
}
</script>

<style scoped>
.card {
  padding: 10px;
  border: 1px #aaa solid;
  background-color: #bbb;
}
img {
  width: 20%
}
</style>
