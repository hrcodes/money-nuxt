<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center h-10 mb-10 space-x-4">
        <nuxt-link :to="{ name: 'a-empresa', params: {} }">
          A empresa
        </nuxt-link>
        <nuxt-link to="/servicos">
          Serviços
        </nuxt-link>
        <nuxt-link to="/produtos">
          Produtos
        </nuxt-link>
      </div>
    </div>

    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: '',

  data () {
    return {}
  },

  methods: {}
}
</script>

  <style />
</template>
