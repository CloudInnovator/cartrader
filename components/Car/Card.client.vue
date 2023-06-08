<script setup>

import heartFilled from "@/assets/heartFilled.png"
import heartOutline from "@/assets/heartOutline.png"

const props = defineProps({

    car: Object,
    favoured: Boolean
});

/* const favoured = useState(`favoured-${props.car.id}`, ()=>
{

    return false

}) */

const emit = defineEmits(['favor'])

</script>

<template>
    <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">


        <img class="absolute w-7 right-5 top-2 z-20" :src="favoured ? heartFilled : heartOutline"
            @click="emit('favor', car.id)" alt="" />



        <div class="flex h-full " @click="navigateTo(`/car/${car.name}-${car.id}`)">


            <img :src="car.image" alt="" class="w-[300px] h-full" />


            <div class="p-4 flex flex-col">

                <div>

                    <h1 class="text-2xl text-blue-700">

                        {{ car.name }}

                    </h1>


                    <P class="text-gray-700"> {{ car.description }}</P>

                </div>

                <h1 class="mt-auto text-"> ${{ car.price }}</h1>


            </div>

        </div>

    </div>
</template>
