<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/store/Counter';

const counterStore = useCounterStore()

</script>
<template>
    <div>
        <h1>Sử dụng Pinia trong vue</h1>
        <p>Number : {{ counterStore.count }}</p>
        <p>Double number: {{ counterStore.doubleCount }}</p>
        <button @click="counterStore.handleIncre">Increment </button>
    </div>
</template>


<style scoped>

</style>
