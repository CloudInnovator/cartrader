<script setup>

const props = defineProps({
    car: Object
});
</script>


<template>
    <div class="mt-10">


        <img :src="car.image" class="w-full " alt="" />

        <h1 class="mt-10 text-4xl"> {{ car.name }}</h1>


        <div class="test-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">



            <div class="flex">


                <p class=" mr-2"> {{ car.seats }} Seats </p>

                <p class=" mr-2"> | </p>


                <p class=" mr-2"> {{ car.miles }} Miles </p>



            </div>


            <div class="font-bold text-2xl"> $ {{ car.price }}</div>
        </div>


    </div>
</template>