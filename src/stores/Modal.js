import {ref} from 'vue'
import {defineStore} from 'pinia'
import {Axios} from "@/main";
import router from "@/router";

export const useModalStore = defineStore('modal', () => {
    const isModalActive = ref(false)
    const currentModal = ref(null)
    const modalTitle = ref('')

    const toggleModal = () => {
        isModalActive.value = !isModalActive.value
        document.body.classList.toggle('no-scroll')
    }

    const setCurrentModal = (modal, name) => {
        currentModal.value = modal
        modalTitle.value = name
    }

    return {
        isModalActive,
        toggleModal,
        currentModal,
        setCurrentModal,
        modalTitle
    }
})
