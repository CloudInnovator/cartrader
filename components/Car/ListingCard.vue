<script setup>
const props =  defineProps({
    listing: Object,
});

const emits =  defineEmits('deleteClick')

</script>

<template>

    <div class="shadow rounded overflow-hidden flex justify-bewtween mb-4">


        <div class="flex"> 
        <img :src="listing.url" alt="" class="w-80 mr-3 h-44">

    </div>

        <div class="p-3">
            <h1 class="text-2xl"> {{ listing.name }}  </h1>

            <p class="text-blue-400"> {{ listing.price }}  </p>
        </div>

        <div class="p-3 flex flex-row justify-between"> 

        <NuxtLink class="w-60 text-blue-400 flex justify-center" :to= "`/profile/listings/view/${listing.id}`" > View </NuxtLink>

        
        <NuxtLink @click="emits('deleteClick', listing.id)" class="w-60 text-red-400 cursor-pointer flex justify-center"> Delete</NuxtLink>

    </div>
   
    </div>
</template>