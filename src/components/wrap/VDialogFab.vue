<template>
  <v-dialog v-model="showDialog" :persistent="persistent" width="500">
    <template v-slot:activator="{ on }">
      <v-speed-dial
        bottom
        right>
        <template v-slot:activator>
          <v-btn
            dark
            fab
            x-large
            :color="activatorColor"
            :disabled="activatorDisabled"
            v-on="on">
            <v-icon>{{ activatorIcon }}</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </template>
    <v-card>
      <v-card-title primary-title>
        {{ title }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <slot name="dialog-card-text"></slot>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#5F6368" text @click="showDialog = false">
          {{ denyActionLabel }}
        </v-btn>
        <v-btn color="secondary" text :disabled="admitActionDisabled" @click="showDialog = false">
          {{ admitActionLabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    // activator props
    activatorColor: { type: String, default: 'secondary' },
    activatorIcon: { type: String, required: true },
    activatorDisabled: { type: Boolean, default: false },
    // dialog props
    persistent: { type: Boolean, default: false },
    // dialog card props
    title: { type: String, default: '' },
    // dialog action button props
    admitActionLabel: { type: String, required: true },
    denyActionLabel: { type: String, required: true },
    admitActionDisabled: { type: Boolean, default: false }
  },
  data () {
    return {
      showDialog: false
    }
  },
}
</script>

<style>

</style>