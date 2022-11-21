<template>
    <section class="d-flex">
        <div class="col-lg-4 collection-col">
            <img src="/img/winter_collection_bg.jpg" alt="">
            <div class="collection-text">
                <h3>winter collection</h3>
                <span>stylish and warm </span>
                <button class="transp-btn mt-2">view more</button>
            </div>
        </div>
        <div class="col-lg-4">
            <img src="/img/winter_collection_bg.jpg" alt="">
            <div></div>
        </div>
        <div class="col-lg-4">
            <img src="/img/winter_collection_bg.jpg" alt="">
            <div></div>
        </div>
    </section>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'DividerCollections',
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    height: 400px;
    overflow: hidden;
    .collection-col {
        height: 100%;
        position: relative;

        .collection-text{
            position: absolute;
            bottom: 60px;
            left: 50%;
            transform: translate(-50%);
            width: 70%;
            @include dflex-column;
            align-items: center;
            color: $white;
            border: 1px solid yellow;

            h3{ color: $white; font-size: 25px;}

            span { text-transform: uppercase; font-size: 12px;}
        }
    }
}

</style>