<template>
  <q-layout view="lHr LpR lFr">
    <compass-header />
    <compass-drawer-dashboard />
    <compass-drawer-information />
    <compass-footer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import NavigationHeader from 'components/navigation/Header.vue'
import DrawerDashboard from 'components/drawer/Dashboard.vue'
import DrawerInformation from 'components/drawer/Information.vue'
import NavigationFooter from 'components/navigation/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
    'compass-header': NavigationHeader,
    'compass-drawer-dashboard': DrawerDashboard,
    'compass-drawer-information': DrawerInformation,
    'compass-footer': NavigationFooter
  }
}
</script>

<style>
</style>
