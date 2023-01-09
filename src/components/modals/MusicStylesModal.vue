<template>
<div class="music-styles-modal">
  <div class="music-styles-modal__wrapper">
    <div
        v-if="showStyleSublist"
        class="music-styles-modal__substyles">
      <button
          class="music-styles-modal__back-button"
          @click="showStyleSublist = !showStyleSublist"
      >
        <base-icon
            name="backModal" />
        <span>{{ styleSublistTitle }}</span>
      </button>
      <div
          v-for="styleSublistItem in styleSublist"
          :key="styleSublistItem.id"
          class="music-styles-modal__style-checkbox">
        <input
            :id="styleSublistItem.id"
            type="checkbox"
            v-model="checkedSubItems"
            :value="styleSublistItem.id"
            @click="checkItem(styleSublistItem.id)"
        >
        <label
            :for="styleSublistItem.id"
        >{{ styleSublistItem.title }} ({{ styleSublistItem.amount }})</label>
      </div>
    </div>
    <div v-else class="music-styles-modal__styles">
      <h1 class="music-styles-modal__title">{{ modalTitle }}</h1>
      <div class="music-styles-modal__style-button-wrapper">
        <button
            v-for="styleItem in musicStyles"
            :key="styleItem.id"
            class="music-styles-modal__style-button"
            :class="{'music-styles-modal__style-button--active' : isSubItemsChecked(styleItem.title)}"
            @click="setStyleSublist(styleItem.sublist, styleItem.title)"
        >
          <span>{{ styleItem.title }}</span>
          <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <base-button
        title="Сохранить"
        :primary="true"
        class="music-styles-modal__save-button"
        @click="saveMusicStyles"
    />
  </div>
</div>
</template>

<script setup>
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import {useModalStore} from "@/stores/Modal";
import {useUserStore} from "@/stores/User";
import {storeToRefs} from "pinia";
import {ref, onMounted} from "vue";

const modal = useModalStore()
const user = useUserStore()
const {modalTitle} = storeToRefs(modal)
const {toggleModal} = modal
const {musicStyles, musicStylesByPreferences, musicStylesList} = storeToRefs(user)
const {getMusicStylesList, updateUserStyles} = user

const stylesList = ref([])
const styleSublist = ref([])
const checkedSubItems = ref([])
const showStyleSublist = ref(false)
const isItemChecked = ref(false)
const styleSublistTitle = ref('')
const selectedItems = ref([])
const selectedStyles = ref([])

const setStyleSublist = (list, title) => {
  styleSublist.value = list
  styleSublistTitle.value = title
  showStyleSublist.value = true
}

const saveMusicStyles = () => {
  updateUserStyles(selectedStyles.value);
  toggleModal()
}

const isSubItemsChecked = (title) => {
  return musicStylesList.value.find(item => item.title === title)
}

const checkItem = (id) => {
  musicStyles.value.forEach(item => {
    if (item.sublist.find(style => style.id === id) !== undefined)
    selectedItems.value = item.sublist.find(style => style.id === id)
  })

  selectedStyles.value.push({
    id: id,
    title: styleSublistTitle.value,
    subtitle: selectedItems.value.title,
    amount: selectedItems.value.amount,
    type: modalTitle.value,
  })
}

onMounted(() => {
  getMusicStylesList(modalTitle.value)
  stylesList.value = musicStyles.value.map(item => item.sublist)
  checkedSubItems.value = musicStylesList.value.map(item => item.id)
})
</script>

<style scoped lang="sass">
.music-styles-modal
  min-height: 585px
  width: 340px
  display: flex
  flex-direction: column

  &__title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: -0.04em
    margin: 0 0 24px

  &__wrapper
    display: flex
    flex-direction: column
    justify-content: space-between
    flex-grow: 1

  &__save-button
    flex-grow: unset

  &__style-button-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 10px

  &__style-button
    border: 1px solid #E7EBFF
    border-radius: 10px
    font-weight: 400
    font-size: 15px
    line-height: 18px
    letter-spacing: -0.04em
    padding: 8px 16px
    height: 55px
    display: flex
    justify-content: space-between
    align-items: center
    width: 48%

    span
      width: 70%
      word-break: break-word
      text-align: left

    svg
      stroke: #2D3C57

    &--active
      span
        color: #FF6C6C

      svg
        stroke: #FF6C6C


  &__back-button
    display: flex
    align-items: center
    gap: 10px
    margin-bottom: 20px

    span
      font-weight: 600
      font-size: 24px
      line-height: 29px
      letter-spacing: -0.04em
      text-transform: capitalize

  &__style-checkbox
    margin-bottom: 10px

    input
      display: none

    label
      display: flex
      align-items: center
      gap: 10px

      &::before
        display: block
        content: ""
        width: 25px
        height: 25px
        border: 1px solid #E7EBFF
        border-radius: 5px

    input:checked + label::before
      background-image: url("@/assets/img/check.svg")
      background-repeat: no-repeat
      background-position: center

</style>