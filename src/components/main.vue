<template>
  <div class="my-3 mx-5">

    
    <h2>
      このページはワイヤーフレームページではありません<br>
      サイドメニューの***Arrangeから遷移してください。
    </h2>

    <VCols />

    <VSnackbar />

    <VCheckboxSubSelection />

    <VCheckboxSecondary
      class="my-10">
    </VCheckboxSecondary>

    <VCheckbox
      class="my-10"
      :colors="colors">
    </VCheckbox>

    <!-- <VRadioSecondary
      class="my-10">
    </VRadioSecondary> -->

    <VRadio
      class="my-10"
      :colors="colors">
    </VRadio>

    <VSwitchSecondary
      class="my-10">
    </VSwitchSecondary>

    <VSwitch
      class="my-10"
      :colors="colors">
    </VSwitch>

    <VChips
      class="my-10"
      :colors="colors">
    </VChips>

    <ButtonColors
      class="my-10">
    </ButtonColors>

    <TextField
      class="my-10">
    </TextField>

    <v-btn class="my-5" color="primary" block @click="test">GET</v-btn>

    <VData></VData>

    <VDataTables
      :idolList.sync="idolList"
      :loading="loading">
    </VDataTables>

    <VDataTablesChip
      :idolList.sync="idolList"
      :loading="loading">
    </VDataTablesChip>

    <!-- <TestCalendar></TestCalendar> -->
  </div>
</template>

<script>
import { getIdolProfile } from '../api/sampleData'

import ButtonColors from './buttonColors'
import VCheckbox from './vCheckbox'
import VCheckboxSecondary from './vCheckboxSecondary'
import VCheckboxSubSelection from './VCheckboxSubSelection'
import VChips from './vChips'
import VCols from './vCols'
import VData from './vData'
import VDataTables from './vDataTables'
import VDataTablesChip from './vDataTablesChip'
import VRadio from './vRadio'
// import VRadioSecondary from './vRadioSecondary'
import VSnackbar from './VSnackbar'
import VSwitch from './vSwitch'
import VSwitchSecondary from './vSwitchSecondary'

// import TestCalendar from './testCalendar'
import TextField from './textField'

export default {
  components: {
    ButtonColors,
    VCheckbox,
    VCheckboxSecondary,
    VCheckboxSubSelection,
    VChips,
    VCols,
    VData,
    VDataTables,
    VDataTablesChip,
    VRadio,
    // VRadioSecondary,
    VSnackbar,
    VSwitch,
    VSwitchSecondary,
    // TestCalendar,
    TextField
  },
  data () {
    return {
      idolList: [],
      loading: false,

      // preset
      colors: ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning']
    }
  },
  methods: {
    test () {
      this.idolList = []
      this.loading = true
      getIdolProfile()
        .then(res => {
          this.idolList = res.data.results.bindings
        })
        .catch(err => {
          alert(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>