<template>
  <div class="flex flex-col items-center gap-4 p-5">
    <div class="flex">
      <div class="flex flex-col gap-3 text-end">
        <span> Username: </span>
        <span> Password: </span>
      </div>
      <div class="flex flex-col ml-3 gap-3">
        <input class="pl-1" type="text" name="username" />
        <input class="pl-1" type="password" name="password" />
      </div>
    </div>
    <div class="w-full flex justify-end">
      <button
        class="bg-violet-700 rounded-md p-2 text-white hover:bg-violet-900 active:bg-violet-500"
        @click="$router.push('servicos')"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  layout: 'auth',
  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
