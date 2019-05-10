<template>
  <q-layout view="lHr LpR lFr">
    <compass-header />
    <compass-drawer-landing />
    <compass-drawer-information />
    <compass-footer />
    <compass-signin />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import NavigationHeader from 'components/navigation/Header.vue'
import DrawerLanding from 'components/drawer/Landing.vue'
import DrawerInformation from 'components/drawer/Information.vue'
import NavigationFooter from 'components/navigation/Footer.vue'
import DialogSignin from 'components/dialog/Signin.vue'

export default {
  name: 'Landing',
  components: {
    'compass-header': NavigationHeader,
    'compass-drawer-landing': DrawerLanding,
    'compass-drawer-information': DrawerInformation,
    'compass-footer': NavigationFooter,
    'compass-signin': DialogSignin
  }
}

</script>

<style>
</style>
