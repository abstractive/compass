<template>
  <q-page class="flex flex-center">
    <div>
      <h3 class='text-center'>{{ title }}</h3>
      <img @click="revealSignin" class='cursor-pointer' alt="compass" src="~assets/icon420w.png">
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome'
    }
  },
  methods: {
    revealSignin () {
      this.$store.dispatch('showSignin')
    }
  }
}
</script>

<style>
</style>
