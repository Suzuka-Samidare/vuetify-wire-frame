<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Off:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOff"
          :label="color"
          :color="color"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Off:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOff"
          :label="color"
          :color="color"
          success
          success-messages="s-msg">
        </v-switch>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Off:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOff"
          :label="color"
          :color="color"
          error
          error-messages="e-msg">
        </v-switch>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Off:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOff"
          :label="color"
          :color="color"
          disabled
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>On:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOn"
          :label="color"
          :color="color"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>On:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOn"
          :label="color"
          :color="color"
          success
          success-messages="s-msg">
        </v-switch>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>On:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOn"
          :label="color"
          :color="color"
          error
          error-messages="e-msg">
        </v-switch>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>On:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-switch
          v-model="switchOn"
          :label="color"
          :color="color"
          disabled
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  props: {
    colors: { type: Array, required: true }
  },
  data () {
    return {
      switchOff: false,
      switchOn: true
    }
  }
}
</script>

<style>

</style>