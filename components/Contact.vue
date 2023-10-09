<template>
    <section class="py-12 border-x-2 border-black " id="contact">
        <section class="container mx-auto px-4  max-w-7xl grid gap-10 lg:grid-cols-2">
            <article>
                <h1 class="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4"> Contact me </h1>
                    <p  class="mb-6 "> Ever want  to contact me? If you &apos;re looking for help with your 
                        creative business, have a burning question to ask me, or simply 
                        want to interact, the quickest way to get attention is to hit me up on email
                    </p> 
                    <div>
                        <img  src="@/assets/email.svg" alt="form" class="w-[400px] h-[300px]"/>
                    </div>
            </article>

            <form>
                <div class="w-full mb-4 ">
                   <label class="form-label inline-block mb-2 text-gray-700" for="name">Your name :</label> 
                   <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Jhon Doe"
                        required
                        autocomplete="given-name"
                        class="block w-full px-3 py-2 border-black border-2 rounded shadow-[2px_3px_0_rgba(0,0,0,1)] focus:shadow-[0px_0px_0_rgba(0,0,0,1)] "
                    />
                </div>

                <div>
                    <label  class="form-label inline-block mb-2 text-gray-700" for="email">Your Email :</label>
                        <input 
                            name="email" 
                            id="email" 
                            type="email"
                            placeholder="johndoe@example.io" 
                            required  
                            autocomplete="off"  
                            class="block w-full px-3 py-2 border-black border-2 rounded shadow-[2px_3px_0_rgba(0,0,0,1)]  focus:shadow-[0px_0px_0_rgba(0,0,0,1)] "
                    />
                </div>

                <div >
                    <label  class="form-label inline-block mb-2 mt-4  text-gray-700" for="message">Description :</label>
                        <textarea 
                            name="message" 
                            id="message"  
                            rows="7" 
                            placeholder="Hi there!"  
                            required   
                            class="  block w-full px-3 py-2 border-black border-2 rounded shadow-[2px_3px_0_rgba(0,0,0,1)]  focus:shadow-[0px_0px_0_rgba(0,0,0,1)] "
                     />
                </div>

                <div class="mt-4 rounded-xl rounded-br-none ">
                    <button type="submit" class=" text-white border-black border-2 border-solid py-2 px-4 bg-[#9667DD] drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] transition ease-in-out  ">Send message!</button>
                </div>

            </form>

        </section>

    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>