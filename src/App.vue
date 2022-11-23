<template>
  <HeaderComponent/>
  <main>
    <JumboComponent/>
    <FeaturedProducts/>
    <DividerCollections/>
    <BestSellers/>
    <DividerOffers/>
    <NewArrivals/>
    <DividerTestimonials/>
    <OurBlog/>
    <OverviewSection/>
    <BrandsSection/>
    <SubscribeComponent/>
  </main>
  <FooterComponent/>
  <ToTop/>
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
import DividerOffers from './components/DividerOffers.vue';
import DividerTestimonials from './components/DividerTestimonials.vue';
import OverviewSection from './components/OverviewSection.vue';
import BrandsSection from './components/BrandsSection.vue';
import SubscribeComponent from './components/SubscribeComponent.vue';
import ToTop from './components/ToTop.vue';

  export default {
    components: { HeaderComponent, FooterComponent, JumboComponent, FeaturedProducts, BestSellers, NewArrivals, OurBlog, DividerCollections, DividerOffers, DividerTestimonials, OverviewSection, BrandsSection, SubscribeComponent, ToTop},
    data(){
      return {
      }
    }
}
</script>

<style lang="scss" scoped>


</style>