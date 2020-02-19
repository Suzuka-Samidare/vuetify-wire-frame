<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOff"
          label="Switch"
          color="secondary"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOn"
          label="Switch"
          color="secondary"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOff"
          label="Display"
          color="secondary"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOn"
          label="Active"
          color="secondary"
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOff"
          label="Display-Disabled"
          color="secondary"
          disabled
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOn"
          label="Active-Disabled"
          color="secondary"
          disabled
          persistent-hint
          hint="hint">
        </v-switch>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOff"
          label="Display-Success"
          color="secondary"
          success
          success-messages="s-msg">
        </v-switch>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOn"
          label="Active-Success"
          color="secondary"
          success
          success-messages="s-msg">
        </v-switch>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOff"
          label="Display-Error"
          color="secondary"
          error
          error-messages="e-msg">
        </v-switch>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-switch
          v-model="switchOn"
          label="Active-Error"
          color="secondary"
          error
          error-messages="e-msg">
        </v-switch>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row> 
  </div>
</template>

<script>
export default {
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