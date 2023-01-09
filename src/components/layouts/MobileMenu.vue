<template>
  <div class="mobile-menu">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="sass">
.mobile-menu
  width: 100vw
  height: 100vh
  background-color: #505153
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  &__links
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    button,
    a
      display: flex
      font-weight: 600
      font-size: 25px
      line-height: 30px
      text-align: center
      letter-spacing: -0.04em
      color: #FFFFFF
      margin-bottom: 28px

  &__submenu-back-button
    align-items: center
    gap: 16px

    span
      color: $light
</style>