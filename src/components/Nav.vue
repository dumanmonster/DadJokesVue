<template>
  <v-container
      fluid
  >
    <v-app-bar

        absolute
        color="orange"
        dark
        scroll-target="#scrolling-techniques-6"
    >
      <v-spacer></v-spacer>
      <v-btn outlined elevation="24" class="ml-10" rounded color="black" style="background-color:#E57373">
        <router-link to="/" class="text-decoration-none black--text">
          Generate New Dad Joke
        </router-link>
      </v-btn>
      <v-btn outlined elevation="24" class="ml-10" rounded color="black" style="background-color:#E57373">
        <router-link to="/search" class="text-decoration-none black--text">
          Search Dad Jokes
        </router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>