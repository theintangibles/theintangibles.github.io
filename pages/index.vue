<template lang='pug'>
  #intangibles-index
    .container
      a.logo(href='/contact')
        TheIntangibles
</template>

<script>
import The from '~/components/The.vue'
import Intangibles from '~/components/Intangibles.vue'
import Tm from '~/components/Tm.vue'
import TheIntangibles from '~/components/TheIntangibles.vue'
import Launching2023 from '~/components/Launching2023.vue'

export default {
  name: 'IndexPage',
  components: { The, Intangibles, Tm, TheIntangibles, Launching2023 },
  head: {
    title: 'The Intangibles',
    meta: [
      { name: 'twitter:title', content: 'The Intangibles' },
      { property: 'og:title', content: 'The Intangibles' },
    ],
  },
}
</script>
<style lang='sass' scoped>
#intangibles-index
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  .container
    width: 40%
    max-width: 800px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .logo
    width: 100%
    margin-bottom: 20%
    &:hover
      ::v-deep svg
        path
          fill: #A191B2
  .launching
    width: 45%
    svg
      animation-delay: 1s
    &:hover
      ::v-deep svg
        path
          fill: white
  // section
    a
      display: flex
      justify-content: center
      align-items: center
        
      &:hover
        ::v-deep g#intangibles
          path
            fill: #A191B2
    .launching
      svg
        width: 50%
        opacity: 0
        animation: fadein 2s
        animation-fill-mode: forwards
        animation-delay: 0.5s
        ::v-deep path
          transition: all .2s linear
          fill: #A191B2
      &:hover
        ::v-deep svg
          path
            fill: white
    svg
      opacity: 0
      animation: fadein 3s
      animation-fill-mode: forwards
      ::v-deep g
        path
          transition: all .2s linear
  @media screen and (max-width: 768px)
    .container
      align-items: center
      width: 80%
      max-width: 500px
</style>
