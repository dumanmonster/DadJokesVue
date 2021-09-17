<template>
  <v-container class="mt-10 pt-3 flex" align-center>
    <v-card
        elevation="2"
        shaped
        class="mx-auto"
        max-width="600px"

    >
      <v-card-text>
        <p class="text-h4 text--primary">Random Joke From Dads Joke Api</p>
        <single-joke :text="joke"></single-joke>
      </v-card-text>
      <v-card-actions>
        <v-btn
            rounded
            color="red lighten-3"
            outlined
            @click="getJokes()"
        >
          Generate New Joke
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>

</template>

<script>
import SingleJoke from '@/components/SingleJoke';
export default {
  name: "Joke",
  methods: {
    getJokes() {
      this.$store.dispatch("getSingleJoke");
    }
  },
  mounted: function() {
    this.getJokes();
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    }
  },
  components: {
    SingleJoke
  }
};

</script>

<style>

</style>