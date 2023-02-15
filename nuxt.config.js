// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  plugins:['@/plugins/antd', { ssr: true, src:'@/plugins/store'}],
  target: 'static',
  ssr: true
})
