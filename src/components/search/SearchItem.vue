<template>
	<a class="search__item" :href="profile.url" v-for="(profile, index) in showList"
		:key="index"
	>
		<div class="search__item-img">
			<img :src="profile.logo" :alt="profile.name">
			<div class="search__item-favorite"><img src="~@/assets/img/favorite.svg" alt="Избранное"></div>
		</div>
		<div class="search__item-content">
			<div class="search__item-top">
				<h4 class="search__item-name title_h4">{{ profile.name }}</h4>
				<div class="search__item-cat" v-if="profile.category">{{ profile.category }}</div>
				<div class="search__item-count" v-if="profile.counts"><b>{{ profile.counts }}</b> на рецензии</div>
			</div>
			<div class="search__item-text" v-if="profile.desc">{{ profile.desc }}</div>
		</div>
	</a>
</template>

<script>

export default {
	props: ['showList']
}

</script>