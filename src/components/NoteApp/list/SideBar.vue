<script setup>
import { ref } from 'vue'
import ListItem from '../partials/ListItem.vue';
import { useNoteStore } from '@/store/noteStore/noteStore';
const store = useNoteStore()


</script>
<template>
    <div class="rs__notes-sidebar">
        <ListItem
            :notes="store.pinnedNote"
            :title="`Pinned Notes`"
            :icon="`push_pin`"
            :type="`list`"
        />
        <ListItem 
            :notes ="store.allNotes"
            :title ="`All Notes`"
            :icon ="`notes`"
            :type ="`list`"
        />
        <h4>Test CI-CD</h4>
    </div>
</template>


<style scoped>

</style>
