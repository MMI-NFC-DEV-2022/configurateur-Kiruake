<script setup lang="ts">
import router from "./router";

import SvgProfil from "./components/SvgProfil.vue";

</script>

<template>
  
  <nav>

<ul class="flex gap-1 bg-grey-200">
<RouterLink to="/form">Formulaire</RouterLink>    
<RouterLink to="/">Accueil</RouterLink>
</ul>

</nav>

  <Suspense>
    <RouterView />
    </Suspense>

</template>
