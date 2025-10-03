<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">
          <h1>Léna Deshautel</h1>
          <p>Ostéopathe D.O.</p>
        </NuxtLink>
      </div>
      
      <div class="nav-menu">
        <NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
          Accueil
        </NuxtLink>
        <NuxtLink to="/mon-approche" class="nav-link" :class="{ active: route.path === '/mon-approche' }">
          Mon Approche
        </NuxtLink>
        <NuxtLink to="/contact" class="nav-link" :class="{ active: route.path === '/contact' }">
          Contact
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute()
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #5D8B8B 0%, #4A7C7C 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
}

.nav-brand {
  flex: 1;
}

.brand-link {
  text-decoration: none;
  color: white;
  display: block;
}

.brand-link h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.brand-link p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: white;
  border-radius: 1px;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem 20px;
    gap: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .brand-link h1 {
    font-size: 1.5rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
