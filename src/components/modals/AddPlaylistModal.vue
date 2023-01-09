<template>
<div class="add-playlist-modal">
  <h1 class="add-playlist-modal__title">{{ modalTitle }}</h1>
  <base-link-input
      :link="link"
  />
  <base-button
      title="Сохранить"
      :primary="true"
      class="add-playlist-modal__button"
      @click="savePlaylist"
  />
</div>
</template>

<script setup>
import {useModalStore} from "@/stores/Modal";
import {useUserStore} from "@/stores/User";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import BaseLinkInput from "@/components/base/BaseLinkInput"
import BaseButton from "@/components/base1/BaseButton.vue";

const modal = useModalStore()
const user = useUserStore()

const {modalTitle} = storeToRefs(modal)
const {toggleModal} = modal
const {createNewUserPlaylist} = user

const link = ref({
  link: '',
  title: 'ВК или Яндекс-музыку'
})

const savePlaylist = () => {
  createNewUserPlaylist(link.value.link);
  toggleModal()
}

</script>

<style scoped lang="sass">
.add-playlist-modal
  width: 400px
  display: flex
  flex-direction: column

  &__title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: -0.04em
    margin: 0 0 24px

</style>