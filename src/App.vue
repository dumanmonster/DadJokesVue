<template>
  <v-app>
    <Nav/>
    <v-content transition="slide-x-transition">

        <router-view></router-view>

    </v-content>

  </v-app>
</template>

<script>

import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }

};
</script>
<style scoped>

</style>