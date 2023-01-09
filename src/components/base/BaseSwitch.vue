<template>
  <div
    class="switch"
    :class="{ 'switch-active': this.switch }"
    @click="switched"
  >
    <span
      class="switch-circle"
      :class="{ 'switch-circle-active': this.switch }"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch: false,
    };
  },
  methods: {
    switched() {
      this.switch = !this.switch;
    },
  },
};
</script>

<style lang="sass" scoped>
.switch
  width: 52px
  height: 30px
  border-radius: 20px
  border: 1px solid $red
  position: relative
  cursor: pointer
  flex-shrink: 0
  &-active
    border: 1px solid $green
  &-circle
    position: absolute
    top: 3px
    left: 3px
    display: inline-block
    width: 22px
    height: 22px
    border-radius: 50%
    background-color: $rose
    transition: .3s ease
    &-active
      transform: translateX(23px)
      transition: .3s ease
      background: $green
</style>