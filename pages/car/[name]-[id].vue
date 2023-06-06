<script setup>

const route = useRoute()
const {data: car}  = await useFetchCar(route.params.id);

const { toTitleCase } = useUtilities()
useHead({

    title: toTitleCase(route.params.name),
});


//
definePageMeta({
    layout: "custom",


});


</script>

<template>
    <div>
        <div v-if="car">

            <!-- CAR HERO-->

            <CarDetailHero :car="car" />

            <!-- CAR HERO-->

        </div>

        <!--  CAR ATTRIBUTES-->
        <CarDetailAttributes :features="car.features" />
        <!--  CAR ATTRIBUTES-->
        <!--  CAR DESCRIPTION-->

        <CarDetailDescription :description="car.description" />

        <!--  CAR DESCRIPTION-->
        <!--  CAR CONTACT-->


        <CarDetailContact />
        <!--  CAR CONTACT-->

    </div>
</template>