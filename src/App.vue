<template>
  <h1>Ada beberapa pilihan disini, silahkan dipilih:</h1>
  <ol>
    <li><strong><a @click="$router.push({ path: '/options' })">Options API</a></strong> - Kayak Vue 2 biasanya</li>
    <li><strong><a @click="$router.push({ path: '/composition' })">Composition API</a></strong> - Kayak Vue 2, tapi ada "setup()"</li>
    <li><strong><a @click="$router.push({ path: '/setup' })">Setup API</a></strong> - Cuma sesuatu yang bisa dilakuin dengan Vue 3. Pakai script setup.</li>
  </ol>
</template>

<style>
* {
  font-family: sans-serif;
}
</style>
