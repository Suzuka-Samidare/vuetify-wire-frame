<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Checkbox"
          color="secondary"
          value="Display"
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Checkbox"
          color="secondary"
          value="Active"
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Display"
          color="secondary"
          value="Display"
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Active"
          color="secondary"
          value="Active"
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Display-Disabled"
          color="secondary"
          value="Display-Disabled"
          disabled
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Active-Disabled"
          color="secondary"
          value="Active-Disabled"
          disabled
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Display-Indeterminate"
          color="secondary"
          value="Display-Indeterminate"
          indeterminate
          readonly
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Active-Indeterminate"
          color="secondary"
          value="Active-Indeterminate"
          indeterminate
          readonly
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Display-Success"
          color="secondary"
          value="Display-Success"
          success
          success-messages="s-msg">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Active-Success"
          color="secondary"
          value="Active-Success"
          success
          success-messages="s-msg">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="select"
          label="Display-Error"
          color="secondary"
          value="Display-Error"
          error
          error-messages="e-msg">
        </v-checkbox>
      </v-col>
      <v-col cols="2" style="text-align: left;">
        <v-checkbox
          v-model="selected"
          label="Active-Error"
          color="secondary"
          value="Active-Error"
          error
          error-messages="e-msg">
        </v-checkbox>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>  
  </div>
</template>

<script>
export default {
  data () {
    return {
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