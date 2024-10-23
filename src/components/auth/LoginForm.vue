<template>
  <v-form>
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

      <a
        class="text-caption text-decoration-none text-light-green-darken-2"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Forgot password?</a
      >
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
        <v-icon :color="passwordFocused ? 'light-green-darken-4' : ''"
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
      <GoogleIcon />
      Sign-up with google
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'

const visible = ref(false)
const emailFocused = ref(false)
const passwordFocused = ref(false)
</script>

<style scoped>
.custom-google-btn {
  text-transform: none;
  font-size: 14px;
}
</style>
