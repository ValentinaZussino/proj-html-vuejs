<template>
    <header class="w-100">
        <!-- header top -->
        <div class="top-header-outer">
            <TopHeader/>
        </div>
        <!-- header bottom -->
        <div class="bottom-header-outer">
            <div class="vz_container bottom-header">
                <!-- header bottom left -->
                <div><img src="" alt=""></div>
                <!-- header bottom right -->
                <div>
                    <nav>
                        <ul>
                            <li></li>
                        </ul>
                    </nav>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import TopHeader from './TopHeader.vue'
    export default {
        name: 'HeaderComponent',
        components: {TopHeader}
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
    border: 1px solid blue;
}
.bottom-header {
    @include dflex('between');
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
}

</style>