<template>
  <div
      v-if="isRegisteredCurator"
      class="v-reg-curator__confirm"
  >
    <h2 class="v-reg-curator__confirm-mail title_h2">{{ emailInput }}</h2>
    <h2 class="v-reg-curator__confirm-description title_h2">На указанную вами почту, отправлено письмо. Перейдите по ссылке в письме для подтверждения почты</h2>
  </div>
  <div v-else class="container-narrow v-reg-curator">
    <baseBlock class="v-reg-curator__block">
      <form class="v-reg-curator__form">
        <h1 class="typography-title v-reg-curator__title">Регистрация</h1>
        <div class="v-reg-curator__radios">
          <baseRadio
            :title="radio.title"
            name="radiobuttons"
            v-for="(radio, index) in radiobuttons"
            :key="index"
            :id="radio.id"
          />
        </div>
        <div class="v-reg-curator__fields">
          <base-input
            id="email"
            label="Email"
            placeholder="email@gmail.com"
            v-model="emailInput"
          />
          <base-input
            id="password"
            label="Пароль"
            :type="type"
            placeholder="Введите пароль"
            :icon="icon"
            v-model="passwordInput"
            @button-click="changeVisibility"
          />
          <base-file id="image" label="Фотография профиля" />
          <base-input
            id="name"
            label="Имя (логин)"
            placeholder="Введите имя или название"
            v-model="loginInput"
          />
          <base-input
            id="description"
            label="Описание"
            placeholder="Расскажите о себе и что вы ищите"
            :textarea="true"
            v-model="descriptionInput"
          />
        </div>
        <base-button
            title="Зарегистрироваться"
            :primary="true"
            @click="registrationCurator"
        />
      </form>
<!--      <base-social text="Или зарегистрироваться с помощью" />-->
    </baseBlock>
    <p class="v-reg-curator__account typography-text">
      Уже есть аккаунт?
      <button
          class="v-reg-curator__link"
          @click="setCurrentForm('Login')"
      >Войти</button>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseRadio from "@/components/base1/BaseRadio.vue";
import BaseInput from "@/components/base1/BaseInput.vue";
import BaseFile from "@/components/base1/BaseFile.vue";
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseSocial from "@/components/base1/BaseSocial.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default {
  components: {
    BaseBlock,
    BaseRadio,
    BaseInput,
    BaseFile,
    BaseButton,
    BaseSocial,
  },
  methods: {
    changeVisibility() {
      if (this.icon === "eye") {
        this.icon = "eye-closed";
        this.type = "text";
      } else {
        this.icon = "eye";
        this.type = "password";
      }
    },
    reg() {},
  },
  setup() {
    const auth = useAuthStore()

    const picked = ref("");
    const emailInput = ref("")
    const loginInput = ref("")
    const passwordInput = ref("")
    const descriptionInput = ref("")
    const radiobuttons = [
      { id: "play", title: "Плейлист", value: "play" },
      { id: "rad", title: "Радио", value: "rad" },
      { id: "media", title: "Медиа", value: "media" },
      { id: "label", title: "Лейбл", value: "label" },
      { id: "bloger", title: "Блогер", value: "bloger" },
      { id: "producer", title: "Продюссер", value: "producer" },
    ];
    const type = ref("password");
    const icon = ref("eye");
    const {setCurrentForm, setRegistrationCuratorRequest} = auth
    const {isRegisteredCurator} = storeToRefs(auth)

    const registrationCurator = () => {
      const registrationCuratorFormData = {
        type: "radio",
        email: emailInput.value,
        password: passwordInput.value,
        photo: "img",
        login: loginInput.value,
        description: descriptionInput.value
      }

      setRegistrationCuratorRequest(registrationCuratorFormData)
    }

    return {
      radiobuttons,
      emailInput,
      loginInput,
      passwordInput,
      descriptionInput,
      type,
      icon,
      picked,
      setCurrentForm,
      registrationCurator,
      isRegisteredCurator
    };
  },
};
</script>

<style lang="sass" scoped>
.v-reg-curator
  margin-top: 95px
  margin-bottom: 60px
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__block
    +xs()
      padding: 20px

  &__form
    margin-bottom: 35px

    +xs()
      margin-bottom: 0

  &__title
    text-align: center
    margin-bottom: 30px

  &__radios
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    column-gap: 30px
    row-gap: clamp(12px, 2%, 20px)
    margin-bottom: 30px


  &__fields
    display: flex
    flex-direction: column
    gap: 30px
    margin-bottom: 38px

  &__social
    width: 100%
    display: flex
    gap: 30px

  &__account
    font-weight: 600
    text-align: center
    margin-top: 13px
    font-size: 16px

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
