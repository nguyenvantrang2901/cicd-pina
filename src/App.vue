<script setup>
import CartOrder from './components/CartOrder.vue';
import Counter from './components/Counter.vue';
import ToolBar from './components/NoteApp/common/ToolBar.vue';
import ListView from './components/NoteApp/list/ListView.vue';

</script>

<template>
  <!-- <Counter/> -->
  <!-- <CartOrder/> -->
   <div class="rs__notes-wrapper">
    <ToolBar/>
    <div class="rs__content-wrapper">
      <ListView/>
    </div>
   </div>
</template>

<style scoped>

</style>
