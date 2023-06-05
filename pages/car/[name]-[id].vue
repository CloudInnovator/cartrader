<script setup>

const route = useRoute()
const { toTitleCase } = useUtilities()
const { cars } = useCars();
useHead({

    title: toTitleCase(route.params.name),
});


//
definePageMeta({
    layout: "custom",
});

const car = computed(() => {
    return cars.find((c) => {
        return c.id == parseInt(route.params.id);
    });
});



if (!car.value) {

    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exits`
    });
}




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