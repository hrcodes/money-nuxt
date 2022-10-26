<template>
  <div>
    <h1 class="text-lg font-bold">Servicos</h1>
    <nuxt-link to="/servicos/desenvolvimento-de-sites">
      Desenvolvimento de Sites
    </nuxt-link>
    <nuxt-link to="/servicos/marketing-digital"> Marketing Digital </nuxt-link>
    <br />
    <br />

    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Servicos',

  data() {
    return {};
  },
};
</script>

<style></style>
