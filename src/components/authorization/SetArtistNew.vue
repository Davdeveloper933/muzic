<template>
  <div class="v-login-artist-new container-narrow">
    <base-block class="v-login-artist-new__block">
      <h1 class="v-login-artist-new__title typography-title">
        Новый исполнитель
      </h1>
      <form class="v-login-artist-new__form">
        <base-input
          id="name"
          label="Имя (логин)"
          placeholder="Введите имя или название"
          v-model="nameInput"
        />
        <base-file id="image" label="Фотография профиля" />
        <base-input
          id="description"
          label="Описание"
          placeholder="Расскажите о себе и что вы ищите"
          :textarea="true"
          v-model="descriptionInput"
        />
        <base-button
            title="Зарегистрироваться"
            :primary="true"
            @click="setArtist"
        />
      </form>
<!--      <base-social text="Или зарегистрироваться с помощью" />-->
    </base-block>
  </div>
</template>

<script setup>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseFile from "@/components/base1/BaseFile.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseSocial from "@/components/base1/BaseSocial.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {ref} from "vue";

const auth = useAuthStore()
const {setNewArtist} = auth

const nameInput = ref()
const descriptionInput = ref()

const setArtist = () => {
  const newArtistFormData = {
    login: nameInput.value,
    photo: "image",
    description: descriptionInput.value,
  }

  setNewArtist(newArtistFormData)
}
</script>

<style lang="sass" scoped>
.v-login-artist-new
  margin-top: 95px
  margin-bottom: 123px
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__title
    text-align: center
    margin-bottom: 40px


  &__form
    display: flex
    flex-direction: column
    gap: 30px
    margin-bottom: 30px


  &__account
    font-weight: 600
    text-align: center
    margin-top: 13px


  &__link
    color: $accent
    text-decoration: none
    font-weight: 600
    transition: 0.3s ease
    &:hover
      opacity: 0.9
</style>
