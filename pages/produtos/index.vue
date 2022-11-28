<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <nuxt-link to="/produtos/produto-a"> Produto A </nuxt-link>
    <nuxt-link to="/produtos/produto-b"> Produto B </nuxt-link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incid
    </p>
    <br />
    <br />

    <div
      v-for="product in products"
      :key="product.id"
      class="border-b border-gray-400 py-3"
    >
      {{ product.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Produtos',

  async asyncData({ $axios }) {
    const products = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );
    return {
      products,
    };
  },
};
</script>

<style></style>
