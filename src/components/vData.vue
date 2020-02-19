<template>
  <v-row class="my-5">
    <v-col cols=3>
      <v-simple-table dense class="elevation-1">
        <template v-slot:default>
          <tbody>
            <tr v-for="(key, index) in itemKeys" :key="key" class="mb-2">
              <td class="pl-0">
                <v-chip
                  color="#44a05b"
                  label
                  dark
                  style="width: 100%;">
                  {{ key }}
                </v-chip>
              </td>
              <td>{{ itemValues[index] }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      // Data pull from API or props 
      dessert: {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      }
    }
  },
  computed: {
    itemKeys () {
      return Object.keys(this.dessert)
    },
    itemValues () {
      return Object.values(this.dessert)
    }
  }
}
</script>

<style>

</style>