<template>
  <div style="padding: 2rem; background: #f0f0f0; min-height: 200px;">
    <h1 style="color: #333;">Page de Debug</h1>
    <p style="color: #666;">Si vous voyez ce contenu, le routage fonctionne !</p>
    <p>URL actuelle : {{ $route.path }}</p>
  </div>
</template>

<script setup>
console.log('Page debug chargée')
</script>
