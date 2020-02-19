<template>
  <div>
    <v-simple-table dense fixed-header :height="height" class="my-2" style="border: 1px solid lightgray;">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.text" class="text-left">{{ header.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in organizeData" :key="item.url">
            <td>{{ item.name }}</td>
            <td>{{ item.color }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.height }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.birthDate }}</td>
            <td>{{ item.birthPlace }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.cv }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.attribute }}</td>
            <td>{{ item.division }}</td>
            <td>{{ item.favorite }}</td>
            <td>
              <VDialog
                activatorLabel="編集"
                activatorType="outlined"
                title="組織情報編集"
                admitActionLabel="変更"
                denyActionLabel="キャンセル">
                <span slot="dialog-card-text">
                  <v-row>
                    <v-col cols="12">
                      <VSelect
                        label="室部店"
                        :items="items">
                      </VSelect>
                      <VSelect
                        label="HDB店舗"
                        :items="items">
                      </VSelect>
                      <VSelect
                        label="所属"
                        :items="items">
                      </VSelect>
                      <VSelect
                        label="フロア"
                        :items="items">
                      </VSelect>
                    </v-col>
                  </v-row>  
                </span>
              </VDialog>
            </td>
            <td>
              <VDialog
                activatorLabel="削除"
                activatorColor="error"
                activatorType="outlined"
                admitActionLabel="削除"
                denyActionLabel="キャンセル">
                <span slot="dialog-card-text">
                  <div>本当に削除してもよろしいですか？</div>
                </span>
              </VDialog>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import VDialog from './wrap/VDialog'
import VSelect from './wrap/VSelect'

export default {
  components: {
    VDialog,
    VSelect
  },
  props: {
    height: { type: String, default: '840px' },
    idolList: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  data () {
    return {
      headers: [
        { text: 'Name', align: 'left', sortable: false, value: 'name' },
        { text: 'Color', value: 'color' },
        { text: 'Gender', value: 'gender' },
        { text: 'Height', value: 'height' },
        { text: 'Weight', value: 'weight' },
        { text: 'BirthDate', value: 'birthDate' },
        { text: 'BirthPlace', value: 'birthPlace' },
        { text: 'Age', value: 'age' },
        { text: 'CV', value: 'cv' },
        { text: 'Title', value: 'title' },
        { text: 'Attribute', value: 'attribute' },
        { text: 'Division', value: 'division' },
        { text: 'Favorite', value: 'favorite' },
        { text: 'Edit', value: 'edit' },
        { text: 'Delete', value: 'delete' }
      ],
      dialog: false,
      selectValue: '',
      items: ['我那覇響', '水瀬伊織', '星井美希', '如月千早']
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
          title: data.title.value,
          cv: data.cv.value,
          age: data.age !== undefined ? data.age.value : '---',
          birthDate: data.birthDate !== undefined ? data.birthDate.value : '---',
          birthPlace: data.birthPlace !== undefined ? data.birthPlace.value : '---',
          constellation: data.constellation !== undefined ? data.constellation.value : '---',
          hobby: data.hobby !== undefined ? data.hobby.value : '---',
          gender: data.gender !== undefined ? data.gender.value : '---',
          height: data.height !== undefined ? data.height.value : '---',
          weight: data.weight !== undefined ? data.weight.value : '---',
          bloodType: data.bloodType !== undefined ? data.bloodType.value : '---',
          color: data.color !== undefined ? data.color.value : '---',
          handedness: data.handedness !== undefined ? data.handedness.value : '---',
          familyName: data.familyName !== undefined ? data.familyName.value : '---',
          givenName: data.givenName !== undefined ? data.givenName.value : '---',
          alternateName: data.alternateName !== undefined ? data.alternateName.value : '---',
          bust: data.bust !== undefined ? data.bust.value : '---',
          waist: data.waist !== undefined ? data.waist.value : '---',
          hip: data.hip !== undefined ? data.hip.value : '---',
          talent: data.talent !== undefined ? data.talent.value : '---',
          attribute: data.attribute !== undefined ? data.attribute.value : '---',
          division: data.division !== undefined ? data.division.value : '---',
          favorite: data.favorite !== undefined ? data.favorite.value : '---',
          type: data.type !== undefined ? data.type.value : '---',
          category: data.category !== undefined ? data.category.value : '---',
          shoeSize: data.shoeSize !== undefined ? data.shoeSize.value : '---',
          // reset value
          edit: false
        }
        res.push(obj)
      }
      return res
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>