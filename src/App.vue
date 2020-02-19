<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <template v-slot:prepend>
        <v-list-item two-line class="py-4">
          <!-- <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar> -->

          <v-list-item-content>
            <v-list-item-title>我那覇 響</v-list-item-title>
            <v-list-item-subtitle>那覇店</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense class="py-4">
        <v-list-item
          v-for="title in masterMenus"
          :key="title"
          link>
          <v-list-item-content>
            <v-list-item-title>{{ title }}マスタ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-expansion-panels accordion flat focusable class="py-4">
        <v-expansion-panel>
          <v-expansion-panel-header>HorizonArrange</v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0">
            <v-list>
              <v-list-item
                v-for="link in horizonArrangeLinks"
                :key="link.title"
                link>
                <router-link :to="link.url" tag="v-list-item-content">
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>VerticalArrange</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="link in verticalArrangeLinks"
                :key="link.title"
                link>
                <router-link :to="link.url" tag="v-list-item-content">
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>HorizonArrangeFAB</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="link in horizonArrangeFabLinks"
                :key="link.title"
                link>
                <router-link :to="link.url" tag="v-list-item-content">
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>HorizonArrangeTab</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="link in horizonArrangeTabLinks"
                :key="link.title"
                link>
                <router-link :to="link.url" tag="v-list-item-content">
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>HorizonArrangeFixedTab</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                v-for="link in horizonArrangeFixedTabLinks"
                :key="link.title"
                link>
                <router-link :to="link.url" tag="v-list-item-content">
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#01ADB9"
      dark
      dense
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>組織マスタ管理</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <v-icon left>mdi-account</v-icon>
        <div>
          <span class="mr-1">我那覇</span>
          <span class="mr-2">響</span>
        </div>
      </v-btn>
    </v-app-bar>

    <v-content style="min-width: 620px; background: #FFFFFF;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      masterMenus: ['従業員', '品番', 'hoge', 'huga', 'nyaa', 'syaa', 'mmm', 'ggg'],
      horizonArrangeLinks: [
        { title: 'justify-center & table95%', url: '/organization_master_management11' },
        { title: 'justify-start & table95%', url: '/organization_master_management12' },
        { title: 'justify-center & table100%', url: '/organization_master_management13' },
        { title: 'justify-start & table100%', url: '/organization_master_management14' },
      ],
      verticalArrangeLinks: [
        { title: 'justify-center & table95%', url: '/organization_master_management21' },
        { title: 'justify-start & table95%', url: '/organization_master_management22' },
        { title: 'justify-center & table100%', url: '/organization_master_management23' },
        { title: 'justify-start & table100%', url: '/organization_master_management24' },
      ],
      horizonArrangeFabLinks: [
        { title: 'justify-center & table95%', url: '/organization_master_management31' },
        { title: 'justify-start & table95%', url: '/organization_master_management32' },
        { title: 'justify-center & table100%', url: '/organization_master_management33' },
        { title: 'justify-start & table100%', url: '/organization_master_management34' },
      ],
      horizonArrangeTabLinks: [
        { title: 'justify-center & table95%', url: '/organization_master_management41' },
        { title: 'justify-start & table95%', url: '/organization_master_management42' },
        { title: 'justify-center & table100%', url: '/organization_master_management43' },
        { title: 'justify-start & table100%', url: '/organization_master_management44' },
      ],
      horizonArrangeFixedTabLinks: [
        { title: 'justify-center & table95%', url: '/organization_master_management51' },
        { title: 'justify-start & table95%', url: '/organization_master_management52' },
        { title: 'justify-center & table100%', url: '/organization_master_management53' },
        { title: 'justify-start & table100%', url: '/organization_master_management54' },
      ]
    }
  }
};
</script>

<style>
</style>
