<template>
  <v-row justify="center">
    <v-col v-for="color in colors" :key="color" cols="3">
      <v-row justify="center">
        <v-btn disabled  :color="color">{{ color }}</v-btn>
      </v-row>
    </v-col>
    <v-col>
      <v-icon></v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      colors: ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning', 'beauty', 'lime']
    }
  }
}
</script>

<style>

</style>