<template>
  <footer class="footer">
    <div class="container footer-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <router-link to="#" class="footer-policy typography-link">Политика конфиденциальности</router-link>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.footer

  background-color: $light
  +flex()
  +xs()
    padding: 20px 0
    min-height: initial
  &-inner
    +flex($jc: space-between)
    padding: 44px 16px

    +xs()
      flex-direction: column
      justify-content: center
      gap: 20px
      padding: 0 20px
  &-policy
    color: $policy
</style>