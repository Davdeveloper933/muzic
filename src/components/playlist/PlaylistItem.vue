<template>
	<a
      :href="link"
      class="playlist__item"
      target="_blank">
		<div class="playlist__img">
      <img
          v-if="img !== ''"
          :src="img"
          :alt="name">
    </div>
		<div class="playlist__item-content">
			<h4
          class="playlist__name"
      >{{ name }}</h4>
			<div
          v-if="text !== ''"
          class="playlist__text"
          v-html="text"></div>
		</div>
		<button
        v-if="isEdit"
        class="playlist__trash"
        @click.prevent="showRemoveItemModal"

    >
      <img src="~@/assets/img/trash.svg" alt="Удалить">
    </button>
	</a>
  <div v-if="isDeleteModalShow"  class="base-modal__overlay">
    <div class="base-modal">
      <button
          class="base-modal__close"
          @click="showRemoveItemModal"
      >
        <svg

            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 10L10 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 10L30 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="playlist__item-delete-modal">
        <h1 class="playlist__item-delete-modal-title">Вы уверены что хотите удалить плейлист?</h1>
        <base-button
            title="Удалить"
            :primary="true"
            class="playlist__item-delete-modal-button"
            :data-id="index"
            @click="removeItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/base1/BaseButton.vue";
import {ref} from "vue";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  index: {
    type: String,
    default: ''
  },
  playlist: {
    type: Array,
    default: () => ([])
  },
})
const emits = defineEmits(['update:playlist'])

const isDeleteModalShow = ref(false)

const showRemoveItemModal = () => {
  isDeleteModalShow.value = !isDeleteModalShow.value
}

const removeItem = (e) => {
  e.preventDefault();
  emits('update:playlist', props.playlist.splice(e.target.dataset.id, 1))
  showRemoveItemModal()
}
</script>

<style lang="sass">
.playlist__item-delete-modal
  width: 364px
  display: flex
  flex-direction: column

  &-title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: -0.04em
    margin: 0 0 24px


.base-modal__overlay
  background: rgba(0, 0, 0, 0.33)
</style>
