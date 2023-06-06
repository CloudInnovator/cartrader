<script setup>


const route = useRoute()


const { car } =  await useFetchCar(route.params.id);


console.log(car +"car")
const { toTitleCase } = useUtilities()

useHead({

    title: toTitleCase(route.params.id),
});





/* 
if (!car.value) {

    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exits`
    });
}
 */

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