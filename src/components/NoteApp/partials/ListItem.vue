<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/store/noteStore/noteStore'

const store = useNoteStore()

const props  = defineProps(['notes', 'title', 'icon', 'type'])
console.log("Data: ", store.notes.length)

</script>
<template>
    <h4 class="rs__sidebar-title" v-if="'list'===type">
        <span class="rs__sidebar-note-title-icon material-symbols-outlined">{{ icon }}</span>
        {{ title }}
    </h4>
    <ul class="rs__note-list">
        <li class="" v-for="note in notes" :key="note.id">
            <p>{{ note.title }}</p>
            <span v-if="note.pinned" class="rs__note-list-icon material-symbols-outlined" @click="store.handleRemovePinned(note.id)">do_not_disturb_on</span>
            <span v-else class="rs__note-list-icon material-symbols-outlined" @click="store.handleAddPinned(note.id)">push_pin</span>
        </li>
    </ul>
</template>


<style scoped>

</style>
