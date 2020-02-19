<template>
  <v-dialog v-model="showDialog" :persistent="persistent" width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        :class="activatorClass"
        :color="activatorColor"
        :depressed="typeDepressed"
        :outlined="typeOutlined"
        :text="typeText"
        :icon="typeIcon"
        :large="activatorLarge"
        :small="activatorSmall"
        :block="activatorBlock"
        :style="activatorCss"
        :disabled="activatorDisabled"
        v-on="on">
        <v-icon v-if="activatorIcon" left>{{ activatorIcon }}</v-icon>
        {{ activatorLabel }}
      </v-btn>
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
    activatorClass: { type: String, default: null },
    activatorLabel: { type: String, required: true },
    activatorColor: { type: String, default: 'secondary' },
    activatorType: { type: String, default: null },
    activatorLarge: { type: Boolean, default: false },
    activatorSmall: { type: Boolean, default: false },
    activatorBlock: { type: Boolean, default: false },
    activatorIcon: { type: String, default: null },
    activatorCss: { type: String, default: null },
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
  computed: {
    typeDepressed () {
      if (this.activatorType === 'depressed') return true 
      return false
    },
    typeOutlined () {
      if (this.activatorType === 'outlined') return true
      return false
    },
    typeText () {
      if (this.activatorType === 'text') return true
      return false
    },
    typeIcon () {
      if (this.activatorType === 'icon') return true
      return false
    },
  }
}
</script>

<style>

</style>