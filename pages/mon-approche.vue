<template>
  <div class="page-container">
    <h1>Léna Deshautel, une ostéopathe à votre écoute</h1>
    <div class="content-wrapper">
      <div class="text-content">
        <p>Passionnée par le corps humain et ses capacités d'auto-guérison, j'ai suivi une formation complète en 5 ans pour obtenir mon diplôme d'Ostéopathe (D.O.). Mon approche est globale : je ne me contente pas de traiter un symptôme, mais je cherche à comprendre la cause profonde de votre déséquilibre.</p>
        <p>Ma pratique est douce et s'adapte à chaque patient, du nourrisson au senior, en passant par le sportif de haut niveau. Je me forme continuellement pour vous offrir les soins les plus justes et les plus actuels, notamment en périnatalité et dans l'accompagnement des troubles chroniques.</p>
        <p>Pour moi, la confiance et l'écoute sont au cœur de la thérapie. Mon cabinet à Meylan est un lieu où vous pourrez vous exprimer librement sur vos douleurs et vos attentes.</p>
      </div>
      <div class="image-content">
        <img src="/assets/images/portrait-lena-deshautel.jpg" alt="Portrait de Léna Deshautel, ostéopathe à Meylan">
      </div>
    </div>
  </div>
</template>

<script setup>
// --- SEO ---
useHead({
  title: 'Votre Ostéopathe à Meylan - Léna Deshautel',
  meta: [
    { name: 'description', content: 'Découvrez le parcours et l\'approche de Léna Deshautel, votre ostéopathe à Meylan. Une pratique douce et personnalisée pour tous.' }
  ]
})
</script>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}
.content-wrapper {
  display: flex;
  gap: 40px;
  margin-top: 30px;
  align-items: center;
}
.text-content { flex: 2; }
.image-content { flex: 1; }
.image-content img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>