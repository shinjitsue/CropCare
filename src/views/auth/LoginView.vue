<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-light-green-lighten-4">
        <v-container class="fill-height">
          <v-row justify="start" align="center">
            <v-col cols="12" md="6">
              <v-card
                class="mx-auto pa-12 pb-8"
                elevation="24"
                max-width="450"
                rounded="lg"
              >
                <v-card-title class="pb-6 text-center">
                  <h5 class="text-h5 font-weight-bold">
                    Login to your account
                  </h5>
                </v-card-title>

                <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                <v-text-field
                  class="custom-text-field"
                  rounded="lg"
                  density="compact"
                  placeholder="Email address"
                  variant="outlined"
                  style="height: 60px; line-height: 30px"
                  color="light-green-darken-2"
                  bg-color="grey-lighten-5"
                  @focus="emailFocused = true"
                  @blur="emailFocused = false"
                  required
                >
                  <template v-slot:prepend-inner>
                    <v-icon :color="emailFocused ? 'light-green-darken-4' : ''"
                      >mdi-email</v-icon
                    >
                  </template>
                </v-text-field>

                <div
                  class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                  Password
                </div>

                <v-text-field
                  class="custom-text-field"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  density="compact"
                  placeholder="Enter your password"
                  variant="outlined"
                  rounded="lg"
                  style="height: 60px; line-height: 30px"
                  color="light-green-darken-2"
                  bg-color="grey-lighten-5"
                  @focus="passwordFocused = true"
                  @blur="passwordFocused = false"
                  @click:append-inner="visible = !visible"
                  required
                >
                  <template v-slot:prepend-inner>
                    <v-icon
                      :color="passwordFocused ? 'light-green-darken-4' : ''"
                      >mdi-lock</v-icon
                    >
                  </template>
                </v-text-field>

                <v-btn
                  rounded="lg"
                  class="mb-3 mt-3"
                  color="light-green-darken-3"
                  size="large"
                  variant="tonal"
                  block
                >
                  Log In
                </v-btn>

                <v-divider>or</v-divider>

                <v-btn
                  class="custom-google-btn mt-3"
                  prepend-icon="mdi-google"
                  rounded="lg"
                  border="sm"
                  size="large"
                  variant="text"
                  block
                  >Sign-up with google</v-btn
                >

                <v-card-text class="text-center mt-2">
                  <h5 class="text-center">
                    Don't have an account?
                    <RouterLink
                      class="text-light-green-darken-2 text-decoration-none"
                      to="/register"
                    >
                      Register here
                    </RouterLink>
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
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
import { ref } from 'vue'

const visible = ref(false)
const emailFocused = ref(false)
const passwordFocused = ref(false)
</script>

<style>
html {
  overflow-y: hidden !important;
}

.fill-height {
  height: 100vh;
}

.custom-google-btn {
  text-transform: none;
  font-size: 14px;
}
</style>
