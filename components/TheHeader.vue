<template>
  <header class="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
    <div class="flex items-center justify-center gap-4">
      <div class="text-6xl animate-bounce dragon-roar">🐉</div>
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-yellow-300 animate-pulse dragon-cry">
          DINOMOK !!!
        </h1>
        <p class="text-sm mt-2 opacity-80">Le dragon légendaire</p>
      </div>
      <div class="text-6xl animate-bounce dragon-roar" style="animation-delay: 0.5s;">🐉</div>
    </div>
  </header>
</template>

<style scoped>
@keyframes roar {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
  }
  25% { 
    transform: scale(1.1) rotate(-5deg); 
  }
  75% { 
    transform: scale(1.1) rotate(5deg); 
  }
}

@keyframes dragon-scream {
  0%, 100% { 
    transform: scale(1);
    text-shadow: 0 0 10px #fbbf24;
  }
  50% { 
    transform: scale(1.05);
    text-shadow: 0 0 20px #f59e0b, 0 0 30px #d97706;
  }
}

.dragon-roar {
  animation: roar 3s infinite ease-in-out;
}

.dragon-cry {
  animation: dragon-scream 2s infinite ease-in-out;
}

.dragon-roar:hover {
  animation-duration: 0.5s;
}
</style>
