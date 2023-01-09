<template>
  <div class="base-modal__overlay">
    <div class="base-modal">
      <button
          class="base-modal__close"
          @click="toggleModal"
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
      <component :is="currentModal" />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
import {useModalStore} from "@/stores/Modal";
import {storeToRefs} from "pinia";
import MusicStylesModal from "@/components/modals/MusicStylesModal";
import NetworksModal from "@/components/modals/NetworksModal";
import AddPlaylistModal from "@/components/modals/AddPlaylistModal";

export default {
  components: {
    BaseIcon,
    MusicStylesModal,
    NetworksModal,
    AddPlaylistModal
  },
  setup() {
    const modal = useModalStore()
    const {currentModal} = storeToRefs(modal)
    const {toggleModal} = modal

    return {
      modal,
      currentModal,
      toggleModal
    }
  }
}
</script>

<style lang="sass">
.base-modal
  background: #FFFFFF
  border: 1px solid #E7EBFF
  border-radius: 20px
  padding: 32px 28px
  position: relative

  +md()
    width: 100vw
    height: 100vh
    border-radius: 0

  &__overlay
    position: fixed
    z-index: 1000
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.33)
    display: flex
    justify-content: center
    align-items: center

  &__close
    position: absolute
    top: -40px
    right: -40px
    cursor: pointer
    width: 40px
    height: 40px

    path
      stroke: $light

    +md()
      top: 20px
      right: 20px

      path
        stroke: $accent
</style>