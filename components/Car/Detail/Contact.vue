<script setup>

const message = ref({
    name: "",
    email: "",
    phone: "",
    message: "",

});

const route = useRoute();
const errorMessage = ref("")
const succesMessage =  ref("")
const disabledButton = computed(() => {

    for (let key in message.value) {
        if (!message.value[key]) return true;
    }
    return false;
});
const onSubmit = async () => {

    try {

        const response = await $fetch(`/api/${route.params.id}/message`, {


            method: "post",
            body: message.value,
        });

        navigateTo("/profile/listings");

        message.value =
        {
            name: "",
            email: "",
            phone: "",
            message: "",

        };

        succesMessage.value = "Message sent!"
        errorMessage.value = ""

    }


    catch (err) {

        errorMessage.value = err.statusMessgage;
        succesMessage.value="";



    }
}
</script>

<template>
    <div class="mt-10">


        <div class="flex w-[600px] justify-between">


            <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
            <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
            <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />


        </div>
        <div class="flex mt-4 w-[600px]">

            <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message">

</textarea>
        </div>

        <button :disabled="disabledButton" class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="onSubmit">
            Submit</button>


        <p v-if="errorMessage" class="mt-3 text-red-400"> {{ errorMessage }} </p>
        <p v-if="succesMessage" class="mt-3 text-green-400"> {{ succesMessage }} </p>




    </div>
</template>