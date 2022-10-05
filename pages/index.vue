<template lang='pug'>
  #intangibles-index
    section
      a.logo(href='/contact')
        TheIntangibles
      a.launching(href='/contact')
        Launching2023
</template>

<script>
import The from '~/components/The.vue'
import Intangibles from '~/components/Intangibles.vue'
import Tm from '~/components/Tm.vue'
import TheIntangibles from '~/components/TheIntangibles.vue'
import Launching2023 from '~/components/Launching2023.vue'

export default {
  name: 'IndexPage',
  components: { The, Intangibles, Tm, TheIntangibles, Launching2023 }
}
</script>
<style lang='sass' scoped>
#intangibles-index
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  section
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
      width: 70%
      opacity: 0
      animation: fadein 3s
      animation-fill-mode: forwards
      ::v-deep g
        path
          transition: all .2s linear
    .logo
      margin-bottom: 4vh
  @media screen and (max-width: 768px)
    section
      align-items: center
      svg
        width: 80%
</style>
