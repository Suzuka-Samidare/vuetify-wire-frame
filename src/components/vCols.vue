<template>
  <v-container id="grids">
    <v-row>
      <v-col cols="9" sm="9" md="3"> <!-- 画面サイズがsm(600px)以上なら9/12の範囲で、sm(600px)未満なら幅いっぱいに描画する。 -->
        <v-card color="red" height="200">
          <div class="pa-2 display-1">A-1</div>
          <div class="px-2 body-1">sm = 9</div>
          <div class="px-2 body-1">cols = 12</div>
        </v-card>
      </v-col>
      <v-col cols="3" sm="3" md="9"> <!-- 画面サイズがsm(600px)以上なら3/12の範囲で、sm(600px)未満なら幅いっぱいに描画する。 -->
        <v-card color="red lighten-2" height="200">
          <div class="pa-2 display-1">A-2</div>
          <div class="px-2 body-1">sm = 3</div>
          <div class="px-2 body-1">cols = 12</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4" offset-sm="4"> <!-- 画面サイズがsm(600px)以上なら9/12の範囲で、sm(600px)未満なら幅いっぱいに描画する。 -->
        <v-card color="pink" height="200">
          <div class="pa-2 display-1">B-1</div>
          <div class="px-2 body-1">sm = 5</div>
          <div class="px-2 body-1">cols = 12</div>
          <div class="px-2 body-1">offset-sm = 4</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4"> <!-- 画面サイズがsm(600px)以上なら3/12の範囲で、sm(600px)未満なら幅いっぱいに描画する。 -->
        <v-card color="pink lighten-2" height="200">
          <div class="pa-2 display-1">B-2</div>
          <div class="px-2 body-1">sm = 5</div>
          <div class="px-2 body-1">cols = 12</div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  
}
</script>

<style scoped>
</style>