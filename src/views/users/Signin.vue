<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignIn">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Mail"
                    id="email"
                    v-model="email"
                    type="email"
                    required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <!--<v-flex xs12>-->
                <!--<v-btn flat dark right @click="googleOnSignup">-->
                <!--SIGN UP WITH GOOGLE-->
                <!--</v-btn>-->
                <!--</v-flex>-->
                <v-flex xs12>
                  <v-btn class="primary" type="submit">
                    Sign in
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
//    watch: {
//      user (value) {
//        if (value !== null && value !== undefined) {
//          this.$router.push('/')
//        }
//      }
//    },
    methods: {
      onSignIn () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
//      googleOnSignup () {
//        // Reach out to Firebase
//        this.$store.dispatch('googleSignUserUp', {email: this.email, password: this.password})
//      }
    }
  }
</script>
