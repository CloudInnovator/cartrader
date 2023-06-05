<script setup>

const { makes } = useCars();

const modal = ref({

    make: false,
    location: false,
    price: false,

});

const updateModal = (key) => {
    modal.value[key] = !modal.value[key];

}

const router =  useRouter()
const priceRangeText =  computed(()=> {

const minPrice =  route.query.minPrice;
const maxPrice =  route.query.maxPrice;
if(!minPrice && !maxPrice) return "Any"

else if(!minPrice && maxPrice)

{
    return `< $${maxPrice}`
}

else if(minPrice && !maxPrice)
{
    return `> $${minPrice}`
}

else{

    return `> $${minPrice}-$${maxPrice}`
}

} );

const city = ref("");
const route = useRoute();
const priceRange = ref({
    min: "",
    max: ""

})
const onChangeLocation = () => {

    if (!city.value) return;

    if (!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: "Invalid city format"
        });
    }

    updateModal("location")
    navigateTo(`/city/${city.value}/car/${route.params.make}`)
    city.value = ""


};

const onChangeMake = (make) => {
    updateModal("make")
    navigateTo(`/city/${route.params.city}/car/${make}`)

};


const onChangePrice = () =>
{
    updateModal('price')
    if(priceRange.value.max && priceRange.value.min)
    {

        if(priceRange.value.min> priceRange.value.max) return;

    }

    router.push({
        query:{
            minPrice: priceRange.value.min,
            maxPrice: priceRange.value.max,
        },
    });


};


</script>

<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">

        <!--MAKE START-->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">

            <h3> Make </h3>

            <h3 class="text-blue-400 capitalize" @click="updateModal('make')"> {{ route.params.make || "Any" }}</h3>

            <div class="absolute border shadow left-80 p-20 top-200 -m-1 w-[800px] flex justify-between flex-wrap bg-white"
                v-if="modal.make">

                <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)"> {{ make }} </h4>



            </div>

        </div>
        <!--MAKE END-->

        <!--LOCATION START-->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">

            <h3> Location</h3>

            <h3 @click="updateModal('location')" class="text-blue-400 capitalize"> {{ route.params.city }}</h3>
        </div>

        <!--LOCATION END-->


        <!--PRICE START-->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">

            <h3> Price</h3>

            <h3 class="text-blue-400 capitalize" @click="updateModal('price')"> {{ priceRangeText }}</h3>


            <div class="absolute border shadow left-60 p-5 top-200 -m-1 bg-white" v-if="modal.price">

                <input type= "number" 
                class="border p-1 rounded"

                
                placeholder="Min" v-model="priceRange.min" />  

                <input type= "number" 
                class="border p-1 rounded"

                
                placeholder="Max" v-model="priceRange.max" />  


                <button class="bg-blue-400 w-full mt-2 rounded text-white" @click="onChangePrice"> Apply</button>

            </div>


            

            

        </div>
        <!--PRICE END-->


        <!--APPLY START-->
        <div v-if="modal.location" class="absolute border shadow left-60 p-5 top-200 -m-1 bg-white">

            <input type="text" class="relative border shadow p-1  rounded" v-model="city" />

            <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">

                Apply
            </button>

        </div>
        <!--APPLY END-->
    </div>
</template>