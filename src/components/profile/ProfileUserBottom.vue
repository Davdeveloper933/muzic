<template>
	<div class="profile__bottom">
		<div class="profile__aside">
			<div class="profile__aside-btns">
				<button class="profile__aside-chat btn btn_fill">{{ sendText + '  ' + price + 'кр.' }}</button>
			</div>
			<ProfileList :list="list" v-if="list"/>
			<Social :socialList="socialList" :isEdit="isEdit" v-if="socialList" />
		</div>
		<div class="profile__more">
			<UserPlaylist />
			<ReviewsList />
			<UserMusicalStyleList />
		</div>
	</div>
</template>

<script>
	import Social from '@/components/Social.vue'
	import ProfileList from '@/components/profile/ProfileList.vue'
	import UserPlaylist from '@/components/playlist/UserPlaylist.vue'
	import ReviewsList from '@/components/reviews/ReviewsList.vue'
	import UserMusicalStyleList from '@/components/musical-style/UserMusicalStyleList.vue'

	export default {
		props: ['sendText', 'list', 'socialList', 'price'],
		components: {
			Social,
			ProfileList,
			UserPlaylist,
			ReviewsList,
			UserMusicalStyleList
		}
	}
</script>
