<template>

  <v-navigation-drawer
  persistent
  clipped
  enable-resize-watcher
  :mini-variant="mini"
  @input="trackChange"
  style="height: 100%;margin-top: 48px;max-height: calc(100vh - 48px); "
  v-model="visibility">

  <v-list>
    <!--<v-list-tile @click.native.stop="toggleMini">-->
      <!--<v-list-tile-action>-->
      <!--<v-icon >fa-arrows-h</v-icon>-->
      <!--</v-list-tile-action>-->
      <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Channels</v-list-tile-title>-->
      <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->

    <v-list-tile >
      <v-list-tile-action>
        <v-icon>fa-hashtag</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Notifications</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile >
      <v-list-tile-action>
        <v-icon>fa-hashtag</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Client Conversations</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile >
      <v-list-tile-action>
        <v-icon>fa-hashtag</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Broadcast Messages</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>

</v-navigation-drawer>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navigator',
  methods: {
    ...mapActions([
      // indentation
      'closeNavigator',
      'toggleMini'
    // indentation
    ]),
    trackChange (e) {
      if (this.navigatorVisible === true && e === false) {
        this.closeNavigator()
      }
    }
  },
  computed: {
    ...mapGetters({
      navigatorVisible: 'navigatorVisible'
//      miniVisible: 'miniVisible'
    }),
    visibility: {
      get () {
        return this.navigatorVisible
      },
      set () {

      }
    },
    mini: {
      get () {
        return this.miniVisible
      },
      set () {

      }
    }
  }
}
</script>

