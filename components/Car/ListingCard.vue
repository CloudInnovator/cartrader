<script setup>
const props =  defineProps({
    listing: Object,
});

const emits =  defineEmits('[deleteClick]')

</script>

<template>

    <div class="shadow rounded overflow-hidden flex justify-bewtween mb-4">


        <div class="flex"> 
        <img :src="listing.image" alt="" class="w-80 mr-3 h-44">

    

     x
            <h1 class="text-2xl"> {{ listing.name }}  </h1>

            <p class="text-blue-400"> {{ listing.price }}  </p>
        


        <NuxtLink class="text-blue-400 f" :to= "`/profile/listings/view/${listing.id}`" > View </NuxtLink>

        
        <NuxtLink @click="emits('deleteClick', listing.id)" class="text-red-400 cursor-pointer "> Delete</NuxtLink>

    </div>
   
    </div>
</template>