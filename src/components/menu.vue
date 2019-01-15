<template>
  <div class="container mt-2">
    <div class="btns my-3">
      <a href="#" class="btn btn-primary" @click.prevent="tri = false">Tout</a>
      <a href="#" class="btn btn-primary" @click.prevent="tri = true">Prix</a>
    </div>
    <div class="row">
      <div class="col-4" v-for="item in prix" :key="item.id" v-if="item.stock > 0">
        <!-- :class="{display: item.stock <=0}" -->
        <div class="card" :class="{yellow: item.stock == 1}">
          <img class="card-img-top" :src="item.image" height="100%" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.label| majuscule}}</h5>
            <div class="text-primary">
              <span v-for="item in item.stars" :key="item">★</span>
            </div>
            <p class="card-text">{{item.description}}</p>
            <div class="d-flex justify-content-between">
              <span class="text-primary">
                <strong>{{item.price| signe}}</strong>
              </span>
              <a href="#" class="btn btn-primary" @click.prevent="addBeerToBasket(item)">Ajouter</a>
              <span>{{item.stock}} en stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      tri: false
    };
  },
  methods: {
    recup() {
      this.$http.get("http://localhost:1337/api/v1/beers").then(response => {
        this.products = response.data;
        // console.log(this.products);
      });
    },
    addBeerToBasket(beer) {
      this.$http.post("http://localhost:1337/api/v1/basket", beer).then(response => {
        this.$store.commit("addToBasket", beer)
        // un commit apelle une mutation
      });
      this.recup();
    }
  },

  created() {
    this.recup();
  },
  //des que tu crées tu vas faire ça == hook (created ou mounted), dès que tu crées tu lances la fonction

  computed: {
    prix() {
      if (this.tri) {
        return this.products.concat().sort((a, b) => {
          return parseFloat(a.price) - parseFloat(b.price);
        });
      } else {
        return this.products;
      }
    }
  }
};
</script>

<style>
.yellow {
  background-color: yellow;
}

/* .display {
  display: none
} */
</style>
