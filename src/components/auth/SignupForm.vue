<template>
  <v-form>
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <v-text-field
      class="signup-text-field"
      rounded="lg"
      density="compact"
      placeholder="Enter your email"
      variant="outlined"
      style="height: 60px; line-height: 30px"
      color="light-green-darken-2"
      bg-color="grey-lighten-5"
      @focus="isEmailFocused = true"
      @blur="isEmailFocused = false"
      required
    >
      <template v-slot:prepend-inner>
        <v-icon :color="isEmailFocused ? 'light-green-darken-4' : ''"
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
      class="signup-text-field"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="isPasswordVisible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      variant="outlined"
      rounded="lg"
      style="height: 60px; line-height: 30px"
      color="light-green-darken-2"
      bg-color="grey-lighten-5"
      @focus="isPasswordFocused = true"
      @blur="isPasswordFocused = false"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      required
    >
      <template v-slot:prepend-inner>
        <v-icon :color="isPasswordFocused ? 'light-green-darken-4' : ''"
          >mdi-lock</v-icon
        >
      </template>
    </v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Re-enter Password
    </div>

    <v-text-field
      class="signup-text-field"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="isPasswordVisible ? 'text' : 'password'"
      density="compact"
      placeholder="Re-enter your password"
      variant="outlined"
      rounded="lg"
      style="height: 60px; line-height: 30px"
      color="light-green-darken-2"
      bg-color="grey-lighten-5"
      @focus="isPasswordFocused = true"
      @blur="isPasswordFocused = false"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      required
    >
      <template v-slot:prepend-inner>
        <v-icon :color="isPasswordFocused ? 'light-green-darken-4' : ''"
          >mdi-lock-check</v-icon
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
      SIGNUP
    </v-btn>

    <v-divider>or</v-divider>

    <v-btn
      class="signup-google-btn mt-3"
      rounded="lg"
      border="sm"
      size="large"
      variant="text"
      block
    >
      <GoogleIcon />
      Sign-up with Google
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'

const isPasswordVisible = ref(false)
const isEmailFocused = ref(false)
const isPasswordFocused = ref(false)
</script>

<style scoped>
.signup-google-btn {
  text-transform: none;
  font-size: 14px;
}
</style>
