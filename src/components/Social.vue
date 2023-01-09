<template>
	<div class="social">
		<div class="social__list">
			<div
          class="social__item"
          v-for="(item, index) in socialList"
          :key="index">
				<a
            :href="item.url"
            class="social__icon">
          <img
              :src="item.icon"
              :alt="item.name">
        </a>
			</div>
			<button
          v-if="isEdit"
          class="social__item social__item_add"
          @click="addItem"
      >
        <img
            src="~@/assets/img/edit.svg"
            alt="Добавить">
      </button>
		</div>
	</div>
</template>

<script setup>
import {useModalStore} from "@/stores/Modal";
import {ref} from "vue";

const props = defineProps({
  socialList: {
    type: Array,
    default: () => ([])
  },
  isEdit: {
    type: Boolean,
    default: false
  }
})

const modal = useModalStore()
const {toggleModal, setCurrentModal} = modal

const addItem = () => {
  toggleModal()
  setCurrentModal('NetworksModal', 'Ваш профиль в соцсетях:')
};
</script>