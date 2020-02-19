<template>
  <div>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="radioDisplay" persistent-hint hint="hint">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="radioDisplay" success success-messages="s-msg">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="radioDisplay" error error-messages="e-msg">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Display:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="radioDisplay" disabled  persistent-hint hint="hint">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="vModel" mandatory persistent-hint hint="hint">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Success</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="vModel" mandatory success success-messages="s-msg">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Error</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="vModel" mandatory error error-messages="e-msg">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="mb-3" dense justify="space-around" align="center">
      <v-col cols="1">
        <h4>Active:<br>Disabled</h4>
      </v-col>
      <v-col cols="1" v-for="color in colors" :key="color">
        <v-radio-group v-model="vModel" mandatory disabled persistent-hint hint="hint">
          <v-radio
            :label="color"
            :color="color"
            :value="color">
          </v-radio>
        </v-radio-group>
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
      radioDisplay: '',
      radioprimary: 'primary',
      radiosecondary: 'secondary',
      radioaccent: 'accent',
      radioerror: 'error',
      radioinfo: 'info',
      radiosuccess: 'success',
      radiowarning: 'warning'
    }
  },
  methods: {
    vModel (color) {
      return `radio${color}`
    }
  }
}
</script>

<style>

</style>