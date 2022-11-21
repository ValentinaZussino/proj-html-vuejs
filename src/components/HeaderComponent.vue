<template>
    <header class="w-100">
        <!-- header top -->
        <div class="top-header-outer">
            <TopHeader/>
        </div>
        <!-- header bottom -->
        <div class="bottom-header-outer">
            <BottomHeader/>
        </div>
    </header>
</template>

<script>
import BottomHeader from './BottomHeader.vue';
import TopHeader from './TopHeader.vue'
    export default {
        name: 'HeaderComponent',
        components: { TopHeader, BottomHeader }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

.top-header-outer {
    width: 100%;
    height: 45px;
    border-top: 2px solid $blue;
    border-bottom: 2px solid $lightgray;
}
.bottom-header-outer {
    height: 100px;
    width: 100%;
}

</style>