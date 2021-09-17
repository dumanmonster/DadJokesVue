<template>
  <v-container align-center class="mt-10 pt-3 flex">


    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
      <v-text-field
          v-model="searchTerm"
          :rules="searchRules"
          label="Search term"
          @keyup.enter="getJokes(searchTerm)"
          required
      ></v-text-field>
      <v-btn class="ml-10" rounded outlined :disabled="!valid" @click="getJokes(searchTerm)" color="red lighten-3">Submit</v-btn>
      <v-btn class="ml-10" rounded outlined @click="clear" color="red lighten-3">Clear</v-btn>
    </v-form>

    <v-slide-y-transition group>
      <single-joke
          v-for="(joke, index) in allJokes"
          is="single-joke"
          :key="index"
          :joke="joke"
          :index="index"
          :text="joke.joke"
      ></single-joke>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import SingleJoke from "@/components/SingleJoke";

export default {
  name: "Search",
  data: () => {
    return {
      searchTerm: "",
      searchRules: [v => !!v || "Search term is required"],
      valid: true
    };
  },
  methods: {
    getJokes(term) {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("getAllJokes", term);
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  computed: {
    allJokes() {
      return this.$store.state.allJokes;
    }
  },
  components: {
    SingleJoke
  }
};
</script>

<style scoped>
</style>