<script setup lang="ts">
import type { Basket } from "@/types";
import { ref } from "vue";
import { FormKit }  from "@formkit/vue";
import { colors } from "@/types";
import BasketProfil from "./BasketProfil.vue";
import BasketDessus from "./BasketDessus.vue";

const props = defineProps<{
  data?: Basket;
  id?: string;
}>();

const chaussure = ref<Basket>({...props.data} ?? {});




</script>
<template>

<div class="p-2">

<ul class="flex gap-1">
    <li><a href="#profil">Profil</a></li>
    <li><a href="#dessus">Dessus</a></li>
</ul>

<div class="carousel w-64">
<BasketProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
<BasketDessus class="carousel-item w-64" v-bind="chaussure" id="dessus"/>
</div>

<FormKit type="form" v-model="chaussure">
<FormKit name="semelle" label="semelle" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="pointe" label="pointe" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="oeillet" label="oeillet" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="bande" label="bande" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="languette" label="languette" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="lacet" label="lacet" value="#FFFFFF" type="radio" :options="colors" />
<FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="radio":options="colors" />
</FormKit> 
</div>
</template>