<script setup>
const props = defineProps({
    href: {
        type: String,
        required: true
    }
})
</script>


<template>
    <a :href="href">
        <slot/>
    </a>
   
</template>



