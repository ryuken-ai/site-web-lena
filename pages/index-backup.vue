<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1>Léna Deshautel, Ostéopathe à Meylan</h1>
        <p class="subtitle">Cabinet d'ostéopathie pour adultes, sportifs, femmes enceintes et nourrissons. Je vous aide à soulager vos douleurs et retrouver un équilibre corporel durable.</p>
        <a href="/contact" class="cta-button">Prendre Rendez-vous</a>
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

<script setup>
// --- SEO ---
useHead({
  title: 'Léna Deshautel - Ostéopathe à Meylan (Grenoble) | Cabinet d\'Ostéopathie',
  meta: [
    { name: 'description', content: 'Cabinet d\'ostéopathie à Meylan. Léna Deshautel, ostéopathe D.O., prend en charge les douleurs de dos, migraines, troubles digestifs pour adultes, sportifs et nourrissons. Prenez RDV.' }
  ]
})
</script>

<style scoped>
/* Styles pour un rendu chaleureux */
.hero {
  background: url('/assets/images/cabinet-accueillant.jpg') center/cover; /* Image de votre cabinet */
  color: white;
  text-align: center;
  padding: 80px 20px;
}
.hero-content h1 { font-size: 2.5em; }
.subtitle { font-size: 1.2em; margin: 20px 0; }
.cta-button {
  background-color: #5D8B8B; /* Un vert sauge ou bleu poudré */
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
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
  background-color: #F4F1ED; /* Un fond beige clair */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
