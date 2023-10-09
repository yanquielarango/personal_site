<script setup>

import { navlinks } from "@/constants" 
</script>


<template>
   <header class="grid  grid-cols-2 md:grid-cols-[180px_1fr_180px] border-black border-2  bg-white">
        <a href="#"  class="flex justify-center items-center border-black border-r-2">
            <img src="@/assets/logo.png"  alt="logo" class="w-16 h-16"/>
            <p class="text-lg font-medium">yanquiel</p>
        </a>

        <a href="#contact" class="md:col-start-3 border-black md:border-l-2 flex justify-center items-center gap-2 text-lg bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            
            Let &apos;s Talk
        </a>

        <nav class="col-span-2 bg-white md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0  flex items-center justify-center "> 
            <ul class="flex  max-w-sm overflow-auto snap-always p-4 text-lg " v-for="item in navlinks" :key="item.title">
             <li class="hover:text-yellow-700  ease-in-out duration-100 ">
                <a :href="item.url" class="md:text-xl">
                    {{ item.title }}
                </a>
             </li>
                
            </ul> 
        </nav>
   </header>
</template>

