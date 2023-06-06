<script setup>
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make
});

watch(() => route.query, () => refresh())
</script>
<template>
    <div>
        <h1 v-for="car in cars" :key="car.id">
        </h1>
        <CarCards :cars="cars" />

    </div>
</template>