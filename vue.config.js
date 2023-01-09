const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/variables.sass"
          @import "@/assets/sass/components/_media.sass"
          @import "@/assets/sass/components/_mixins.sass"
        `,
      },
    },
  },

  // publicPath: process.env.NODE_ENV === 'production' ? '/music-app/dist/' : '/',
});
