<script setup>

const  {data}  = await useFetch('/api/notion')

console.log(data.value)





</script>





<template>
    <div class="flex">
        <div v-for="({name, img, opinion, url}) in data" class="body">
        <h1>{{ name }}</h1>
        <p>{{ opinion }}</p>
        <img  :src="img"/>
        

            <a :href=url  target="_blank"> {{url}}</a>
    
        
    </div>
    </div>

   
</template>



<style  scoped>
a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}
    .flex {
        display: flex;
        gap: 2rem
    }
    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        width: 230px;
        height: 100%;
        border: 5px dotted teal;
        
    }

    img {
        width: 100px;
    }

</style>