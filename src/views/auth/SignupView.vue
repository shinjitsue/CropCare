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
            <v-col cols="12" md="6" class="d-none d-md-flex">
              <v-img
                :width="900"
                aspect-ratio="1/1"
                cover
                src="/images/icon1.png"
              ></v-img>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                class="mx-auto pa-12 pb-8"
                elevation="24"
                max-width="450"
                rounded="lg"
              >
                <v-card-title class="pb-2 text-center">
                  <h3>Create your account</h3>
                </v-card-title>

                <SignupForm></SignupForm>

                <v-card-text class="text-center mt-2">
                  <h5 class="text-center font-weight-light">
                    Have an account?
                    <RouterLink
                      class="text-light-green-darken-3 text-decoration-none"
                      to="/login"
                    >
                      Log in
                    </RouterLink>
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SignupForm from '@/components/auth/SignupForm.vue'
</script>

<style></style>
