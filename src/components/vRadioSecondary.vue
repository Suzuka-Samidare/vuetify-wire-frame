<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radio" persistent-hint hint="hint">
          <v-radio
            label="Radio Button"
            color="secondary"
            value="RadioButton">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radioActive" mandatory persistent-hint hint="hint">
          <v-radio
            label="Radio Button"
            color="secondary"
            value="Active">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radio" persistent-hint hint="hint">
          <v-radio
            label="Display"
            color="secondary"
            value="Display">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radioActive" mandatory persistent-hint hint="hint">
          <v-radio
            label="Active"
            color="secondary"
            value="Active">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radioDisplay" disabled  persistent-hint hint="hint">
          <v-radio
            label="Display-Disabled"
            color="secondary"
            value="Display-Disabled">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="vModel" mandatory disabled persistent-hint hint="hint">
          <v-radio
            label="Active-Disabled"
            color="secondary"
            value="Active-Disabled">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radioDisplay" success success-messages="s-msg">
          <v-radio
            label="Display-Success"
            color="color"
            value="Display-Success">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="vModel" mandatory success success-messages="s-msg">
          <v-radio
            label="Active-Success"
            color="secondary"
            value="Active-Success">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="radioDisplay" error error-messages="e-msg">
          <v-radio
            label="Display-Error"
            color="secondary"
            value="Display-Error">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-radio-group v-model="vModel" mandatory error error-messages="e-msg">
          <v-radio
            label="Active-Error"
            color="secondary"
            value="Active-Error">
          </v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>  
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '',
      radioActive: 'Active',
      select: [],
      selected: ['Active', 'Active-Disabled', 'Active-Indeterminate', 'Active-Success', 'Active-Error'],
      displayMode: ['Display', 'Display-Disabled', 'Display-Indeterminate', 'Display-Success', 'Display-Error'],
      activeMode: ['Active', 'Active-Disabled', 'Active-Indeterminate', 'Active-Success', 'Active-Error'],
    }
  }
}
</script>

<style>

</style>