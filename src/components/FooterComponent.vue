<template>
    <div>
        <FooterTop/>
        <FooterBottom/>
    </div>
</template>

<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

    export default {
    name: "FooterComponent",
    components: { FooterTop, FooterBottom }
}
</script>

<style lang="scss" scoped>

</style>