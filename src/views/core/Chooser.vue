<template>
  <v-navigation-drawer
    temporary
    v-model="visibility"
    @input="trackChange"
    right
    dark
  >
    <v-list class="mt-5">
      <v-subheader>LEGACY SYSTEMS</v-subheader>
      <v-list-tile href="http://127.0.0.1:4001">
        <v-list-tile-action>
          <v-icon>fa-fire</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Phoenix</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="http://127.0.0.1:4002">
        <v-list-tile-action>
          <v-icon>fa-building</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Providers</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-subheader>TOOLBELT</v-subheader>
      <v-list-tile href="http://localhost:8091/#/">
        <v-list-tile-action>
          <v-icon>fa-wechat</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Chatter</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="http://localhost:8092/#/">
        <v-list-tile-action>
          <v-icon>fa-bug</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Tracker</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-subheader>CONSUMER APPS</v-subheader>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>fa-hand-o-right</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>E-Referral</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>fa-list-ol</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Waiting Lists</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>fa-vcard-o</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>My Requests</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-toolbar fixed flat dense >
      <v-toolbar-title>Applications</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon >more_vert</v-icon>
      </v-btn>
    </v-toolbar>

  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'chooser',
    methods: {
      ...mapActions([
        'closeChooser'
      ]),
      trackChange (e) {
        if (this.chooserVisible === true && e === false) {
          this.closeChooser()
        }
      }
    },
    computed: {
      ...mapGetters({
        chooserVisible: 'chooserVisible'
      }),
      visibility: {
        get () {
          return this.chooserVisible
        },
        set () {
//          this.toggleChooser
        }
      }
    }
  }
</script>
