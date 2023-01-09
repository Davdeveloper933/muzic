<template>
  <header
      class="header"
      :class="{'header--unauthorized' : isSignIn === false}"
  >
    <div class="container header-inner">
<!--      <router-link to="/">-->
<!--        <img src="@/assets/images/logo.svg" alt="logo"/>-->
<!--      </router-link>-->
      <button
          @click="goToMainPage"
      >
        <img src="@/assets/images/logo.svg" alt="logo"/>
      </button>
      <div v-if="!isSignIn" class="header-menu header-menu--unauthorized">
        <div class="header__registration-links">
          <button
              class="header__registration-link header__registration-link--curator"
              @click="setDesktopCurrentForm('RegistrationCurator')"
          >
            <span>Стать куратором</span>
          </button>
          <button
              class="header__registration-link"
              @click="setDesktopCurrentForm('RegistrationArtist')"
          >
            <span>Зарегистрироваться</span>
          </button>
        </div>
        <button
            class="header-link header-link--login typography-link"
            @click="setDesktopCurrentForm('Login')"
        >
          <base-icon name="login"/>
          <span>Войти</span>
        </button>
      </div>
      <nav v-else-if="isSignIn && userType === 'artist'" class="header-menu">
        <ul class="header-list">
          <li
              v-for="(link, index) in artistLinks"
              :key="index">
            <router-link
                class="header-link typography-link"
                :class="{'header-link--drop-down' : link.isdropDown}"
                :to="link.link"
                @mouseenter="link.isdropDown ? isdropDownShow = true : ''"
                @mouseleave="link.isdropDown ? isdropDownShow = false : ''"
            >
              <base-icon :name="link.icon"/>
              <span>{{ link.name }}</span>
              <div
                  v-if="link.isdropDown && isdropDownShow"
                  class="header-link__drop-down"

              >
                <p class="header-link__drop-down-title">
                  <base-icon :name="link.icon"/>
                  <span>{{ link.name }}</span>
                </p>
                <router-link
                    v-for="sublink in link.dropDownList"
                    :to="sublink.link">
                  {{ sublink.name }}
                </router-link>
              </div>
            </router-link>
          </li>
          <li>
            <button
                class="header-link typography-link"
                @click="logout"
            >
              <base-icon name="logout"/>
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      </nav>
      <nav v-else-if="isSignIn && userType === 'curator'" class="header-menu">
        <ul class="header-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link class="header-link typography-link" :to="link.link">
              <base-icon :name="link.icon"/>
              <span>{{ link.name }}</span>
            </router-link>
          </li>
          <li>
            <button
                class="header-link typography-link"
                @click="logout"
            >
              <base-icon name="logout"/>
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      </nav>
      <button
          class="header-mobile-menu"
          @click="toggleMobileMenu"
      >
        <base-icon name="burger"/>
      </button>
    </div>
  </header>
  <mobile-menu v-if="isMobileMenuActive">
    <div v-if="!isSignIn" class="mobile-menu__links">
      <button
          @click="setMobileCurrentForm('RegistrationArtist')"
      >Зарегистрироваться
      </button>
      <button
          @click="setMobileCurrentForm('RegistrationCurator')"
      >Стать Куратором
      </button>
      <button
          @click="setMobileCurrentForm('Login')"
      >Войти
      </button>
    </div>
    <ul v-else-if="isSignIn && userType === 'artist'" class="mobile-menu__links">
      <li v-for="(link, index) in artistLinks" :key="index">
        <button
            @click="goToLinkFromMobileMenu(link.link)"
        >{{ link.name }}</button>
        <mobile-menu v-if="link.dropDownList && isMobileSubMenuActive">
          <button
              class="mobile-menu__submenu-back-button"
              @click="isMobileSubMenuActive = !isMobileSubMenuActive"
          >
            <base-icon name="back"/>
            <span>{{ link.name }}</span>
          </button>
          <button
              v-for="mobileSublink in link.dropDownList"
              @click="goToLinkFromMobileMenu(mobileSublink.link)"
          >{{ mobileSublink.name }}</button>
        </mobile-menu>
      </li>
      <li>
        <button
            @click="logout"
        >Выйти
        </button>
      </li>
    </ul>
    <ul v-else-if="isSignIn && userType === 'curator'" class="mobile-menu__links">
      <li v-for="(link, index) in links" :key="index">
        <button
            @click="goToLinkFromMobileMenu(link.link)"
        >{{ link.name }}</button>
      </li>
      <li>
        <button
            @click="logout"
        >Выйти
        </button>
      </li>
    </ul>
  </mobile-menu>
</template>

<script setup>
import BaseIcon from "@/components/base/BaseIcon.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";
import MobileMenu from "@/components/layouts/MobileMenu.vue";
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const {isSignIn, userType} = storeToRefs(auth)
const {setCurrentForm, logout} = auth

const isMobileMenuActive = ref(false)
const isMobileSubMenuActive = ref(false)
const isdropDownShow = ref(false)
const links = ref([
  {link: "/reviews", name: "Рецензии", icon: "review"},
  {link: "/profile", name: "Профиль", icon: "profile"},
  {link: "/wallet/curator", name: "Кошелек", icon: "wallet"},
  {link: "/settings", name: "Настройки", icon: "settings"},
])
const artistLinks = ref([
  {link: "/", name: "Кураторы", icon: "search"},
  {
    link: "", name: "Новые рецензии", icon: "bell", isdropDown: true, dropDownList: [
      {
        link: "/", name: "Имя песни"
      },
      {
        link: "/", name: "Очень длинное имя песни"
      },
      {
        link: "/", name: "Ещё имя песнии"
      },
      {
        link: "/", name: "И ещё имя песнии"
      }
    ]
  },
  {link: "/profile", name: "Профиль", icon: "profile"},
  {link: "/wallet/curator", name: "Кошелек", icon: "wallet"},
  {link: "/settings", name: "Настройки", icon: "settings"},
])

const toggleMobileMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value
  document.body.classList.toggle('no-scroll')
  console.log(isMobileMenuActive.value);
}

const setDesktopCurrentForm = (form) => {
  router.push("/")
  setCurrentForm(form)
}

const setMobileCurrentForm = (form) => {
  setCurrentForm(form)
  toggleMobileMenu()
}

const goToLinkFromMobileMenu = (link) => {
  if(link !== '') {
    router.push(link)
    toggleMobileMenu()
  } else {
    isMobileSubMenuActive.value = !isMobileSubMenuActive.value
  }

}

const goToMainPage = () => {
  router.push('/')
  setCurrentForm('MainForm')
  logout()
}
</script>

<style lang="sass" scoped>
.header
  padding: 24px 0
  background-color: $light
  position: relative
  z-index: 100

  +md()
    padding: 0

  &--unauthorized
    padding: 8px 0

  +sm()
    padding: 0
    min-height: initial

  &-menu
    +md()
      display: none

    &--unauthorized
      display: flex

      +md()
        display: none

  &__registration-links
    display: flex
    margin-right: 52px
    background: $accent
    border: 2px solid $accent
    border-radius: 8px

    +sm()
      display: none

  &__registration-link
    padding: 12px 28px
    font-weight: 600
    font-size: 16px
    line-height: 150%

    span
      color: $light

    &--curator
      background-color: $light
      border-radius: 6px

      span
        color: $accent

  &-inner
    +flex($jc: space-between)
    padding-bottom: 0

  &-list
    display: flex
    gap: 30px

  &-link
    display: flex
    align-items: center
    gap: 10px
    font-weight: 500

    &--drop-down
      position: relative

    //&:hover
    //  .header__drop-down
    //    display: block


    &__drop-down
      position: absolute
      top: -13px
      left: -13px
      z-index: 10
      padding: 12px
      border: 1px solid #E7EBFF
      border-radius: 10px
      background-color: $light
      width: 192px

      a
        display: block
        font-weight: 400
        font-size: 16px
        line-height: 19px
        letter-spacing: -0.04em
        color: #45454E
        margin-bottom: 12px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

        &:last-of-type
          margin-bottom: 0

    &__drop-down-title
      display: flex
      align-items: center
      gap: 10px
      font-weight: 500
      margin-bottom: 12px

    &--login
      +sm()
        display: none


  &-mobile-menu
    display: none
    position: relative
    padding: 24px 16px
    right: -8px

    +md()
      display: flex
</style>
