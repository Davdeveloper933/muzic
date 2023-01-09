<template>
  <div class="pagination">
    <button
      @click="prev"
      class="pagination__prev"
      :class="{ disabled: currentPage <= 1 }"
    >
      <img src="@/assets/images/icons/arrow-left.svg" alt="" />
    </button>
    <div class="pagination__nav">
      <div
        v-for="page in pages"
        :key="page"
        class="pagination__num"
        :class="{
          active: currentPage === page,
        }"
        @click="setPage(page)"
      >
        {{ page }}
      </div>
    </div>
    <button
      @click="next"
      class="pagination__next"
      :class="{ disabled: currentPage === pages }"
    >
      <img src="@/assets/images/icons/arrow-right.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pages", "currentPage"],

  setup(props, ctx) {
    const next = () => {
      const page = props.currentPage + 1;
      ctx.emit("onChange", page);
    };

    const prev = () => {
      const page = props.currentPage - 1;
      ctx.emit("onChange", page);
    };

    const setPage = (page) => {
      ctx.emit("onChange", page);
    };

    return {
      next,
      prev,
      setPage,
    };
  },
};
</script>

<style lang="sass" scoped>
.pagination
  display: flex
  margin-top: 48px
  margin-left: auto
  justify-content: flex-end

  &__next,
  &__prev
    display: flex
    align-items: center
    justify-content: center
    width: 108px
    height: 60px
    background: #ffffff
    border: 1px solid #d1d5ef
    transition: $transition

    &.disabled
      pointer-events: none
      opacity: 0.8


    &:hover
      background: #d1d5ef


    img
      width: 24px
      height: auto
      object-fit: contain



  &__prev
    border-radius: 10px 0px 0px 10px


  &__next
    border-radius: 0px 10px 10px 0px


  &__nav
    display: flex
    align-items: center


  &__num,
  &__divider
    width: 60px
    height: 60px
    border: 1px solid #d1d5ef
    background: #ffffff
    display: flex
    align-items: center
    justify-content: center
    font-size: 14px
    text-align: center
    font-weight: 600
    color: #777b9e


  &__num
    cursor: pointer
    transition: $transition

    &:hover
      background: #d1d5ef

    &.active
      color: #2a2a2d
      background: #eef0fd



  &__divider
    pointer-events: none
</style>
