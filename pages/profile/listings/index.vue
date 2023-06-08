<script setup>
definePageMeta({

    layout: "custom",
/*     middleware: [
    "auth",
    ], */
});


const { listings } = useCars()


</script>

<template>
    <div class="flex justify-between mt-24 items-center">
        <h1 class="text-6xl">My Listings </h1>
        <NuxtLink to="/profile/listings/create" class="w-20 h-20 bg-red-400 flex justify-center items-center 
rounded-full text-white font-bold cursor pointer" > Saliha 

</NuxtLink>



    </div>

    <div class="shadow rounded p-3 mt-5">

        <CarListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />


    </div>
</template>