import {ref} from 'vue'
import {defineStore} from 'pinia'
import {Axios} from "@/main";
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {
    const currentForm = ref('MainForm')
    const signInRequest = ref(null)
    const registrationArtistRequest = ref(null)
    const registrationCuratorRequest = ref(null)
    const recoverPasswordRequest = ref(null)
    const newArtistRequest = ref(null)
    const isSignIn = ref(JSON.parse(localStorage.getItem('isSignIn')) || false)
    const isRegisteredArtist = ref(false)
    const isRegisteredCurator = ref(false)
    const isRecoverPassword = ref(false)
    const userType = ref(localStorage.getItem('userType'))
    const isEdit = ref(JSON.parse(localStorage.getItem('isEdit')) || false)

    const setCurrentForm = (form) => {
        currentForm.value = form
    }

    const setUserType = (type, edit) => {
        userType.value = type
        isEdit.value = edit

        localStorage.setItem('userType', userType.value)
        localStorage.setItem('isEdit', isEdit.value)
    }

    const setSignInRequest = async (signInFormData) => {
        signInRequest.value = {
            email: signInFormData.email,
            password: signInFormData.password,
        }

        // ToDo убрать когда будет работать запрос
        if(userType.value === 'artist') {
            setCurrentForm('SelectArtistAccount')

            isSignIn.value = true
            localStorage.setItem('isSignIn', isSignIn.value)
        } else if(userType.value === 'curator') {
            router.push('/profile/edit')

            isSignIn.value = true
            localStorage.setItem('isSignIn', isSignIn.value)
        } else if(userType.value === '') {
            router.push('/profile')

            isSignIn.value = false
            localStorage.setItem('isSignIn', isSignIn.value)
        }

        try {
            await Axios.post('login/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setRegistrationArtistRequest = async (registrationArtistFormData) => {
        registrationArtistRequest.value = {
            email: registrationArtistFormData.email,
            password: registrationArtistFormData.password,
        }

        // ToDo убрать когда будет работать запрос
        console.log(registrationArtistRequest.value);
        isRegisteredArtist.value = true

        try {
            await Axios.post('artist/registration/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setRegistrationCuratorRequest = async (registrationCuratorFormData) => {
        registrationCuratorRequest.value = {
            type: registrationCuratorFormData.type,
            email: registrationCuratorFormData.email,
            password: registrationCuratorFormData.password,
            photo: registrationCuratorFormData.photo,
            login: registrationCuratorFormData.login,
            description: registrationCuratorFormData.description
        }

        // ToDo убрать когда будет работать запрос
        console.log(registrationCuratorRequest.value);
        isRegisteredCurator.value = true

        try {
            await Axios.post('curator/registration/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setRecoverPasswordRequest = async (recoverPasswordFormData) => {
        recoverPasswordRequest.value = {
            email: recoverPasswordFormData.email,
        }

        // ToDo убрать когда будет работать запрос
        console.log(recoverPasswordRequest.value);
        isRecoverPassword.value = true

        try {
            await Axios.post('password/recover/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const setNewArtist = async (newArtistFormData) => {
        newArtistRequest.value = {
            login: newArtistFormData.login,
            photo: newArtistFormData.photo,
            description: newArtistFormData.description,
        }

        // ToDo убрать когда будет работать запрос
        console.log(newArtistRequest.value);

        try {
            await Axios.post('artist/user/add/')
                .then((response) => {
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const logout = () => {
        isSignIn.value = false
        isEdit.value = false
        userType.value = ''

        localStorage.setItem('isSignIn', false)
        localStorage.setItem('isEdit', false)
        localStorage.setItem('userType', '')
        router.push('/')
    }

    return {
        userType,
        currentForm,
        setCurrentForm,
        signInRequest,
        registrationArtistRequest,
        registrationCuratorRequest,
        recoverPasswordRequest,
        newArtistRequest,
        setSignInRequest,
        setRegistrationArtistRequest,
        setRegistrationCuratorRequest,
        setRecoverPasswordRequest,
        setNewArtist,
        isSignIn,
        isRegisteredArtist,
        isRegisteredCurator,
        isRecoverPassword,
        logout,
        setUserType,
        isEdit
    }
})
