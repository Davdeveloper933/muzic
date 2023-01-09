<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.card
  border: 1px solid $outline
  background-color: $light
  border-radius: 15px
  min-height: 109px
  padding: 0 30px
  +xs()
    min-height: 64px
</style>