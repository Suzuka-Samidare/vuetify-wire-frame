<template>
  <div>
    <h3 class="mb-5 text-center">BigDepartment Tags</h3>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="1" v-for="item in bigDepartment" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          label
          large>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="1" v-for="item in bigDepartment" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          label>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="mb-5" dense justify="space-around" align="center">
      <v-col class="text-center" cols="1" v-for="item in bigDepartment" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          label
          small>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <h3 class="my-5 text-center">Input Option Tags</h3>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="4" v-for="(item, index) in inputOptions" :key="index">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          large>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="4" v-for="(item, index) in inputOptions" :key="index">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)">
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="mb-5" dense justify="space-around" align="center">
      <v-col class="text-center" cols="4" v-for="(item, index) in inputOptions" :key="index">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          small>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <h3 class="my-5 text-center">Info Option Tags</h3>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="3" v-for="item in infoOptions" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          label
          large>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row dense justify="space-around" align="center">
      <v-col class="text-center" cols="3" v-for="item in infoOptions" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          >
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="mb-5" dense justify="space-around" align="center">
      <v-col class="text-center" cols="3" v-for="item in infoOptions" :key="item.name">
        <v-chip
          :color="item.color"
          :text-color="chipTextColor(item.name)"
          label
          small>
          {{ item.name }}
        </v-chip>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      bigDepartment: [
        { name: 'VT', color: '#ef9078' },
        { name: 'OD', color: '#f5bf2b' },
        { name: 'HW', color: '#fbe693' },
        { name: 'ST', color: '#b4d27c' },
        { name: 'IN', color: '#80c6c1' },
        { name: 'HC', color: '#5eabde' },
        { name: 'TM', color: '#5eabde' },
        { name: 'BT', color: '#b8a8de' },
        { name: 'HB', color: '#e9acc2' },
        { name: 'PS', color: '#7a858c' },
        { name: '管理G', color: '#a4b6c1' },
        { name: '本社', color: '#a4b6c1' },
      ],
      inputOptions: [
        { name: '必須', color: 'error' },
        { name: '任意', color: 'secondary' },
        { name: '任意', color: '#737373' },
      ],
      infoOptions: [
        { name: 'FAX発注', color: '#737373' },
        { name: '店間移動', color: '#737373' },
        { name: '通常発注', color: '#737373' },
        { name: '本社発注', color: '#737373' }
      ]
    }
  },
  methods: {
    chipTextColor (name) {
      if (name === 'HW') return '#a68149'
      else return '#ffffff'
    }
  }
}
</script>

<style>

</style>