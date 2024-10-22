<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-light-green-lighten-4">
        <v-container class="fill-height">
          <v-row justify="start" align="center">
            <v-col cols="12" md="6">
              <v-card
                class="mx-auto pa-12 pb-8"
                elevation="20"
                max-width="450"
                rounded="lg"
              >
                <v-card-title class="text-center pb-5 text-h5 font-weight-bold">
                  Login to your account
                </v-card-title>

                <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                <v-text-field
                  class="custom-text-field"
                  rounded="lg"
                  density="compact"
                  placeholder="Email address"
                  variant="outlined"
                  style="height: 60px; line-height: 30px"
                  color="primary"
                  bg-color="grey-lighten-5"
                  @focus="emailFocused = true"
                  @blur="emailFocused = false"
                  required
                >
                  <template v-slot:prepend-inner>
                    <v-icon :color="emailFocused ? 'primary' : ''"
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
                  color="primary"
                  bg-color="grey-lighten-5"
                  @focus="passwordFocused = true"
                  @blur="passwordFocused = false"
                  @click:append-inner="visible = !visible"
                  required
                >
                  <template v-slot:prepend-inner>
                    <v-icon :color="passwordFocused ? 'primary' : ''"
                      >mdi-lock</v-icon
                    >
                  </template>
                </v-text-field>

                <v-btn
                  class="mb-8 mt-2"
                  color="blue"
                  size="large"
                  variant="tonal"
                  block
                >
                  Log In
                </v-btn>

                <v-card-text class="text-center">
                  <a
                    class="text-blue text-decoration-none"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                  </a>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-img
                :width="900"
                aspect-ratio="1/1"
                cover
                src="/src/assets/img/1.png"
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
</style>
