<template>
  <v-container>
    <v-row>
      <p>calendar : {{ start }}</p>
      <v-select
        v-model="type"
        :items="typeOptions"
        label="Type"
        hide-details
        outlined
        dense
      ></v-select>
      <!-- <v-btn @click="$refs.calendar.prev()">prev</v-btn>
      <v-btn @click="$refs.calendar.next()">next</v-btn> -->
    </v-row>
    <v-calendar
      ref="calendar"
      v-model="start"
      color="red"
      :type="type"
      :start="start"
      end="2020-02-12">
    </v-calendar>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      type: 'month',
      start: '2019-02-12',

      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' },
      ],
    }
  }
}
</script>

<style scoped>

</style>