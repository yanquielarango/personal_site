<script setup>
import { socials, skills } from "@/constants" 
    
 </script>

<template>
    <section class="border-x-2 border-black py-10"  id="about">
        <div class="container mx-auto px-4 grid  gap-10 md:gap-20 md:grid-cols-2 max-w-7xl">
            <div>
                <img  src="@/assets/about.svg" alt="about me" class="w-[650]"/>
            </div>

            <div class="relative">
                <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 relative z-10">About me</h1>
                <div class=" bg-yellow-400  w-[7.5rem] lg:w-[9rem]  xl:w-[11.8rem] h-4 absolute top-4 lg:top-5 xl:top-7 "/>
                <p class="  text-lg">Hi!, I &apos;m Yanquiel, a web developer from Cuba but based in Poland. 
                    As a web developer I have  experience in creating dynamic and responsive
                    web applications using React, Redux, and JavaScript. I have a passion for
                    creating intuitive user interfaces and enjoy working on projects that
                    challenge me to think outside the box.
                </p>
                <div class="text-lg  mt-2 font-bold underline  decoration-wavy decoration-[#9667DD]">Find me on:</div>
                    <div class="flex gap-4">
                        <ul v-for="social in socials" :key="social.name">
                            <li class="mt-1">
                                <a target="_blank" :href="social.url" class="py-2 flex flex-col md:flex-row gap-2 items-center justify-center">
                                <img :src="social.img"  class="w-7 h-7"/>  
                                {{ social.name }}
                                </a>
                            </li>

                        </ul>
                    </div>
                
                <div class="text-lg  mt-4 font-bold underline  decoration-wavy decoration-[#9667DD]">Skills:</div>
                    <div class="flex gap-4">
                        <ul v-for="skill in skills" :key="skill.name">
                            <li class="mt-4">
                                <img :src="skill.icon"  class="w-7 h-7"/>  
                             
                           
                            </li>

                        </ul>
                    </div>
                
            </div>

        </div>
    </section>
</template>

