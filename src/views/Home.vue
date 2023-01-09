<template>
  <component :is="currentForm" />
</template>

<script>
import Login from "@/components/authorization/Login";
import MainForm from "@/components/authorization/MainForm";
import RegistrationArtist from "@/components/authorization/RegistrationArtist";
import RegistrationCurator from "@/components/authorization/RegistrationCurator";
import RecoverPassword from "@/components/authorization/RecoverPassword";
import SelectArtistAccount from "@/components/authorization/SelectArtistAccount";
import SetArtistNew from "@/components/authorization/SetArtistNew";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default {
  components: {
    Login,
    RegistrationArtist,
    RegistrationCurator,
    RecoverPassword,
    SelectArtistAccount,
    SetArtistNew,
    MainForm
  },
  setup() {
    const auth = useAuthStore()
    const {currentForm} = storeToRefs(auth)

    return {
      currentForm,
    }

  }
}

</script>

<style scoped lang="sass">

</style>
