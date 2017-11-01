<template>
  <div>
    <template v-for="item in loadedMessages">
      <v-layout class="pa-2" align-center row spacer slot="header">
        <v-avatar class="teal">
          <img v-bind:src="item.avatar">
        </v-avatar>
        <blockquote class="pa-2 "
          v-html="item.content"
          style="border-left: none; text-align: left"
        ></blockquote>
      </v-layout>
    </template>

    <v-bottom-nav class="secondary" style="height: 44px;" :value="true" >
      <v-text-field
        light
        v-model="content"
        id="content"
        class="pa-1 black--text"
        v-on:keyup.enter="onSendMessage"
      ></v-text-field>
      &nbsp
    </v-bottom-nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    methods: {
      onSendMessage () {
        const messageData = {
          avatar: '/static/doc-images/lists/2.jpg',
          username: 'tunacasserole <span class="grey--text text--lighten-1 caption"> 5:20pm</span>',
          content: this.content,
          date: new Date()
        }
        this.$store.dispatch('createMessage', messageData)
        this.content = ''
      }
    },
    data () {
      return {
        content: ''
      }
    },
    computed: {
      ...mapGetters({
        loadedMessages: 'loadedMessages'
      }),
      loading () {
        return this.$store.getters.loading
      }
    }
  }

</script>
