<template>
  <v-row class="my-5">
    <v-col cols=12 sm=3>
      <v-card class="pa-3" height="100%">
        <div>
          <v-checkbox v-model="viewData" :label="`Age`" value="Age"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Gender`" value="Gender"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Height`" value="Height"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Weight`" value="Weight"></v-checkbox>
          <v-btn @click="viewData = []">RESET</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols=12 sm=9>
      <v-data-table
        class="elevation-1"
        height="300"
        dense
        fixed-header
        :headers="tableHeader"
        :items="organizeData"
        item-key="url"
        :loading="loading"
        loading-text="Loading... Please wait">
      </v-data-table>
    </v-col>
  </v-row>

  <!-- <v-row>
    <v-col cols=12 sm=3>
      <v-card class="my-5" height="400">
        <div class="pa-5">
          <v-checkbox v-model="viewData" :label="`Age`" value="Age"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Gender`" value="Gender"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Height`" value="Height"></v-checkbox>
          <v-checkbox v-model="viewData" :label="`Weight`" value="Weight"></v-checkbox>
          <v-btn @click="viewData = []">RESET</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols=12 sm=9 align-self="center">
      <v-data-table
        dense
        height="400"
        :headers="tableHeader"
        :items="organizeData"
        fixed-header
        item-key="url"
        class="elevation-1 my-5"
        :loading="loading"
        loading-text="Loading... Please wait">
      </v-data-table>
    </v-col>
  </v-row> -->
</template>

<script>
export default {
  props: {
    idolList: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  data () {
    return {
      viewData: []
    }
  },
  computed: {
    organizeData () {
      let res = []
      for (let i = 0; i < this.idolList.length; i++) {
        const data = this.idolList[i]
        let obj = {
          url: data.data.value,
          name: data.label.value,
          age: data.age !== undefined ? data.age.value : '---',
          gender: data.gender !== undefined ? data.gender.value : '---',
          height: data.height !== undefined ? data.height.value : '---',
          weight: data.weight !== undefined ? data.weight.value : '---'
        }
        res.push(obj)
      }
      return res
    },
    tableHeader () {
      let res = [
        { text: 'Name', align: 'left', sortable: false, value: 'name' },
      ]
      for (let i = 0; i < this.viewData.length; i++) {
        res.push({ text: this.viewData[i], value: this.viewData[i].toLowerCase() })
      }
      return res
    }
  }
}
</script>

<style>
.height-400 {
  height: 400px;
}
</style>