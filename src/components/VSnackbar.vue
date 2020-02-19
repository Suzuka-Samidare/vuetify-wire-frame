<template>
  <div class="text-center ma-2" style="height: 600px;">
    <v-btn color="secondary" @click="snackbar = true">Open Snackbar</v-btn>
    <v-snackbar
      v-model="snackbar"
      :timeout="20000"
    >
      {{ text }}<br>
      <v-btn
        color="accent"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      text: 'はいさーい！！',
    }
  }
}
</script>

<style>

</style>