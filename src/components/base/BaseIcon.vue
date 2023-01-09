<template>
  <svg
      v-if="name === 'profile'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66666C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M10 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 10 2.5C8.15905 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15905 9.16667 10 9.16667Z"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>
  <svg
      v-else-if="name === 'review'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M11.6667 1.66663H5C4.55797 1.66663 4.13405 1.84222 3.82149 2.15478C3.50893 2.46734 3.33333 2.89127 3.33333 3.33329V16.6666C3.33333 17.1087 3.50893 17.5326 3.82149 17.8451C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8451C16.4911 17.5326 16.6667 17.1087 16.6667 16.6666V6.66663L11.6667 1.66663Z"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M13.3333 14.1666H6.66667"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M13.3333 10.8334H6.66667"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M8.33333 7.5H7.5H6.66667"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M11.6667 1.66663V6.66663H16.6667"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>
  <svg
      v-else-if="name === 'wallet'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M2.5 5.33337V14.6667C2.5 15.7713 3.39543 16.6667 4.5 16.6667H15.5C16.6046 16.6667 17.5 15.7713 17.5 14.6667V8.66671C17.5 7.56214 16.6046 6.66671 15.5 6.66671H13.75V5.33337C13.75 4.2288 12.8546 3.33337 11.75 3.33337H4.5C3.39543 3.33337 2.5 4.2288 2.5 5.33337Z"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
    />
    <path
        d="M2.5 5V5C2.5 5.92047 3.24619 6.66667 4.16667 6.66667H13.75"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
    />
    <path
        d="M17.5 10H15.8333C14.9129 10 14.1667 10.7462 14.1667 11.6667V11.6667C14.1667 12.5871 14.9129 13.3333 15.8333 13.3333H17.5"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
    />
  </svg>
  <svg
      v-else-if="name === 'settings'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_831)">
      <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          :stroke="fill || '#ADADC0'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
      />
      <path
          d="M16.1667 12.5C16.0557 12.7514 16.0226 13.0302 16.0717 13.3005C16.1207 13.5709 16.2495 13.8203 16.4417 14.0167L16.4917 14.0667C16.6466 14.2215 16.7696 14.4053 16.8534 14.6076C16.9373 14.81 16.9805 15.0268 16.9805 15.2459C16.9805 15.4649 16.9373 15.6818 16.8534 15.8841C16.7696 16.0864 16.6466 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9507 16.7868C15.7484 16.8707 15.5315 16.9139 15.3125 16.9139C15.0935 16.9139 14.8766 16.8707 14.6743 16.7868C14.4719 16.7029 14.2881 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.0541 13.3672 16.005C13.0968 15.956 12.818 15.9891 12.5667 16.1C12.3202 16.2057 12.11 16.3811 11.9619 16.6047C11.8139 16.8282 11.7344 17.0902 11.7333 17.3584V17.5C11.7333 17.9421 11.5577 18.366 11.2452 18.6785C10.9326 18.9911 10.5087 19.1667 10.0667 19.1667C9.62463 19.1667 9.20071 18.9911 8.88815 18.6785C8.57559 18.366 8.39999 17.9421 8.39999 17.5V17.425C8.39354 17.1492 8.30426 16.8817 8.14375 16.6573C7.98325 16.4329 7.75894 16.2619 7.49999 16.1667C7.24865 16.0558 6.96983 16.0227 6.6995 16.0717C6.42917 16.1207 6.17973 16.2496 5.98333 16.4417L5.93333 16.4917C5.77854 16.6467 5.59473 16.7696 5.39239 16.8535C5.19006 16.9373 4.97319 16.9805 4.75416 16.9805C4.53514 16.9805 4.31826 16.9373 4.11593 16.8535C3.9136 16.7696 3.72978 16.6467 3.57499 16.4917C3.42003 16.3369 3.2971 16.1531 3.21323 15.9508C3.12935 15.7484 3.08618 15.5316 3.08618 15.3125C3.08618 15.0935 3.12935 14.8766 3.21323 14.6743C3.2971 14.472 3.42003 14.2882 3.57499 14.1334L3.62499 14.0834C3.81711 13.887 3.94598 13.6375 3.995 13.3672C4.04401 13.0969 4.01092 12.8181 3.89999 12.5667C3.79436 12.3202 3.61896 12.11 3.39538 11.962C3.17181 11.8139 2.90982 11.7344 2.64166 11.7334H2.49999C2.05797 11.7334 1.63404 11.5578 1.32148 11.2452C1.00892 10.9327 0.833328 10.5087 0.833328 10.0667C0.833328 9.62468 1.00892 9.20076 1.32148 8.8882C1.63404 8.57563 2.05797 8.40004 2.49999 8.40004H2.57499C2.85082 8.39359 3.11833 8.30431 3.34274 8.1438C3.56716 7.98329 3.73809 7.75899 3.83333 7.50004C3.94426 7.24869 3.97735 6.96988 3.92833 6.69955C3.87932 6.42922 3.75044 6.17977 3.55833 5.98337L3.50833 5.93337C3.35337 5.77858 3.23044 5.59477 3.14656 5.39244C3.06269 5.19011 3.01952 4.97323 3.01952 4.75421C3.01952 4.53518 3.06269 4.3183 3.14656 4.11597C3.23044 3.91364 3.35337 3.72983 3.50833 3.57504C3.66312 3.42008 3.84693 3.29715 4.04926 3.21327C4.25159 3.1294 4.46847 3.08623 4.68749 3.08623C4.90652 3.08623 5.1234 3.1294 5.32573 3.21327C5.52806 3.29715 5.71187 3.42008 5.86666 3.57504L5.91666 3.62504C6.11306 3.81715 6.36251 3.94603 6.63284 3.99504C6.90317 4.04406 7.18198 4.01097 7.43333 3.90004H7.49999C7.74647 3.7944 7.95668 3.619 8.10474 3.39543C8.2528 3.17185 8.33226 2.90986 8.33333 2.64171V2.50004C8.33333 2.05801 8.50892 1.63409 8.82148 1.32153C9.13404 1.00897 9.55797 0.833374 9.99999 0.833374C10.442 0.833374 10.8659 1.00897 11.1785 1.32153C11.4911 1.63409 11.6667 2.05801 11.6667 2.50004V2.57504C11.6677 2.8432 11.7472 3.10519 11.8952 3.32876C12.0433 3.55234 12.2535 3.72774 12.5 3.83337C12.7513 3.9443 13.0302 3.97739 13.3005 3.92838C13.5708 3.87936 13.8203 3.75049 14.0167 3.55837L14.0667 3.50837C14.2214 3.35341 14.4053 3.23048 14.6076 3.14661C14.8099 3.06273 15.0268 3.01956 15.2458 3.01956C15.4649 3.01956 15.6817 3.06273 15.8841 3.14661C16.0864 3.23048 16.2702 3.35341 16.425 3.50837C16.58 3.66316 16.7029 3.84698 16.7868 4.04931C16.8706 4.25164 16.9138 4.46851 16.9138 4.68754C16.9138 4.90657 16.8706 5.12344 16.7868 5.32577C16.7029 5.5281 16.58 5.71192 16.425 5.86671L16.375 5.91671C16.1829 6.11311 16.054 6.36255 16.005 6.63288C15.956 6.90321 15.9891 7.18203 16.1 7.43337V7.50004C16.2056 7.74651 16.381 7.95672 16.6046 8.10478C16.8282 8.25285 17.0902 8.3323 17.3583 8.33337H17.5C17.942 8.33337 18.3659 8.50897 18.6785 8.82153C18.9911 9.13409 19.1667 9.55801 19.1667 10C19.1667 10.4421 18.9911 10.866 18.6785 11.1786C18.3659 11.4911 17.942 11.6667 17.5 11.6667H17.425C17.1568 11.6678 16.8948 11.7472 16.6713 11.8953C16.4477 12.0434 16.2723 12.2536 16.1667 12.5V12.5Z"
          :stroke="fill || '#ADADC0'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_831">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  <svg
      v-else-if="name === 'logout'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M13.3333 14.1667L17.5 10L13.3333 5.83337"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M17.5 10H7.5"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
        :stroke="fill || '#ADADC0'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>
  <svg
      v-else-if="name === 'chevron-small'"
      :width="width || 16"
      :height="height || 16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M12 6L8 10L4 6"
        :stroke="fill || 'black'"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>
  <svg
      v-else-if="name === 'chevron-large'"
      :width="width || 24"
      :height="height || 24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M15 18L9 12L15 6"
        :stroke="fill || 'black'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>
  <svg
      v-else-if="name === 'burger'"
      :width="width || 24"
      :height="height || 18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="1" y1="1" x2="23" y2="1" stroke="#2A2A2D" stroke-width="2" stroke-linecap="round"/>
    <line x1="13" y1="9" x2="23" y2="9" stroke="#2A2A2D" stroke-width="2" stroke-linecap="round"/>
    <line x1="1" y1="17" x2="23" y2="17" stroke="#2A2A2D" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <svg
      v-else-if="name === 'login'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.3335 14.1666L12.5002 9.99992L8.3335 5.83325" stroke="#2A2A2D" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M12.5 10H2.5" stroke="#2A2A2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path
        d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
        stroke="#2A2A2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg
      v-else-if="name === 'bell'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M5.40124 6.73131C5.33238 4.05771 7.40939 1.6665 10.0839 1.6665C12.7 1.6665 14.7133 3.95213 14.6117 6.56625C14.5939 7.02458 14.5833 7.48048 14.5833 7.9165C14.5833 10.6508 17.5 14.1665 17.5 14.1665H2.5C2.5 14.1665 5.41667 11.4322 5.41667 7.9165C5.41667 7.51 5.41109 7.11392 5.40124 6.73131Z"
        stroke="#ADADC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path
        d="M8.3335 16.6665C8.74066 17.1775 9.33641 17.4998 10.0002 17.4998C10.6639 17.4998 11.2597 17.1775 11.6668 16.6665"
        stroke="#ADADC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg
      v-else-if="name === 'search'"
      :width="width || 20"
      :height="height || 20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.4998 17.4998L11.6665 11.6665" stroke="#ADADC0" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
    <circle cx="7.50016" cy="7.50016" r="5.66667" stroke="#ADADC0" stroke-width="2"/>
  </svg>
  <svg
      v-else-if="name === 'back'"
      :width="width || 26"
      :height="height || 26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 6L5 13L12 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 13L21 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="25.5" y="25.5" width="25" height="25" rx="3.5" transform="rotate(180 25.5 25.5)" stroke="white"/>
  </svg>
  <svg
      v-else-if="name === 'close'"
      :width="width || 40"
      :height="height || 40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30 10L10 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 10L30 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg
      v-else-if="name === 'close-gray'"
      :width="width || 40"
      :height="height || 40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30 10L10 30" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 10L30 30" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg
      v-else-if="name === 'backModal'"
      :width="width || 40"
      :height="height || 40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <rect x="-0.5" y="0.5" width="39" height="39" rx="6.5" transform="matrix(-1 0 0 1 39 0)" fill="white"/>
    <path d="M22 26L16 20L22 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-0.5" y="0.5" width="39" height="39" rx="6.5" transform="matrix(-1 0 0 1 39 0)" stroke="#D1D5EF"/>
  </svg>


</template>

<script>
export default {
  props: {
    name: String,
    width: [Number, String],
    height: [Number, String],
    fill: String,
  },
};
</script>

<style>
</style>