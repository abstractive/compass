<template>
  <q-header>
    <q-toolbar color="primary">
      <q-btn
        flat
        dense
        round
        @click="toggleDrawerLeft"
        aria-label="Navigation"
      >
        <q-icon name="fas fa-bars" />
      </q-btn>

      <q-toolbar-title>
        <a class='cursor-pointer' @click="$router.push('/')">^Compass</a>
      </q-toolbar-title>

      <q-btn
        flat
        right
        :label="(!showRight) ? 'Information' : ''"
        icon-right="fas fa-info-circle"
        @click="toggleDrawerRight"
        aria-label="Information"
      />
    </q-toolbar>
  </q-header>
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
    },
    toggleDrawerLeft () {
      this.$store.dispatch('toggleDrawerLeft')
    }
  }
}
</script>
