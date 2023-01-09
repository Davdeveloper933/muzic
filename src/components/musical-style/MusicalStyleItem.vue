<template>
  <div class="musical-style__col">
    <div
        v-if="name"
        class="musical-style__name-wrapper">
      <div class="musical-style__icon">
        <img :src="icon" :alt="name" />
      </div>
      <h3 class="title_h3 musical-style__subtitle">{{ name }}</h3>
    </div>
    <div class="musical-style__items">
      <div
        class="musical-style__item"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.subtitle }}
        <button
          v-if="isEdit"
          class="musical-style__item-remove"
          @click="removeItem(index, name)"
          :data-id="index"
        >
          <img src="~@/assets/img/remove.svg" alt="Удалить" />
        </button>
      </div>
      <button
        v-if="isEdit"
        class="musical-style__item musical-style__item_add"
        @click="addItem(name)"
      >
        {{ musicButtonAddText || addButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import {useModalStore} from "@/stores/Modal";
import {ref} from "vue";
import {useUserStore} from "@/stores/User";
import {storeToRefs} from "pinia";

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  list: {
    type: Array,
    default: () => ([])
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  musicButtonAddText: {
    type: String,
    default: ''
  },
})

const addButtonText = ref("изменить")

const modal = useModalStore()
const user = useUserStore()

const {toggleModal, setCurrentModal} = modal

const emit = defineEmits(['removeItemFromStyles'])
const removeItem = (index, name) => {
  emit(
      "removeItemFromStyles",
      index, name
  )
}

const addItem = (name) => {
  // let text = prompt("Введите название стиля");
  // if (text) {
  //   this.$emit("update:category", this.category.list.push(text));
  // }

  toggleModal()
  setCurrentModal('MusicStylesModal', name)

};
</script>
