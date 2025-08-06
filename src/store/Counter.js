import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Cr7')
    const doubleCount = computed(()=>count.value*2)
    const handleIncre = () => {
        count.value ++
    }

    return {
        count,
        name,
        doubleCount,
        handleIncre
    }
})
