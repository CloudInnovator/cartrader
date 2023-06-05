<script setup>
const props =  defineProps({
    listing: Object,
});

</script>

<template>

    <div class="shadow rounded overflow-hidden flex justify-bewtween mb-4">


        <div class="flex"> </div>
        <img :src="listing.url" alt="" class="w-80 mr-3 h-44">

        <div class="p-3">
            <h1 class="text-2xl"> {{ listing.name }}  </h1>

            <p class="text-blue-400"> {{ listing.price }}  </p>
        </div>

        <div class="p-3 flex"> </div>

        <NuxtLink class="text-blue-400" :to= "`/profile/listings/view/${listing.id}`" > View </NuxtLink>

        <p>  </p>
        <p class="text-red-400 cursor-pointer"> Delete</p>
   
    </div>
</template>