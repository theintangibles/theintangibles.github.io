<template lang='pug'>
  #intangibles-contact
    section
      header
        ContactX
      .content
        a.newyork(href='mailto:newyork@theintangibles.com')
          NewYork
        a.losangeles(href='mailto:losangeles@theintangibles.com')
          LosAngeles
        a.london(href='mailto:london@theintangibles.com')
          London
        a.hongkong(href='mailto:hongkong@theintangibles.com')
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
<style lang='sass'>
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
  
  header
    margin-bottom: 7vh
    text-align: center
    svg
      height: 18px

  .content
    display: flex
    justify-content: space-around
    margin-bottom: 10vh
    a
      text-align: center
      &:hover
        svg
          path 
            fill: #624c79
      &.newyork
        svg
          path
            animation-delay: 0.5s
      &.losangeles
        svg
          path
            animation-delay: 1s
      &.london
        svg
          path
            animation-delay: 1.5s
      &.hongkong
        svg
          path
            animation-delay: 2s
      svg
        max-height: 17px
  footer
    display: flex
    justify-content: center
    a
      text-align: center
      svg
        width: 70%
      &.home
        svg
          path
            animation-delay: 2.5s
      &:hover
        svg
          path 
            fill: white
  svg
    path
      transition: all .2s linear
      opacity: 0
      animation: fadein 1s
      animation-fill-mode: forwards

@media screen and (max-width: 768px)
  // html, body, #__nuxt, #__layout, section
    background: #070606
    height: 100vh
  #intangibles-contact
    display: block !important
    min-height: 100vh
    min-height: -webkit-fill-available
  section
    background: #070606
    height: 100vh  
    padding: 15vh 0
  header
    height: 16.6%
    margin-bottom: 0px !important
    display: flex
    justify-content: center
    align-items: center
  .content
    height: 66.7%
    margin-bottom: 0px !important
    flex-direction: column
    svg
      height: 15px
  footer
    height: 16.6%
    display: flex
    justify-content: center
    align-items: center
    
</style>
