<template>
	<ul class="profile__aside-list">
		<li v-for="(item, index) in list" :key="index" class="profile__aside-item">
			<a href="#" class="profile__aside-link">
				<div class="profile__aside-icon"><img :src="item.icon" :alt="item.text"></div>
				<div class="profile__aside-link-text">{{ item.text }}</div>
				<div class="profile__aside-count">{{ item.count }}</div>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['list']
	}
</script>