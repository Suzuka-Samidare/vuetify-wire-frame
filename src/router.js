import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/main.vue'
import OrganizationMasterManagement11 from './components/wireframe/organizationMasterManegement11.vue'
import OrganizationMasterManagement12 from './components/wireframe/organizationMasterManegement12.vue'
import OrganizationMasterManagement13 from './components/wireframe/organizationMasterManegement13.vue'
import OrganizationMasterManagement14 from './components/wireframe/organizationMasterManegement14.vue'
import OrganizationMasterManagement21 from './components/wireframe/organizationMasterManegement21.vue'
import OrganizationMasterManagement22 from './components/wireframe/organizationMasterManegement22.vue'
import OrganizationMasterManagement23 from './components/wireframe/organizationMasterManegement23.vue'
import OrganizationMasterManagement24 from './components/wireframe/organizationMasterManegement24.vue'
import OrganizationMasterManagement31 from './components/wireframe/organizationMasterManegement31.vue'
import OrganizationMasterManagement32 from './components/wireframe/organizationMasterManegement32.vue'
import OrganizationMasterManagement33 from './components/wireframe/organizationMasterManegement33.vue'
import OrganizationMasterManagement34 from './components/wireframe/organizationMasterManegement34.vue'
import OrganizationMasterManagement41 from './components/wireframe/organizationMasterManegement41.vue'
import OrganizationMasterManagement42 from './components/wireframe/organizationMasterManegement42.vue'
import OrganizationMasterManagement43 from './components/wireframe/organizationMasterManegement43.vue'
import OrganizationMasterManagement44 from './components/wireframe/organizationMasterManegement44.vue'
import OrganizationMasterManagement51 from './components/wireframe/organizationMasterManegement51.vue'
import OrganizationMasterManagement52 from './components/wireframe/organizationMasterManegement52.vue'
import OrganizationMasterManagement53 from './components/wireframe/organizationMasterManegement53.vue'
import OrganizationMasterManagement54 from './components/wireframe/organizationMasterManegement54.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/organization_master_management11',
      component: OrganizationMasterManagement11
    },
    {
      path: '/organization_master_management12',
      component: OrganizationMasterManagement12
    },
    {
      path: '/organization_master_management13',
      component: OrganizationMasterManagement13
    },
    {
      path: '/organization_master_management14',
      component: OrganizationMasterManagement14
    },
    {
      path: '/organization_master_management21',
      component: OrganizationMasterManagement21
    },
    {
      path: '/organization_master_management22',
      component: OrganizationMasterManagement22
    },
    {
      path: '/organization_master_management23',
      component: OrganizationMasterManagement23
    },
    {
      path: '/organization_master_management24',
      component: OrganizationMasterManagement24
    },
    {
      path: '/organization_master_management31',
      component: OrganizationMasterManagement31
    },
    {
      path: '/organization_master_management32',
      component: OrganizationMasterManagement32
    },
    {
      path: '/organization_master_management33',
      component: OrganizationMasterManagement33
    },
    {
      path: '/organization_master_management34',
      component: OrganizationMasterManagement34
    },
    {
      path: '/organization_master_management41',
      component: OrganizationMasterManagement41
    },
    {
      path: '/organization_master_management42',
      component: OrganizationMasterManagement42
    },
    {
      path: '/organization_master_management43',
      component: OrganizationMasterManagement43
    },
    {
      path: '/organization_master_management44',
      component: OrganizationMasterManagement44
    },
    {
      path: '/organization_master_management51',
      component: OrganizationMasterManagement51
    },
    {
      path: '/organization_master_management52',
      component: OrganizationMasterManagement52
    },
    {
      path: '/organization_master_management53',
      component: OrganizationMasterManagement53
    },
    {
      path: '/organization_master_management54',
      component: OrganizationMasterManagement54
    },
  ]
})