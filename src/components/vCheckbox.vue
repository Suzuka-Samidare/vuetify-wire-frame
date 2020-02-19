<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="select"
          :label="color"
          :color="color"
          :value="color"
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="select"
          :label="color"
          :color="color"
          :value="color"
          success
          success-messages="s-msg">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="select"
          :label="color"
          :color="color"
          :value="color"
          error
          error-messages="e-msg">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="select"
          :label="color"
          :color="color"
          :value="color"
          disabled
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Indeterminate</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="select"
          :label="color"
          :color="color"
          :value="color"
          indeterminate
          readonly
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="selected"
          :label="color"
          :color="color"
          :value="color"
          dense
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="selected"
          :label="color"
          :color="color"
          :value="color"
          success
          success-messages="s-msg">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="selected"
          :label="color"
          :color="color"
          :value="color"
          error
          error-messages="e-msg">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="selected"
          :label="color"
          :color="color"
          :value="color"
          disabled
          persistent-hint
          hint="hint">
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Indeterminate</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-checkbox
          v-model="selected"
          :label="color"
          :color="color"
          :value="color"
          indeterminate
          readonly
          persistent-hint
          hint="hint">
        </v-checkbox>
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
      select: [],
      selected: ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning']
    }
  }
}
</script>

<style>

</style>