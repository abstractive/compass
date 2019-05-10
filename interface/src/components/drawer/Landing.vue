<template>
  <div>
    <q-drawer
    elevated
    v-model="showDrawer"
    content-class="bg-grey-2"
    >
      <q-list
        class="fit q-pt-md"
        highlight
        link
      >
        <q-item clickable class='q-mb-md' to="/signup">
          <q-item-section side avatar>
            <q-icon name="fas fa-user-plus" />
          </q-item-section>
          <q-item-section>Signup</q-item-section>
        </q-item>

        <q-item clickable class='q-mb-md' @click.native="revealSignin">
          <q-item-section side avatar>
            <q-icon name="fas fa-sign-in-alt" />
          </q-item-section>
          <q-item-section>Signin</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable class='q-my-md' to='/dashboard'>
          <q-item-section side avatar>
            <q-icon name="fas fa-tachometer-alt" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
          <q-item-section side right avatar>
            <q-icon name="fas fa-eye-slash" />
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show_signin: false
    }
  },
  methods: {
    revealSignin () {
      this.$store.dispatch('showSignin')
    }
  },
  computed: {
    showDrawer () {
      return this.$store.state.showDrawerLeft
    },
    showSignin () {
      return this.$store.state.showSignin
    }
  }
}
</script>
