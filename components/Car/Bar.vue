<script setup>

const user = useSupabaseUser();

const supabase =  useSupabaseClient()

const logout = () => {

const {error} =  supabase.auth.signOut();

if(error)
{
    console.log(error)
}

}

</script>
<template>
  <div>
      <header class="sticky 
      top-0 
      z-50 
      flex 
      justify-between 
      items-center 
      space-x-2 
      border-bottom 
      bg-white 
      p-4 
      shadow-md">

            <NuxtLink class="text-3xl font-mono" to="/"> cartrader</NuxtLink>

            <div v-if="user" class="flex">
                <NuxtLink to="/profile/listings" class="mr-5"> Profile</NuxtLink>

                <p @click="logout" class="cursor-pointer">Logout</p>
            </div>

        
                <NuxtLink  v-else to="/login"> Login </NuxtLink>

    


</header>
</div>
</template>

