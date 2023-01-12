<template>
    <label class="base-checkbox">
        <input type="checkbox" name="" id="">
        <div class="checkmark">
          <svg width="21" height="22" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 4.72339L6.00008 12.0567L2.66675 8.72339" stroke="#FF6C6C" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </label>
</template>

<style lang="sass" scoped>
.base-checkbox
  width: 30px
  height: 30px
  position: relative
  input
    cursor: pointer
    opacity: 0
    position: absolute
    width: 100%
    height: 100%
    &:checked ~ .checkmark
      border: 1px solid #FFD5D5
      svg
        display: block
  .checkmark
    cursor: pointer
    position: absolute
    width: 100%
    height: 100%
    border: 1px solid #E7EBFF
    border-radius: 5px
    display: flex
    align-items: center
    justify-content: center
    svg
      display: none
</style>