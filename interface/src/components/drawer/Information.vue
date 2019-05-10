<template>
  <q-drawer
    elevated
    side='right'
    v-model="show"
    content-class="bg-grey-2"
  >

    <q-list
      highlight
      no-border
      link
      inset-delimiter
    >

      <q-item clickable class='q-my-sm' to="/handbook">
        <q-item-section side avatar><q-icon name="fas fa-book" /></q-item-section>
        <q-item-section>Handbook</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable class='q-my-sm' to="/contact">
        <q-item-section side avatar><q-icon name="fas fa-headset" /></q-item-section>
        <q-item-section>Contact Us</q-item-section>
      </q-item>
    </q-list>

  </q-drawer>

</template>

<script>

import { openURL } from 'quasar'

export default {
  methods: {
    openURL
  },
  computed: {
    show () {
      return this.$store.state.showDrawerRight
    }
  }
}
</script>
