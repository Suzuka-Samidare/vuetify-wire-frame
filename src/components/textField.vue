<template>
  <v-row>
    <v-col cols="2">
      <v-text-field
        template v-for="i in 3"
        :key="i"
        dense
        label="test"
        outlined
        color="secondary"
        persistent-hint
        hint="hoge">
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        template v-for="i in 3"
        :key="i"
        dense
        label="test"
        outlined>
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        template v-for="i in 3"
        :key="i"
        dense
        label="test"
        outlined>
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        template v-for="i in 2"
        :key="i"
        dense
        label="test"
        outlined>
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        template v-for="i in 2"
        :key="i"
        dense
        label="test"
        outlined>
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn
        v-for="i in 3"
        :key="i"
        class="mb-2"
        color="secondary"
        block
        depressed>
        button
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>