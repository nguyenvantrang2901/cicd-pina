import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useNoteStore = defineStore('noteStore', () => {
    const notes = ref([
        { id: 1, title: 'No Content 1', content: 'Note one content', timestamps : Date.now(), pinned: true},
        { id: 2, title: 'No Content 2', content: 'Note two content', timestamps : Date.now(), pinned: false},
        { id: 3, title: 'No Content 3', content: 'Note three content', timestamps : Date.now(), pinned: false},
        { id: 4, title: 'No Content 4', content: 'Note four content', timestamps : Date.now(), pinned: true},
        { id: 5, title: 'No Content 5', content: 'Note five content', timestamps : Date.now(), pinned: false}
    ]);
    //Lấy ra Id gần nhất mà người dùng sử dụng
    const lastNoteId = ref('')
    const addNote = (note) => {
        let noteNewArr = [note, ...notes.value]
        return notes.value = noteNewArr
    }

    const allNotes = computed(() => {
        return notes.value;
    })
    const pinnedNote = computed(() => {
        return notes.value.filter(note => note.pinned);
    })
    const handleAddPinned = (id) => {
        const updateNotes = notes.value.map((item)=> {
            if(id === item.id ){
                item.pinned = true
                return item;
            }
            return item;
        })
        return notes.value = updateNotes;
    }
    const handleRemovePinned = (id) => {
        const removePinnedNotes = notes.value.map((item)=> {
            if(id === item.id ){
                item.pinned = false
                return item;
            }
            return item;
        })
        return notes.value = removePinnedNotes;
    }
    return {
        notes,
        allNotes,
        pinnedNote,
        lastNoteId,
        handleAddPinned,
        handleRemovePinned,
        addNote
    }
})
