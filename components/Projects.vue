

<template>
    <section class="py-12 border-x-2 border-black bg-white" id="projects">
        <div class="container mx-auto px-4  max-w-full relative z-0 overflow-hidden">
            <img  src="@/assets/checks.png"  alt="projects" class="w-[700px] h-[100px] absolute -z-10 -top-24 -left-24 rotate-45 max-h-[70vh]"/>
            <img  src="@/assets/checks.png"  alt="projects" class="w-[700px] h-[100px] absolute -z-10 -bottom-40 -right-24 rotate-[130deg] max-h-[70vh]"/>
            
            <div class="flex flex-col justify-center items-center relative">
                <h2 class=" text-5xl mb-6 font-bold  z-10"> Projects </h2>
                <div class="bg-[#9667DD] w-[150px] h-4 absolute top-7 "/>
                <p> I &apos;ve been developing websites for a while, but I also equally enyoy creating other digital products</p>
            </div>

            <article class="flex flex-col  flex-wrap md:flex-row gap-4 md:gap-12 mt-10 justify-center item-center ">             
                <Project/>       
            </article>

        </div>
    </section>
</template>


<style lang="scss" scoped>

</style>