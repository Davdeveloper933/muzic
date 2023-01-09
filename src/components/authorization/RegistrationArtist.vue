<template>
  <div
      v-if="isRegisteredArtist"
      class="v-registration-artist__confirm"
  >
    <h2 class="v-registration-artist__confirm-mail title_h2">{{ loginInput }}</h2>
    <h2 class="v-registration-artist__confirm-description title_h2">На указанную вами почту, отправлено письмо. Перейдите по ссылке в письме для подтверждения почты</h2>
  </div>
  <div v-else class="v-registration-artist container-narrow">
    <base-block class="v-registration-artist__block">
      <h1 class="v-registration-artist__title typography-title">Регистрация</h1>
      <form class="v-registration-artist__form">
        <base-input
          id="login"
          label="Email или Логин"
          placeholder="email@gmail.com"
          v-model="loginInput"
        />
        <base-input
          id="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          icon="eye"
          v-model="passwordInput"
        />
        <base-button
            title="Зарегистрироваться"
            :primary="true"
            @click="registrationArtist"
        />
      </form>
<!--      <base-social text="Или зарегистрироваться с помощью" />-->
    </base-block>
    <p class="v-registration-artist__account">
      Уже зарегистрированы?
      <button
          class="v-registration-artist__link"
          @click="setCurrentForm('Login')"
      >Войти</button
      >
    </p>
  </div>
</template>

<script>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseSocial from "@/components/base1/BaseSocial.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";
import {ref} from "vue";

export default {
  name: "VLoginCurator",
  components: {
    BaseBlock,
    BaseInput,
    BaseButton,
    BaseSocial,
  },
  setup() {
    const auth = useAuthStore()
    const loginInput = ref("")
    const passwordInput = ref("")

    const {setCurrentForm, setRegistrationArtistRequest} = auth
    const {isRegisteredArtist} = storeToRefs(auth)

    const registrationArtist = () => {
      const registrationArtistFormData = {
        email: loginInput.value,
        password: passwordInput.value,
      }

      setRegistrationArtistRequest(registrationArtistFormData)
    }

    return {
      loginInput,
      passwordInput,
      setCurrentForm,
      registrationArtist,
      isRegisteredArtist
    }
  }
};
</script>

<style lang="sass" scoped>
.v-registration-artist
  margin-top: 95px
  margin-bottom: 123px
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__block
    +xs()
      padding: 20px

  &__title
    text-align: center
    margin-bottom: 40px

  &__form
    display: flex
    flex-direction: column
    gap: 30px
    margin-bottom: 30px

    +xs()
      margin-bottom: 0


  &__account
    font-weight: 600
    text-align: center
    margin-top: 13px
    font-size: 16px
    line-height: 19px
    letter-spacing: -0.04em

  &__link
    color: $accent
    text-decoration: none
    font-weight: 600
    transition: 0.3s ease
    &:hover
      opacity: 0.9

  &__confirm
    width: 840px
    display: flex
    margin: 0 auto
    text-align: center
    flex-direction: column
    justify-content: center
    align-items: center

  &__confirm-description
    color: $label

  &__confirm-mail
    color: $accent
</style>
