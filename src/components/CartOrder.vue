<script setup>
import { ref } from 'vue'
import Cart from './Cart.vue';
import { useCartStore } from '@/store/cart';

const cart = useCartStore();
const data = {
    id: 1,
    name: 'IPhone 11 Pro Max',
    price: 12000
}
</script>
<template>
    <button class="" @click="cart.addToCart(data)">Add to cart</button>
    <Cart/>
</template>


<style scoped>

</style>
