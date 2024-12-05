<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-light-green-lighten-4 fill-height">
        <v-container style="height: 100%">
          <v-row
            justify="center"
            align="center"
            style="height: 100%"
            class="ma-0"
          >
            <v-col cols="12" md="6">
              <v-card
                class="mx-auto pa-12 pb-8"
                elevation="24"
                max-width="450"
                rounded="lg"
              >
                <v-card-title class="pb-6 text-center">
                  <h5 class="text-h4 font-weight-bold">Welcome!</h5>
                  <small>Log In your account</small>
                </v-card-title>

                <LoginForm></LoginForm>

                <v-card-text class="text-center mt-2">
                  <h5 class="text-center font-weight-light">
                    Don't have an account?
                    <RouterLink
                      class="text-light-green-darken-3 text-decoration-none"
                      to="/signup"
                    >
                      Sign up
                    </RouterLink>
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="d-none d-md-flex">
              <v-img
                :width="900"
                aspect-ratio="1/1"
                cover
                src="/images/icon.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<style>
/* html {
  overflow-y: hidden !important;
} */
</style>
