import {ref} from 'vue'
import {defineStore, storeToRefs} from 'pinia'
import {Axios} from "@/main";
import router from "@/router";
import {useAuthStore} from "@/stores/AuthStore";
import {computed} from "@vue/runtime-core";

export const useUserStore = defineStore('user', () => {
    // ToDo это моки, убрать когда заработают запррсы
    const curator = ref({
        id: 1,
        price: 999,
        count_recensions: 1112,
        count_playlists: 1110,
        count_reactions: 1124,
        user: {
            "login": "login",
            title: "Electric Funeral Records",
            photo: require('@/assets/img/profile-logo.jpg'),
            description: [
                'Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной музыки по всему миру.',
                'Мы верим в силу музыки и будем сотрудничать с группами и музыкантами, которые вносят свой вклад в наше дело. Мы хотим предоставить публике и художнику уникальный способ восприятия искусства. Мы очень рады сделать этот шаг к организованной, устойчивой, единой сцене и, прежде всего, включенной и без каких-либо предубеждений и различий!'
            ],
            social_vk: "https://vk.com/",
            social_yandex: "https://ya.ru/",
            social_soundcloud: "https://soundcloud.com/",
            social_website: "https://www.mixcloud.com/"
        },
        curator_types: [
            {
                value: 'playlist',
                title: 'Плейлист'
            },
            {
                value: 'media',
                title: 'Медиа'
            },
            {
                value: 'radio',
                title: 'Радио'
            },
            {
                value: 'blogger',
                title: 'Блогер'
            },
            {
                value: 'label',
                title: 'Лейбл'
            },
            {
                value: 'producer',
                title: 'Продюссер'
            }],
        playlists: [
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
        styles: [
            {
                id: 11,
                title: 'Pop',
                subtitle: 'pop1',
                amount: 10,
                type: 'обожаю',
            },
            {
                id: 14,
                title: 'Pop',
                subtitle: 'pop4',
                amount: 8,
                type: 'обожаю',
            },
            {
                id: 24,
                title: 'Elесtroniс',
                subtitle: 'Elесtroniс4',
                amount: 8,
                type: 'обожаю',
            },
            {
                id: 33,
                title: 'Rock/Punk',
                subtitle: 'Rock/Punk3',
                amount: 5,
                type: 'обожаю',
            },
            {
                id: 42,
                title: 'Hip-Hop/Rap',
                subtitle: 'Hip-Hop/Rap2',
                amount: 100,
                type: 'обожаю',
            },
            {
                id: 51,
                title: 'R&B/Soul',
                subtitle: 'R&B/Soul1',
                amount: 10,
                type: 'люблю',
            },
            {
                id: 52,
                title: 'R&B/Soul',
                subtitle: 'R&B/Soul2',
                amount: 100,
                type: 'люблю',
            },
            {
                id: 53,
                title: 'R&B/Soul',
                subtitle: 'R&B/Soul3',
                amount: 5,
                type: 'люблю',
            },
            {
                id: 71,
                title: 'World',
                subtitle: 'World1',
                amount: 10,
                type: 'люблю',
            },
            {
                id: 84,
                title: 'Classical/Instrumental',
                subtitle: 'Classical/Instrumental4',
                amount: 8,
                type: 'люблю',
            },
            {
                id: 93,
                title: 'Reggae',
                subtitle: 'Reggae3',
                amount: 5,
                type: 'не присылать',
            },
            {
                id: 104,
                title: 'Popular Music',
                subtitle: 'Popular Music4',
                amount: 8,
                type: 'не присылать',
            }
        ]
    })

    const artist = ref({
        img: require("@/assets/images/deafheaven.png"),
        name: "Deafheaven",
        price: 123,
        desc: ["Блэк-метал-группа из Сан-Франциско, основанная в 2010 году. Группа была создана двумя музыкантами — вокалистом Джорджем Кларком и гитаристом Керри МакКоем, которые вместе записали и самостоятельно выпустили демо-альбом. После выпуска демо в группу пришли три новых участника и Deafheaven начали гастролировать. В конце 2010 года группа подписала контракт с Deathwish Inc., а позже выпустила свой дебютный альбом Roads to Judah в апреле 2011 года. Они создали уникальный стиль, сочетающий в себе блэк-метал, шугейз и пост-рок, позже названный рецензентами «блэкгейз»."],
    })

    const auth = useAuthStore()
    const {userType} = storeToRefs(auth)

    const profile = ref({})
    const musicStyles = ref([
        {
            id: 1,
            title: 'Pop',
            sublist: [
                {
                    id: 11,
                    title: 'pop1',
                    amount: 10
                },
                {
                    id: 12,
                    title: 'pop2',
                    amount: 100
                },
                {
                    id: 13,
                    title: 'pop3',
                    amount: 5
                },
                {
                    id: 14,
                    title: 'pop4',
                    amount: 8
                }
            ]
        },
        {
            id: 2,
            title: 'Elесtroniс',
            sublist: [
                {
                    id: 21,
                    title: 'Elесtroniс1',
                    amount: 10
                },
                {
                    id: 22,
                    title: 'Elесtroniс2',
                    amount: 100
                },
                {
                    id: 23,
                    title: 'Elесtroniс3',
                    amount: 5
                },
                {
                    id: 24,
                    title: 'Elесtroniс4',
                    amount: 8
                }
            ]
        },
        {
            id: 3,
            title: 'Rock/Punk',
            sublist: [
                {
                    id: 31,
                    title: 'Rock/Punk1',
                    amount: 10
                },
                {
                    id: 32,
                    title: 'Rock/Punk2',
                    amount: 100
                },
                {
                    id: 33,
                    title: 'Rock/Punk3',
                    amount: 5
                },
                {
                    id: 34,
                    title: 'Rock/Punk4',
                    amount: 8
                }
            ]
        },
        {
            id: 4,
            title: 'Hip-Hop/Rap',
            sublist: [
                {
                    id: 41,
                    title: 'Hip-Hop/Rap1',
                    amount: 10
                },
                {
                    id: 42,
                    title: 'Hip-Hop/Rap2',
                    amount: 100
                },
                {
                    id: 43,
                    title: 'Hip-Hop/Rap3',
                    amount: 5
                },
                {
                    id: 44,
                    title: 'Hip-Hop/Rap4',
                    amount: 8
                }
            ]
        },
        {
            id: 5,
            title: 'R&B/Soul',
            sublist: [
                {
                    id: 51,
                    title: 'R&B/Soul1',
                    amount: 10
                },
                {
                    id: 52,
                    title: 'R&B/Soul2',
                    amount: 100
                },
                {
                    id: 53,
                    title: 'R&B/Soul3',
                    amount: 5
                },
                {
                    id: 54,
                    title: 'R&B/Soul4',
                    amount: 8
                }
            ]
        },
        {
            id: 6,
            title: 'Folk/Acoustic',
            sublist: [
                {
                    id: 61,
                    title: 'Folk/Acoustic1',
                    amount: 10
                },
                {
                    id: 62,
                    title: 'Folk/Acoustic2',
                    amount: 100
                },
                {
                    id: 63,
                    title: 'Folk/Acoustic3',
                    amount: 5
                },
                {
                    id: 64,
                    title: 'Folk/Acoustic4',
                    amount: 8
                }
            ]
        },
        {
            id: 7,
            title: 'World',
            sublist: [
                {
                    id: 71,
                    title: 'World1',
                    amount: 10
                },
                {
                    id: 72,
                    title: 'World2',
                    amount: 100
                },
                {
                    id: 73,
                    title: 'World3',
                    amount: 5
                },
                {
                    id: 74,
                    title: 'World4',
                    amount: 8
                }
            ]
        },
        {
            id: 8,
            title: 'Classical/Instrumental',
            sublist: [
                {
                    id: 81,
                    title: 'Classical/Instrumental1',
                    amount: 10
                },
                {
                    id: 82,
                    title: 'Classical/Instrumental2',
                    amount: 100
                },
                {
                    id: 83,
                    title: 'Classical/Instrumental3',
                    amount: 5
                },
                {
                    id: 84,
                    title: 'Classical/Instrumental4',
                    amount: 8
                }
            ]
        },
        {
            id: 9,
            title: 'Reggae',
            sublist: [
                {
                    id: 91,
                    title: 'Reggae1',
                    amount: 10
                },
                {
                    id: 92,
                    title: 'Reggae2',
                    amount: 100
                },
                {
                    id: 93,
                    title: 'Reggae3',
                    amount: 5
                },
                {
                    id: 94,
                    title: 'Reggae4',
                    amount: 8
                }
            ]
        },
        {
            id: 10,
            title: 'Popular Music',
            sublist: [
                {
                    id: 101,
                    title: 'Popular Music1',
                    amount: 10
                },
                {
                    id: 102,
                    title: 'Popular Music2',
                    amount: 100
                },
                {
                    id: 103,
                    title: 'Popular Music3',
                    amount: 5
                },
                {
                    id: 104,
                    title: 'Popular Music4',
                    amount: 8
                }
            ]
        },

    ])
    const musicStylesByPreferences = ref(curator.value.styles)

    const musicStylesList = ref([])

    const getMusicStyles = (subtitle) => {
        return musicStylesByPreferences.value.filter(item => item.type === subtitle)
    }

    const adoredStyles = computed(() => {
        return getMusicStyles('обожаю')
    })
    const likedStyles = computed(() => {
        return getMusicStyles('люблю')
    })
    const hatedStyles = computed(() => {
        return getMusicStyles('не присылать')
    })

    const removeStyleItem = (index) => {
        console.log(index);
        musicStylesList.value = musicStylesByPreferences.value.splice(index, 1)
        console.log(musicStylesList.value);
    }

    const getMusicStylesList = (subtitle) => {
        musicStylesList.value = musicStylesByPreferences.value.filter(item => item.type === subtitle)
    }

    const getUserInfo = async () => {
        if (userType.value === 'curator') {
            profile.value = curator.value

            try {
                await Axios.post('curator/user/')
                    .then((response) => {
                        console.log(response.data.data);
                    })
                    .catch(error => {
                        console.log(error.response.statusText);
                    });
            } catch (error) {
                console.log(error.response);
            }
        } else if (userType.value === 'artist') {
            profile.value = artist.value

            try {
                await Axios.post('artist/user/{{user_id}}/')
                    .then((response) => {
                        console.log(response.data.data);
                    })
                    .catch(error => {
                        console.log(error.response.statusText);
                    });
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    const updateUserPrice = async (value) => {
        try {
            await Axios.patch('curator/update/', {
                price: value
            })
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response.statusText);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const updateUserNetworks = async (list) => {
        try {
            await Axios.patch('curator/update/networks', list)
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response.statusText);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const createNewUserPlaylist = async (link) => {
        curator.value.playlists.unshift({
            link: '',
            img: '',
            name: 'Информация обновляется...',
            text: ''
        })
        try {
            await Axios.post('curator/playlists/create/', link)
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response.statusText);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const updateUserStyles = async (list) => {
        curator.value.styles.push(list)
        getMusicStyles('обожаю')

        try {
            await Axios.patch('curator/styles/update/', list)
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response.statusText);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    return {
        profile,
        musicStyles,
        musicStylesByPreferences,
        getMusicStyles,
        musicStylesList,
        getMusicStylesList,
        removeStyleItem,
        getUserInfo,
        updateUserPrice,
        updateUserNetworks,
        createNewUserPlaylist,
        updateUserStyles,
        adoredStyles,
        likedStyles,
        hatedStyles
    }
})
