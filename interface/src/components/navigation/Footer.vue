<template>
  <q-footer>
    <q-toolbar color="secondary">
      <q-toolbar-title>
        &copy; <b><a class='cursor-pointer' @click="openURL('http://abstractive.org')">abstractive labs</a></b>;
        by <a class='cursor-pointer' @click="openURL('https://extremist.digital')">digitalextremist //</a>
      </q-toolbar-title>
      <q-btn
        flat
        right
        :label="(!showRight) ? 'Information' : ''"
        icon-right="fas fa-info-circle"
        @click="toggleDrawerRight"
      />
    </q-toolbar>
  </q-footer>
</template>

<script>
import { openURL } from 'quasar'
export default {
  computed: {
    showRight () {
      return this.$store.state.showDrawerRight
    }
  },
  methods: {
    openURL,
    toggleDrawerRight () {
      this.$store.dispatch('toggleDrawerRight')
    }
  }
}
</script>
