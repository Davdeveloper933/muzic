<template>
  <div class="b-modal">
    <div class="b-modal__inner">
      <button class="b-modal__close" @click="$emit('close-modal')">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10L10 30"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 10L30 30"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="b-modal__header">
        <slot name="header"></slot>
      </div>
      <div class="b-modal__body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.b-modal
  width: 100%
  height: 100vh
  position: fixed
  top: 0
  left: 0
  z-index: 20
  background-color: rgba(#000, .8)
  display: flex
  align-items: center
  justify-content: center

  &__inner
    max-width: 390px
    width: 100%
    position: relative
    background-color: #fff
    padding: 30px
    border-radius: 20px
  &__close
    position: absolute
    top: -40px
    right: -40px
</style>
