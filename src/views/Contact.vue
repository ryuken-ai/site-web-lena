<template>
  <div class="contact">
    <div class="page-container">
      <h1>Contact et Prise de Rendez-vous</h1>
      <div class="contact-wrapper">
        <div class="info-col">
          <h2>Cabinet d'Ostéopathie de Meylan</h2>
          <p>
            <strong>Léna Deshautel</strong><br>
            [Votre Adresse Complète]<br>
            38240 Meylan
          </p>
          <p>
            <strong>Téléphone :</strong><br>
            <a href="tel:+33...">[Votre numéro de téléphone]</a>
          </p>
          <p>
            <strong>Horaires :</strong><br>
            Lundi - Vendredi : 9h - 19h
          </p>
          
          <a href="[LIEN_DOCTOLIB_OU_AUTRE]" target="_blank" class="cta-button-contact">Prendre RDV en ligne</a>
        </div>

        <div class="map-col">
          <iframe 
            src="[VOTRE_LIEN_GOOGLE_MAPS_INTEGRATION]" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
}

.contact-wrapper {
  display: flex;
  gap: 40px;
  margin-top: 30px;
}

.info-col { 
  flex: 1; 
}

.map-col { 
  flex: 1.5; 
}

.cta-button-contact {
  display: inline-block;
  margin-top: 20px;
  background-color: #5D8B8B;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.cta-button-contact:hover {
  background-color: #4A7C7C;
}

@media (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
  }
}
</style>
