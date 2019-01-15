<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from "./components/navigation";
export default {
  name: "App",
  components: { navigation },

  methods: {
    getBasket() {
      this.$http.get("http://localhost:1337/api/v1" + "/basket").then(r => {
        this.$store.commit("create", r.data);
      });
    }
  },

  created() {
    this.getBasket();
  }
};
</script>

<style>
</style>
