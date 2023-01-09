<template>
	<!-- start section search -->
	<section class="search">
		<div class="container">

			<div class="search__grid">
				<SearchForm :selected="selected" @update-list="updateList" :profileList="profileList" :min="min" :max="max" :categories="categories" :genre="genre" v-if="profileList.length != 0"/>
				<SearchList :showList="showList" v-if="showList.length != 0"/>
			</div>

		</div>
	</section>
	<!-- end section search -->
</template>

<script>
import SearchList from '@/components/search/SearchList.vue'
import SearchForm from '@/components/search/SearchForm.vue'

export default {
	name: 'Search',
	components: {
		SearchList,
		SearchForm
	},
	mounted() {
		for (let item of this.profileList) {
			if (this.min >= item.price) {
				this.min = item.price;
			}
			if (this.max <= item.price) {
				this.max = item.price;
			}
			if (!this.categories.includes(item.category)) {
				this.categories.push(item.category);
			}
			for (let genre of item.genre.split(', ')) {
					if (!this.genre.includes(genre)) {
					this.genre.push(genre);
				}
			}
		}
		this.updateList()
	},
	data() {
		return {
			min: 0,
			max: 0,
			categories: [],
			genre: [],
			showList: [],
			selected: {
				category: null,
				genre: null,
			},
			cloneList: [],
			profileList: [
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'ПЛЕЙЛИСТ',
					genre: 'Рок, рэп, классика',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 20,
					counts: 1538
				},
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'Другой',
					genre: 'Рок, рэп, классика',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 10,
					counts: 1538
				},
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'Иной',
					genre: 'Гранж, пост-рок',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 130,
					counts: 1538
				}
				,
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'ПЛЕЙЛИСТ',
					genre: 'Lo-fi, трэш',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 110,
					counts: 1538
				}
				,
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'ПЛЕЙЛИСТ',
					genre: 'Рок, рэп, классика',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 142,
					counts: 1538
				}
				,
				{
					logo: require('@/assets/img/profile-logo.jpg'),
					name: 'Electric Funeral Records',
					category: 'ПЛЕЙЛИСТ',
					genre: 'Рок, рэп, классика',
					desc: 'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной...',
					url: '#',
					price: 31,
					counts: 1538
				}
			]
		}
	},
	methods: {
		updateList(min, max) {
			this.cloneList = Array.from(this.profileList);
			min = min === undefined ? this.min : min
			max = max === undefined ? this.max : max
			this.cloneList = this.cloneList.filter(item => item.price >= min && item.price <= max);
			for (const [key, value] of Object.entries(this.selected)) {
				if (value !== null) {
					this.cloneList = this.cloneList.filter(item => item[key].indexOf(value) !== -1);
				}
			}
			this.showList = this.cloneList;
		}
	}
}
</script>