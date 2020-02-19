<template>
  <div id="organizaiton-master-management">
    <v-container fluid>
      <!-- <v-sheet class="my-4 elevation-1"> -->
        <v-row class="mx-3 py-3">
          <v-col cols="3" lg="2">
            <VSelect
              :bindValue.sync="viewMaster"
              label="マスタ種別"
              :items="viewMasters">
            </VSelect>
          </v-col>
          <v-col cols="8" lg="10">
            <VButton
              class="mr-3"
              label="検索"
              icon="mdi-magnify"
              large
              style="width: 150px;"
              :disabled="viewMaster === null"
              @click-emit="test">
            </VButton>
            <VDialog
              activatorLabel="新規追加"
              activatorColor="#FF9300"
              activatorType="outlined"
              activatorIcon="mdi-plus"
              activatorLarge
              activatorCss="width: 150px;"
              :activatorDisabled="viewMaster === null"
              persistent
              title="新規追加"
              admitActionLabel="登録"
              denyActionLabel="キャンセル">
              <span slot="dialog-card-text">
                <v-row>
                  <v-col cols="6" class="pb-0">
                    <VTextField
                      label="室部店コード">
                    </VTextField>
                  </v-col>
                  <v-col cols="6" class="pb-0">
                    <VTextField
                      label="室部店名">
                    </VTextField>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" class="pb-0">
                    <VTextField
                      label="グループ・フロアコード">
                    </VTextField>
                  </v-col>
                  <v-col cols="6" class="pb-0">
                    <VTextField
                      label="グループ・フロア名">
                    </VTextField>
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    <VSelect
                      label="HDB店舗コード : 店舗名"
                      :items="viewMasters">
                    </VSelect>
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    <VSelect
                      label="HDBフロアコード : フロア名"
                      :items="viewMasters">
                    </VSelect>
                  </v-col>
                </v-row>
              </span>
            </VDialog>
          </v-col>
        </v-row>
      <!-- </v-sheet> -->

      <VDataTableOrganizationMaster
        v-show="viewMaster === '所属マスタ'"
        :idolList.sync="idolList"
        :loading="loading">
      </VDataTableOrganizationMaster>
      <v-sheet
        v-for="sheet in vSheetList"
        :key="sheet.name"
        v-show="viewMaster === sheet.name"
        :color="sheet.color"
        width="100%"
        height="840px">
        {{ sheet.name }}
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { getIdolProfile } from '../../api/sampleData'

import VButton from '../wrap/VButton'
import VDataTableOrganizationMaster from '../vDataTableOrganizationMaster'
import VDialog from '../wrap/VDialog'
import VSelect from '../wrap/VSelect'
import VTextField from '../wrap/VTextField'

export default {
  components: {
    VButton,
    VDataTableOrganizationMaster,
    VDialog,
    VSelect,
    VTextField
  },
  data () {
    return {
      viewMaster: null,
      viewMasters: ['所属マスタ', '役職マスタ', '区分マスタ', '等級マスタ'],
      vSheetList: [
        { name: '役職マスタ', color: 'cyan' },
        { name: '区分マスタ', color: 'orange' },
        { name: '等級マスタ', color: 'green' }
      ],      

      idolList: [],
      loading: false,

      fab: false
    }
  },
  methods: {
    /* eslint-disable no-console */
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>