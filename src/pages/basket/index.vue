<script setup lang="ts">
import BasketProfil from "@/components/BasketProfil.vue";
import { supabase } from "@/supabase";
import type { Basket } from "@/types";

console.log("supabase: ", supabase);

const exemples: Basket[] = [
    {
        semelle: "#FF0000",
        empeigne: "#FFFFFF",
        pointe: "#FFFFFF",
        oeillet: "#FFFFFF",
        bande: "#00FF00",
        languette: "#FFFFFF",
        lacet: "#00FF00",
        trimestre: "#FFFFFF",
    },
    
    {
        semelle: "#FFFFFF",
        empeigne: "#00FF00",
        pointe: "#FFFFFF",
        oeillet: "#FFFFFF",
        bande: "#00FF00",
        languette: "#FFFFFF",
        lacet: "#000000",
        trimestre: "#FFFFFF",
    },
];
</script>
<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
        v-for="(exemple, index) in exemples" :key="index"
          :to="{
            name: '/basket/exemple/[data]',
            params: { data: JSON.stringify(exemple) },
          }"
        >
        <BasketProfil class="w-64" v-bind="exemple" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>