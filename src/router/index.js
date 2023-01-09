import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile";
import ProfileEdit from "../views/ProfileEdit";
import ProfileUser from "../views/ProfileUser";
import Search from "../views/Search";
import Home from "../views/Home";
import HomeView from "../views/HomeView.vue";
import ReviewTrackView from "../views/ReviewTrackView.vue";
import ViewWalletCurator from "@/views/ViewWalletCurator";
import ViewWalletArtist from "@/views/ViewWalletArtist";
// import VLoginArtist from "@/views/VLoginArtist";
// import VLoginArtistAccount from "@/components/authorization/SelectArtistAccount";
// import VLoginArtistNew from "@/components/authorization/VLoginArtistNew";
// import VLoginCurator from "@/views/VLoginCurator";
// import VRegistrationCurator from "@/components/authorization/RegistrationCurator";
// import VRegistrationArtist from "@/components/authorization/RegistrationArtist";
import VArtistMusic from "@/views/VArtistMusic";
import Settings from "@/views/Settings";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "MainLayout" },
    component: Home,
  },

  {
    path: "/profile",
    name: "profile",
    meta: { layout: "MainLayout" },
    component: Profile,
  },
  {
    path: "/profile/edit",
    name: "profile edit",
    meta: { layout: "MainLayout" },
    component: ProfileEdit,
  },
  {
    path: "/profile/user-id",
    name: "User profile",
    meta: { layout: "MainLayout" },
    component: ProfileUser,
  },
  {
    path: "/search",
    name: "Search",
    meta: { layout: "MainLayout" },
    component: Search,
  },
  {
    path: "/settings",
    name: "settings",
    meta: { layout: "MainLayout" },
    component: Settings,
  },
  {
    path: "/reviews",
    name: "Reviews",
    meta: { layout: "MainLayout" },
    component: HomeView,
  },
  {
    path: "/review-track/:id",
    meta: { layout: "MainLayout" },
    name: "review-track",
    component: ReviewTrackView,
  },
  {
    path: "/wallet/curator",
    name: "wallet-curator",
    meta: { layout: "MainLayout" },
    component: ViewWalletCurator,
  },
  {
    path: "/wallet/artist",
    name: "wallet-artist",
    meta: { layout: "MainLayout" },
    component: ViewWalletArtist,
  },
  // {
  //   path: "/registration/curator",
  //   name: "VRegistrationCurator",
  //   meta: { layout: "MainLayout" },
  //   component: VRegistrationCurator,
  // },
  // {
  //   path: "/login/curator",
  //   name: "VLoginCurator",
  //   meta: { layout: "MainLayout" },
  //   component: VLoginCurator,
  // },
  // {
  //   path: "/registration/artist",
  //   name: "VRegistrationArtist",
  //   meta: { layout: "MainLayout" },
  //   component: VRegistrationArtist,
  // },
  // {
  //   path: "/login/artist",
  //   name: "VLoginArtist",
  //   meta: { layout: "MainLayout" },
  //   component: VLoginArtist,
  // },
  // {
  //   path: "/login/accounts",
  //   name: "VLoginArtistAccount",
  //   meta: { layout: "MainLayout" },
  //   component: VLoginArtistAccount,
  // },
  // {
  //   path: "/add_artist",
  //   name: "VLoginArtistNew",
  //   meta: { layout: "MainLayout" },
  //   component: VLoginArtistNew,
  // },
  {
    path: "/artist/music",
    name: "VArtistMusic",
    meta: { layout: "MainLayout" },
    component: VArtistMusic,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
