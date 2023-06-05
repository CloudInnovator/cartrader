<script setup>

const props = defineProps({
    description: String,
});

</script>

<template>
    <div class=" mt-5">
        <div class=" mt-10">


            <p class="=mb-10"> {{ description }}</p>

        </div>


    </div>
</template>