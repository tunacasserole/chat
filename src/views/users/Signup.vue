<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignup">
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
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[comparePasswords]"
                    ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <!--<v-flex xs12>-->
                  <!--<v-btn flat dark right @click="googleOnSignup">-->
                    <!--SIGN UP WITH GOOGLE-->
                  <!--</v-btn>-->
                <!--</v-flex>-->
                <v-flex xs12>
                  <v-btn class="primary" :disabled="!formIsValid" type="submit">
                    Sign up
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
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : true
      },
      formIsValid () {
        return this.comparePasswords
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        // Reach out to Firebase
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
//      googleOnSignup () {
//        // Reach out to Firebase
//        this.$store.dispatch('googleSignUserUp', {email: this.email, password: this.password})
//      }
    }
  }
</script>
