import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    const totalItems = computed(()=>{
        return items.value.reduce((sum, item)=> sum + item.quantity, 0)
    })
    const totalPrice = computed(()=> {
        return items.value.reduce((sum, item) => sum + item.quantity * item.price, 0)
    })
    const addToCart = (product) => {
        const existing = items.value.find(item => item.id === product.id)
        if(existing) {
            existing.quantity ++
        }else {
            items.value.push({...product, quantity : 1})
        }

    }
    const removeFromCart = (productId) => {
        items.value = items.value.filter(item => item.id !== productId)
    }
    const clearCart = () => {
        items.value = []
    }

    return {
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart
    }
})
