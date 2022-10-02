<template lang='pug'>
  #intangibles-index
    section
      a(href='/contact')
        TheIntangibles
</template>

<script>
import The from '~/components/The.vue'
import Intangibles from '~/components/Intangibles.vue'
import Tm from '~/components/Tm.vue'
import TheIntangibles from '~/components/TheIntangibles.vue'

export default {
  name: 'IndexPage',
  components: { The, Intangibles, Tm, TheIntangibles }
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
    display: flex
    justify-content: center
    align-items: center
    a
      display: flex
      justify-content: center
      align-items: center
    svg
      width: 70%
      opacity: 0
      animation: fadein 3s
      animation-fill-mode: forwards
      g
        path
          transition: all .2s linear
      // &:hover
        g#intangibles
          path
            fill: #624c79
  @media screen and (max-width: 768px)
    section
      align-items: center
      svg
        width: 80%
</style>
