<template>
	<div class="search__list">
		<SearchItem :showList="showList" />
	</div>
</template>

<script>
import SearchItem from '@/components/search/SearchItem.vue'

export default {
	props: ['showList'],
	components: {
		SearchItem
	}
}
</script>