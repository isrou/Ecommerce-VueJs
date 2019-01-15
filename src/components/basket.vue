<template>
<div class="container">
    <h3 class="mt-2">Contenu du panier</h3>
    <ul class="list-group mt-5">
      <li v-for="item in $store.state.basket" :key="item" class="list-group-item d-flex justify-content-between align-items-center">
        {{item.label}}
        <span class="badge badge-primary badge-pill">{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    
</style>