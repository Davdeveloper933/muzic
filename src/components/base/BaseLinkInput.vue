<template>
  <div class="base-link-input">
    <div
        class="base-link-input__placeholder"
        v-if="placeholder"
        @click="clickPlaceholder"
    >
      <p v-if="link.link === ''">
        <span>Вставьте ссылку на </span>
        <a
            v-if="link.title !== 'Ваш сайт'"
            :href="link.link"
            target="_blank"
        >{{ link.title }}</a>
        <span
            v-else
        >{{ link.title }}</span>
      </p>
<!--      <p v-else>{{ link.link }}</p>-->
    </div>
    <input
        type="text"
        class="base-link-input__input"
        ref="inputField"
        v-model="networkInput"
        @focus="focusInput"
        @blur="blurInput"
    />
    <button
        v-if="link.link !== ''"
        class="base-link-input__close"
        @click="deleteLink"
    >
      <base-icon name="close-gray" />
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import {computed} from "@vue/runtime-core";

const props = defineProps({
  link: {
    type: Object,
    default: () => ({})
  }
})

const placeholder = ref(true)
const inputField = ref(null)
const networkInput = computed({
  get() {
    return props.link.link
  },
  set(value) {
    props.link.link = value
  }
})

const focusInput = () => {
  placeholder.value = false;
}
const blurInput = () => {
  inputField.value.value === '' ? placeholder.value = true : placeholder.value = false
}
const clickPlaceholder = () => {
  inputField.value.focus();
}
const deleteLink = () => {
  networkInput.value = ''
}
</script>

<style scoped lang="sass">
.base-link-input
  position: relative
  width: 100%
  margin-bottom: 20px

  &__placeholder
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 20px
    font-size: 16px
    line-height: 19px
    width: 100%

    +md()
      font-size: 14px

    a
      color: #FF6C6C

  &__input
    height: 60px
    padding: 0 40px 0 20px
    font-weight: 400
    font-size: 16px
    line-height: 19px
    border: 1px solid #E7EBFF
    border-radius: 10px
    width: 100%
    max-width: 683px
    font-family: $default-font
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    +md()
      height: 45px
      font-size: 14px

    &::placeholder
      color: #777B9E

  &__close
    position: absolute
    top: 8px
    right: 6px
</style>