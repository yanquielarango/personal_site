<script setup>


const  {data}  = await useFetch('/api/notion')

console.log(data.value)

</script>



<template>
    <section v-for="({name, image, opinion, site_link, github_repository}) in data"  class=" border-2  border-black p-2  rounded-md  ">
           
            
                <div class=" flex flex-col divide-y-2 gap-3 divide-solid ">
                    <img :src=image  alt=""  class="w-full md:w-64 h-64 object-cover  rounded-md overflow-hidden "/>
                   <div class="flex  justify-between ">
                    <p class="mt-2">{{ name }}</p>
                    <div class="flex gap-2 mt-2">
                       <a :href=github_repository> <img src="@/assets/github.svg" class="w-6 h-6 "/></a>
                        <a :href="site_link"><img  src="@/assets/link.svg" class="w-6 h-6"/></a>

                    </div>
                   </div>
                </div>
            
                <!-- <div class="flex gap-2">
                    <a target="_blank" href='#' rel="noopener noreferrer"    >
                      
                    </a>
                    <a target="_blank" href='#' rel="noopener noreferrer"     >
                      
                    </a>
                </div> -->
            
            


    </section>
</template>


