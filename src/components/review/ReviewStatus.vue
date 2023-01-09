<template>
  <div class="status">
    <img
      src="@/assets/images/deny-emodji.png"
      alt="smile icon"
      v-if="status === 'skipped'"
    />
    <span class="status-text" v-else>Оценено</span>
  </div>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true,
    validator(value) {
      return ["skipped", "reviewed"].includes(value);
    },
  },
});
</script>

<style lang="sass" scoped>
.status
  height: 60px
  display: grid
  place-items: center
  background: $secondary-color
  border: 1px solid $fouth-color
  border-radius: 10px

.status img
  max-width: 32px

.status span
  font-size: $default-font-size
  font-weight: 500
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: #B1B6DA
</style>
