<template>
<div class="networks-modal">
  <h1 class="networks-modal__title">{{ modalTitle }}</h1>
  <ul class="networks-modal__networks-list">
    <li
        v-for="link in networkLinks"
        :key="link.id"
    >
      <base-link-input
          :link="link"
      />
    </li>
  </ul>
  <base-button
      title="Сохранить"
      :primary="true"
      class="music-styles-modal__save-button"
      @click="saveLinks"
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
const {updateUserNetworks} = user

const placeholder = ref(true)
const networkLinks = ref([
  {
    id: 1,
    link: 'https://music.yandex.ru/home',
    title: 'Яндекс-музыку'
  },
  {
    id: 2,
    link: 'https://vk.com/vkmusic',
    title: 'ВК'
  },
  {
    id: 3,
    link: 'https://music.youtube.com/tasteprofile/tasteprofile/tasteprofile',
    title: 'Youtube'
  },
  {
    id: 4,
    link: '',
    title: 'Ваш сайт'
  },
])

const saveLinks = () => {
  const list = {
    social_vk: networkLinks.value[0].link,
    social_yandex: networkLinks.value[1].link,
    social_soundcloud: networkLinks.value[2].link,
    social_website: networkLinks.value[3].link
  }
  console.log(list);
  updateUserNetworks(list)
  toggleModal()
}

</script>

<style scoped lang="sass">
.networks-modal
  min-height: 440px
  width: 364px
  display: flex
  flex-direction: column

  &__title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: -0.04em
    margin: 0 0 24px

  &__input-block
    position: relative
    width: 100%
    max-width: 683px

  &__input-placeholder
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 20px
    font-size: 16px
    line-height: 19px
    color: #777B9E

    +md()
      font-size: 14px

    a
      color: #FF6C6C

  &__input-text
    height: 60px
    padding: 0 20px
    font-weight: 400
    font-size: 16px
    line-height: 19px
    border: 1px solid #E7EBFF
    border-radius: 10px
    width: 100%
    max-width: 683px

    +md()
      height: 45px
      font-size: 14px

    &::placeholder
      color: #777B9E



</style>