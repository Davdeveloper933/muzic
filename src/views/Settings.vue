<template>
  <div class="settings">
    <h1 class="title_h1">Настройки Аккаунта</h1>
    <div class="settings__form">
      <base-block class="settings__form-wrapper">
        <base-input
            class="settings__form-input"
            id="Email"
            label="Email"
            placeholder="muzic@gmail.com"
            v-model="emailInput"
        />
        <base-input
            class="settings__form-input"
            id="username"
            label="username"
            placeholder="exampleband43"
            v-model="usernameInput"
        />
        <base-input
            class="settings__form-input"
            id="password"
            :type="type"
            label="Пароль"
            placeholder="Введите пароль"
            :icon="icon"
            v-model="passwordInput"
            @button-click="changeVisibility"
        />
        <base-input
            class="settings__form-input"
            id="repeatPassword"
            :type="type"
            label="Подтвердить пароль"
            placeholder="Введите пароль"
            :icon="icon"
            v-model="repeatPasswordInput"
            @button-click="changeVisibility"
        />

      </base-block>
      <base-button
          title="Сохранить"
          :primary="true"
      />
    </div>
  </div>

</template>

<script setup>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import {ref} from "vue";

const emailInput = ref('')
const usernameInput = ref('')
const passwordInput = ref("")
const repeatPasswordInput = ref("")
const icon = ref("eye")
const type = ref("password")

const changeVisibility = () => {
  if (icon.value === "eye") {
    icon.value = "eye-closed";
    type.value = "text";
  } else {
    icon.value = "eye";
    type.value = "password";
  }
}

</script>

<style scoped lang="sass">
.settings
  width: 100%
  max-width: 1200px
  height: 600px
  margin: 0 auto

  +md()
    padding: 40px 24px 60px
    height: unset

  .title_h1
    +md()
      font-weight: 600
      font-size: 25px
      line-height: 30px

  &__form
    width: 100%
    max-width: 690px

  &__form-wrapper
    padding: 30px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 30px
    margin-bottom: 30px

    +md()
      padding: 20px
      gap: 20px

  &__form-input
    width: 47.6%

    +md()
      width: 100%

</style>