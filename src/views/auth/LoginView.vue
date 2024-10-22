<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-light-green-lighten-4">
        <v-container class="fill-height">
          <form @submit.prevent="submit">
            <v-row justify="start" align="center">
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

                  <div class="text-subtitle-1 text-medium-emphasis">
                    Account
                  </div>

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
                      <v-icon
                        :color="emailFocused ? 'light-green-darken-4' : ''"
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
                    LogIn
                  </v-btn>

                  <v-divider>or</v-divider>

                  <v-btn
                    class="custom-google-btn mt-3"
                    rounded="lg"
                    border="sm"
                    size="large"
                    variant="text"
                    block
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                      class="mr-2"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>

                    Sign-up with google</v-btn
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
          </form>
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
