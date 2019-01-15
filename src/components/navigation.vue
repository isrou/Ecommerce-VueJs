<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">BeerProject</router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/basket" class="nav-link">
            <span>{{ total }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      panier: this.$store.state.basket
    };
  },

  methods: {},

  computed: {
    total() {
      if (this.$store.state.basket == 0) {
        return "Accéder à votre panier (vide)";
      } else {
        let total = 0
        for (let i = 0; i < this.$store.state.basket.length; i++) {
          total += this.$store.state.basket[i].price;
        }
        let nbarticle = this.$store.state.basket.length;
        return (
          "Accéder à votre panier (" +
          nbarticle +
          " article(s) - " +
          total.toFixed(2) +
          "€)"
        );
      }
    }
    // getTotal() {
    //   var total = 0
    //   for (var i = 0; i < this.panier.length; i++) {
    //     total = total + this.panier[i].price;
    //   }
    //   return total.toFixed(2)
    // }
  }
};
</script>

<style lang="sass">
    
</style>