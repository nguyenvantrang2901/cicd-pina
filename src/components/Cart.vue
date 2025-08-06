<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore()

</script>
<template>
    <div>
        <h2>🛒 Giỏ hàng</h2>
        <div v-if="cartStore.items.length === 0">Chưa có sản phẩm nào</div>
        <ul v-else>
            <li v-for="item in cartStore.items" :key="item.id">
                {{ item.name }} - SL: {{ item.quantity }} - Giá: {{ item.price }}đ
                <button @click="cartStore.removeFromCart(item.id)">Xóa</button>
            </li>
        </ul>
        <div v-if="cartStore.items.length">
            <p><strong>Tổng SL:</strong> {{ cartStore.totalItems }}</p>
            <p><strong>Tổng tiền:</strong> {{ cartStore.totalPrice }} đ</p>
            <button @click="cartStore.clearCart">Xóa hết đơn hàng</button>
        </div>
    </div>
</template>


<style scoped>

</style>
