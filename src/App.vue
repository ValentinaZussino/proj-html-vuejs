<template>
  <HeaderComponent/>
  <main>
    <JumboComponent/>
    MAIN MAIN MAIN
  </main>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import JumboComponent from './components/JumboComponent.vue';

  export default {
    components: { HeaderComponent, FooterComponent, JumboComponent }
}
</script>

<style lang="scss" scoped>


</style>