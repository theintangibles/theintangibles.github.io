<template lang='pug'>
  #intangibles-contact
    .container
      header
        ContactX
      .cities
        a.newyork(href='mailto:info.ny@theintangibles.com')
          NewYork
        a.losangeles(href='mailto:info.la@theintangibles.com')
          LosAngeles
        a.london(href='mailto:info.uk@theintangibles.com')
          London
        a.hongkong(href='mailto:info.hk@theintangibles.com')
          HongKong
      footer
        a.home(href='/')
          HomeButton
</template>

<script>
import ContactX from '~/components/ContactX.vue'
import NewYork from '~/components/NewYork.vue'
import LosAngeles from '~/components/LosAngeles.vue'
import London from '~/components/London.vue'
import HongKong from '~/components/HongKong.vue'
import HomeButton from '~/components/HomeButton.vue'

export default {
  name: 'Contact',
  components: { ContactX, NewYork, LosAngeles, London, HongKong, HomeButton },
  mounted() {
    window.addEventListener('resize', this.appHeight)
    this.appHeight()
  },
  methods: {
    appHeight() {
     const doc = document.documentElement
     doc.style.setProperty('—app-height', `${window.innerHeight}px`)
   },
  },
}
</script>
<style lang='sass' scoped>
:root
  —app-height: 100%
body
 height: 100vh
 height: var( —app-height)
  
#intangibles-contact
  height: 90vh
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  .container
    width: 70%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  
  header
    margin-bottom: 10%
    text-align: center
    svg
      width: 50%
  .cities
    display: flex
    justify-content: space-around
    margin-bottom: 10%
    width: 100%
    a
      text-align: center
      &:hover
        ::v-deep svg
          path 
            fill: #624c79
      &.newyork
        ::v-deep svg
          animation-delay: 0.5s
      &.losangeles
        ::v-deep svg
          animation-delay: 1s
      &.london
        ::v-deep svg
          animation-delay: 1.5s
      &.hongkong
        ::v-deep svg
          animation-delay: 2s
      svg
        height: 18.5px
  footer
    display: flex
    justify-content: center
    a
      text-align: center
      max-width: 46px
      // background: red
      svg
        // width: 90%
        animation-delay: 2.2s
      &:hover
        ::v-deep svg
          path 
            fill: white
  ::v-deep svg
    path
      transition: all .2s linear
      opacity: 0
      animation: fadein 1s
      animation-fill-mode: forwards

@media screen and (max-width: 768px)
  #intangibles-contact
    min-height: 100vh
    min-height: -webkit-fill-available
  .container
    height: 80%
    display: flex
    align-items: center
    justify-content: center
    height: -webkit-fill-available
  .cities
    height: 50vh
    flex-direction: column
    a
      width: 100% !important
      svg
        height: 15px !important
  footer
    display: flex
    justify-content: center
    align-items: center
    svg
      height: 30px !important
    
</style>
