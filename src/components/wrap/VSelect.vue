<template>
  <v-select
    v-model="modelValue"
    :items="items"
    :label="label"
    color="secondary"
    outlined
    dense
    clearable>
  </v-select>
</template>

<script>
export default {
  props: {
    bindValue: { type: String, default: null },
    items: { type: Array, required: true },
    label: { type: String, required: true },
  },
  computed: {
    /** --------------------------------------------------------------------------------
     * 親コンポーネントへ値を受け渡し
     */
    modelValue: {
      get () {
        return this.bindValue
      },
      set (modelValue) {
        if (modelValue !== undefined) {
          this.$emit('update:bindValue', modelValue)
        } else {
          this.$emit('update:bindValue', null)
        }
      }
    }
  },
}
</script>

<style>

</style>