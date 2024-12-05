<template>
  <v-app class="d-flex flex-column fill-height">
    <v-main class="d-flex align-center justify-center fill-height">
      <v-container fluid class="pa-0 ma-0 fill-height position-relative">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="960" height="540" fill="#7CB342"></rect>
          <path
            d="M0 474L32 475.7C64 477.3 128 480.7 192 482.3C256 484 320 484 384 474.8C448 465.7 512 447.3 576 438.8C640 430.3 704 431.7 768 439.8C832 448 896 463 928 470.5L960 478L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
            fill="#F1F8E9"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <v-row
          class="fill-height d-flex align-center justify-center position-absolute top-0 left-0 right-0 bottom-0"
        >
          <v-col class="text-center">
            <h1>Your Text Here</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup></script>

<style scoped>
/* No custom CSS needed */
</style>
