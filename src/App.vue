<template>
  <v-app dark toolbar >
    <navigator />
    <chooser />
    <app-bar v-if="loggedIn"/>
    <main >
      <v-container fluid grid-list-xs text-xs-center class='pa-0'>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>

</template>

<script>
import AppBar from './views/core/AppBar'
import Chooser from './views/core/Chooser'
import Navigator from './views/core/Navigator'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    AppBar,
    Chooser,
    Navigator
  },
  computed: {
    ...mapGetters({
      user: 'user',
      loggedIn: 'userLoggedIn'
    })
  }
}
</script>

<style lang='stylus'>
  @import './stylus/main'
</style>
