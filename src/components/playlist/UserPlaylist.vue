<template>
	<div class="playlist">
		<h2 class="playlist__title title_h2" data-editable>
			<span data-edit>{{ title }}</span>
			<button v-if="isEdit" class="edit" @click="this.$edit($event, title)"><img src="~@/assets/img/edit.svg" alt="Редактировать"></button>
		</h2>
		<div class="playlist__list" v-if="playlistData.length != 0">
			<PlaylistItem v-for="(item, index) in loadPlaylist" 
				:key="index" 
				:index="index" 
				:link="item.link" 
				:img="item.img" 
				:name="item.name" 
				:text="item.text" 
				:isEdit="isEdit"
			/>
		</div>
		<div class="playlist__btns">
			<button class="playlist__btn playlist__btn_show-more btn" @click="playlistStep++" v-if="playlistData.length != 0 && playlistData.length > playlistCount * playlistStep" >{{ showMoreText }}</button>
		</div>
	</div>
</template>

<script>
	import PlaylistItem from '@/components/playlist/PlaylistItem.vue'

	export default {
		props: ['isEdit'],
		components: {
			PlaylistItem
		},
		data() {
			return {
				title: 'Плейлисты',
				showMoreText: 'Показать ещё',
				addPlaylist: 'Добавить плейлист',
				playlistData: [
					{
						link: '#',
						img: require('@/assets/img/playlist-1.jpg'),
						name: 'Название плейлиста',
						text: '<b>2 546</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-2.jpg'),
						name: 'Название плейлиста',
						text: '<b>10 523</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-3.jpg'),
						name: 'Название плейлиста',
						text: '<b>769</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-4.jpg'),
						name: 'Название плейлиста',
						text: '<b>5 096</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-2.jpg'),
						name: 'Название плейлиста',
						text: '<b>2 546</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-1.jpg'),
						name: 'Название плейлиста',
						text: '<b>10 523</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-4.jpg'),
						name: 'Название плейлиста',
						text: '<b>769</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-3.jpg'),
						name: 'Название плейлиста',
						text: '<b>5 096</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-1.jpg'),
						name: 'Название плейлиста',
						text: '<b>2 546</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-2.jpg'),
						name: 'Название плейлиста',
						text: '<b>10 523</b> прослушиваний'
					},
					{
						link: '#',
						img: require('@/assets/img/playlist-3.jpg'),
						name: 'Название плейлиста',
						text: '<b>769</b> прослушиваний'
					}
				],
				playlistCount: 4,
				playlistStep: 1,
			}
		},
		computed: {
			loadPlaylist() {
				return this.playlistData.slice(0, this.playlistCount * this.playlistStep)
			}
		}
	}
</script>
