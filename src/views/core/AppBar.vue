<template>
  <v-toolbar flat dense >
    <v-toolbar-side-icon @click.native.stop="toggleNavigator"></v-toolbar-side-icon>
    <v-menu>
      <v-toolbar-title slot="activator">
        <span>Town Square</span>
        <v-icon >arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list>
        <v-list-tile v-for="chat in chats" :key="chat" @click="">
          <v-list-tile-title v-text="chat"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer class="hidden-sm-and-up"></v-spacer>
    <v-text-field
    class="hidden-xs-only ml-5"
    name="search-input"
    ></v-text-field>
    <v-btn icon><v-icon>search</v-icon></v-btn>
    <v-btn icon @click.native.stop="toggleChooser">
      <v-icon>apps</v-icon>
    </v-btn>
    <v-menu >
      <v-btn slot="activator" icon class="ml-3 mr-3"><v-avatar class="purple" size="32px"><span class="white--text">A</span></v-avatar></v-btn>
      <v-list>
        <v-list-tile @click="signOut">
          <v-list-tile-title>Sign Out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'app-bar',
    methods: {
      ...mapActions([
        // indentation
        'toggleNavigator',
        'toggleChooser',
        'signOut'
      // indentation
      ])
    },
    data: () => ({
      chats: [
        // indentation
        'Town Square'
      ]
    })
  }
</script>
