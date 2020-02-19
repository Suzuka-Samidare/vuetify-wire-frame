<template>
  <v-btn
    :color="color"
    :depressed="typeDepressed"
    :outlined="typeOutlined"
    :text="typeText"
    :icon="typeIcon"
    :small="small"
    :large="large"
    :block="block"
    :disabled="disabled"
    @click="clickAction">
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: {
    // base
    label: { type: String, required: true },
    color: { type: String, default: 'secondary' },
    // type
    typeDepressed: { type: Boolean, default: false },
    typeOutlined: { type: Boolean, default: false },
    typeText: { type: Boolean, default: false },
    typeIcon: { type: Boolean, default: false },
    // size
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    // append
    icon: { type: String, default: null },
    // status
    disabled: { type: Boolean, default: false }
  },
  methods: {
    clickAction () {
      this.$emit('click-emit')
    }
  }
}
</script>

<style>

</style>