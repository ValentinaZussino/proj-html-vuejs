<template>
    <footer>
        <FooterTop/>
        <FooterBottom/>
    </footer>
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
footer {
    overflow: hidden;
}

</style>