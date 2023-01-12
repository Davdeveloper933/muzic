<template>
	<!-- start section search -->
	<section class="search">
		<div class="container">

			<div class="search__grid">
                <div style="width:100%">
                    <div class="d-flex items-center search__for-curator">
                        <h2 class="title_h2 musical-style__title">
                            <span>Поиск куратора</span>
                        </h2>
                        <button class="search__filter-button" @click="showFilterModal = true">
                            <img src="@/assets/images/icons/filter.svg" alt="">
                        </button>
                    </div>
                    <SearchForm class="search__form--desktop" :selected="selected" @update-list="updateList" :profileList="profileList" :min="min" :max="max"
                        :categories="categories" :genre="genre" v-if="profileList.length != 0" />
                </div>
				<div style="width:100%">
					<div class="select-song">
						<div class="select-song__wrapper">
							<span class="select-song__label">Выберите композиции:</span>
							<div class="select-song__song-name" @click="showSelectSongModal = !showSelectSongModal">
                                <div>
                                    <span>
                                        {{ selectedSongs.join(", ") }}
                                    </span>
                                </div>
								<button class="select-song__dropdown-arrow" >
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="#E7EBFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
								</button>
							</div>
							<button class="btn btn_fill">Отправить</button>
						</div>
					</div>
					<SearchList :showList="showList" v-if="showList.length != 0"/>
				</div>
			</div>
		</div>
        <div class="base-modal__overlay" v-if="showSelectSongModal || showAccountBalanceModal">
            <div class="base-modal" v-if="showSelectSongModal">
                    <button class="base-modal__close" @click="closeSelectSongModal">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 10L10 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 10L30 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="playlist__item-delete-modal">
                        <h1 class="playlist__item-delete-modal-title">Выберете музыку:</h1>
                        <div class="radios">
                            <baseRadio :value="radio.value" @change="onChange" v-model="selectedSongs" :title="radio.title" name="radiobuttons" v-for="(radio, index) in radiobuttons" :key="index"
                                :id="radio.id" />
                        </div>
                        <base-button title="Сохранить" @click="save" :primary="true" class="playlist__item-delete-modal-button"
                             />
                    </div>
            </div>
            <div class="base-modal" v-if="showAccountBalanceModal && !showSelectSongModal">
                <button class="base-modal__close" @click="closeAccountBalanceModal">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10L10 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 10L30 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="playlist__item-delete-modal">
                    <h1 class="playlist__item-delete-modal-title">На вашем Аккаунте не хватает средств, пополните счет.</h1>
                    <base-button title="Пополнить" @click="closeAccountBalanceModal" :primary="true"
                        class="playlist__item-delete-modal-button" />
                </div>
            </div>
        </div>
        <div class="base-modal__overlay" v-if="showFilterModal">
            <div class="base-modal filter-modal">
                <button class="base-modal__close" @click="closeFilterModal">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10L10 30" stroke="#FF6C6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 10L30 30" stroke-width="2" stroke="#FF6C6C" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <SearchForm class="search__form" :selected="selected" @update-list="updateList" :profileList="profileList"
                    :min="min" :max="max" :categories="categories" :genre="genre" v-if="profileList.length != 0" />
            </div>
        </div>
	</section>
	<!-- end section search -->
</template>

<style lang="sass" scoped>
.filter-modal
    width: 360px
    border-radius: 15px
    overflow-y: auto
    +xxs()
        width: 100%
    &.base-modal
        +xxs()
            max-height: 100%
            height: 100%
            border-radius: 0
    .base-modal__close
        right: 5px
        top: 5px
        z-index: 1
        width: 30px
        height: 30px
        path
            stroke: #ff6c6c
    .search__form
        width: 100%
        +xxs()
            border: 0
.base-modal
    max-height: 480px
    padding: 0
.playlist__item-delete-modal
    padding: 32px 28px
    width: 470px
    overflow-y: auto
    max-height: 480px
.select-song
   padding: 15px 20px
   background: #FFFFFF
   border: 1px solid #E7EBFF
   border-radius: 20px
   margin-bottom: 40px
   &__label
    +lg()
        flex: 0 0 24%
    @media screen and (max-width: 1146px)
        flex: initial
    +sm()
        flex: 0 0 100%
   &__song-name
    background: #FFFFFF
    border: 1px solid #E7EBFF
    border-radius: 10px
    padding:0 0 0 20px
    height: 60px
    display: flex
    justify-content: space-between
    align-items: center
    flex: 1
    cursor: pointer
    overflow: hidden
    &>div
        max-width: 80%
    +lg()
        flex: 1
    +sm()
        flex: 0 0 100%
        max-width: 100%
    span
        color: #000000
        font-size: 16px
        text-overflow: ellipsis
        max-width: 100%
        display: block
        white-space: nowrap
        overflow: hidden
   &__wrapper
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 20px
    .btn
        max-width: 196px
        font-size: 14px
        +lg()
            flex: 0 0 25%
        +sm()
            flex: 0 0 100%
        +xs()
            max-width: 100%
.radios
    display: flex
    flex-direction: column
    row-gap: 10px
    margin-bottom: 30px
</style>

<script>
import SearchList from '@/components/search/SearchList.vue'
import SearchForm from '@/components/search/SearchForm.vue'
import BaseButton from "@/components/base1/BaseButton.vue";
import BaseRadio from "@/components/base1/BaseRadio.vue";

export default {
	name: 'Search',
	components: {
		SearchList,
		SearchForm,
        BaseButton,
        BaseRadio
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
            selectedSongs: [],
            showAccountBalanceModal: false,
            showSelectSongModal: false,
            showFilterModal: false,
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
            radiobuttons: [
                { id: "play", title: "Имя вашей песни", value: "song1" },
                { id: "rad", title: "Слишком длинное имя вашей композиции бла бла", value: "song2" },
                { id: "media", title: "Слишком длинное имя вашей композиции бла бла", value: "song3" },
                { id: "label", title: "Слишком длинное имя вашей композиции бла бла", value: "song4" },
                { id: "bloger", title: "Слишком длинное имя вашей композиции бла бла", value: "song5" },
                { id: "producer", title: "Слишком длинное имя вашей композиции бла бла", value: "song6" },
            ],
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
        closeSelectSongModal () {
            this.showSelectSongModal = !this.showSelectSongModal
        },
        closeAccountBalanceModal () {
            this.showAccountBalanceModal = !this.showAccountBalanceModal
        },
        closeFilterModal () {
            this.showFilterModal = false
        },
        save () {
            this.closeSelectSongModal()
            this.showAccountBalanceModal = true
        },
        onChange (value) {
            this.selectedSongs = value
        },
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
            this.closeFilterModal()
		}
	}
}
</script>