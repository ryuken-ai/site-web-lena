<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Léna Deshautel, Ostéopathe à Meylan</h1>
        <p class="subtitle">Cabinet d'ostéopathie pour adultes, sportifs, femmes enceintes et nourrissons. Je vous aide à soulager vos douleurs et retrouver un équilibre corporel durable.</p>
        <router-link to="/contact" class="cta-button">Prendre Rendez-vous</router-link>
      </div>
    </section>

    <section class="presentation">
      <h2>Une approche bienveillante et personnalisée au cœur de Meylan</h2>
      <p>Situé à Meylan, près de Grenoble, mon cabinet est un espace chaleureux dédié à votre bien-être. Mon objectif est de comprendre l'origine de vos douleurs pour vous proposer un traitement efficace et adapté à vos besoins.</p>
    </section>

    <section class="motifs">
      <h2>Pour quels motifs consulter ?</h2>
      <div class="motifs-grid">
        <div class="motif-item">Douleurs de dos, cervicales, lombaires</div>
        <div class="motif-item">Troubles digestifs, stress, migraines</div>
        <div class="motif-item">Suivi du sportif et préparation</div>
        <div class="motif-item">Accompagnement de la femme enceinte</div>
        <div class="motif-item">Bilan et suivi du nourrisson</div>
        <div class="motif-item">Et bien plus...</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #5D8B8B 0%, #4A7C7C 100%);
  color: white;
  text-align: center;
  padding: 80px 20px;
}

.hero-content h1 { 
  font-size: 2.5em; 
  margin-bottom: 20px;
}

.subtitle { 
  font-size: 1.2em; 
  margin: 20px 0; 
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background-color: white;
  color: #5D8B8B;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.presentation, .motifs {
  padding: 60px 20px;
  text-align: center;
  max-width: 800px;
  margin: auto;
}

.motifs-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.motif-item {
  background-color: #F4F1ED;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  flex: 1;
  min-width: 200px;
}
</style>
