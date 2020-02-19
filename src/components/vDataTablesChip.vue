<template>
  <!-- <div> -->
    <!-- <p>{{ organizeData[0] }}</p> -->
    <v-data-table
      height="400"
      fixed-header
      :headers="headers"
      :items="organizeData"
      item-key="url"
      class="elevation-1 my-5"
      :loading="loading"
      loading-text="Loading... Please wait">
      <template v-slot:item.height="{ item }">
        <v-text-field
          v-model="item.height"
          label="input"
          suffix="cm">
        </v-text-field>
      </template>
      <template v-slot:item.gender="{ item }">
        <v-chip :color="markingGender(item.gender)" dark>{{ item.gender }}</v-chip>
      </template>
      <template v-slot:item.edit="{ item }">
        <v-row>
          <v-col cols="4">
            <v-btn text icon :color="item.edit === true ? 'pink' : 'gray'" @click="item.edit = !item.edit">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>
          <!-- <v-col cols="4">
            <v-icon>mdi-star</v-icon>
          </v-col>
          <v-col cols="4">
            <v-icon>mdi-cached</v-icon>
          </v-col> -->
        </v-row>
      </template>
      <!-- <template v-slot:body.prepend="{ headers }">
        <tr>
          <td :colspan="headers.length">1</td>
          <td :colspan="headers.length">2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </template> -->
    </v-data-table>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    idolList: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  data () {
    return {
      headers: [
        { text: 'Name', align: 'left', sortable: false, value: 'name', width: '20%' },
        { text: 'Gender', value: 'gender', width: '15%' },
        { text: 'Height', value: 'height', width: '20%' },
        { text: 'Weight', value: 'weight', width: '20%' },
        { text: 'Edit', value: 'edit', width: '25%' }
      ]
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
          weight: data.weight !== undefined ? data.weight.value : '---',
          // reset value
          edit: false
        }
        res.push(obj)
      }
      return res
    }
  },
  methods: {
    markingGender (gender) {
      if (gender === 'male') return 'blue'
      else return 'red'
    }
  }
}
</script>

<style>

</style>