<template>
  <HeaderComponent/>
  <main>
    <JumboComponent/>
    <FeaturedProducts/>
    <DividerCollections/>
    <BestSellers/>
    <NewArrivals/>
    <OurBlog/>
  </main>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import FeaturedProducts from './components/FeaturedProducts.vue';
import BestSellers from './components/BestSellers.vue';
import NewArrivals from './components/NewArrivals.vue';
import OurBlog from './components/OurBlog.vue';
import DividerCollections from './components/DividerCollections.vue';

  export default {
    components: { HeaderComponent, FooterComponent, JumboComponent, FeaturedProducts, BestSellers, NewArrivals, OurBlog, DividerCollections },
    data(){
      return {
      }
    }
}
</script>

<style lang="scss" scoped>


</style>