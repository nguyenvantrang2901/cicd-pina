<script setup>
import { ref } from 'vue'
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/store/noteStore/noteStore';
import { v4 as uuidv4} from 'uuid';

const title = ref('')
const content = ref('')
const store = useNoteStore()

const handleSubmitForm = () => {
    let insertId = store.lastNoteId
    if(title.value.length > 0 && insertId === '') {
        insertId = uuidv4();
        store.addNote({
            id: insertId,
            title: title.value,
            content: content.value,
            pinned: false,
            timestamp: Date.now()
        })
        //Reset Form
        title.value = ''
        content.value= ''
    }
}
</script>
<template>
    <div class="rs__notes-content">
        <form action="" @submit.prevent="handleSubmitForm()">
            <input 
                type="text" 
                placeholder="Enter your title note ..." 
                v-model="title" 
                class="rs__input-title"
            />
            <contenteditable
                tag="div"
                class="rs__content-editable"
                :contenteditable="true"
                :no-nl="false"
                :no-html="true"
                v-model="content"
                aria-placeholder="Description"
            />
            <button
                class="rs__form-save-btn"
                type="submit"
            >
                <span class="material-symbols-outlined">save</span>
            </button>
        </form>
     </div>
</template>


<style scoped>

</style>
