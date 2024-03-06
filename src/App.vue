<script setup lang="ts">
import router from "./router";

import BasketProfil from "./components/BasketProfil.vue";

</script>

<template>
  
  <nav>

<ul class="flex gap-1 bg-grey-200">
<RouterLink to="/form">Formulaire</RouterLink>    
<RouterLink to="/">Accueil</RouterLink>
<RouterLink to="/pageimages">Images</RouterLink>

</ul>

</nav>

  <Suspense>
    <RouterView />
    </Suspense>

</template>
