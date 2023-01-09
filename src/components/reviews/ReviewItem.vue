<template>
	<div class="reviews__item">
		<h3 class="reviews__name title_h3">{{ item.name }}</h3>
		<div class="reviews__text content" v-html="item.text"></div>
	</div>
</template>

<script>
	export default {
		props: ['item']
	}
</script>