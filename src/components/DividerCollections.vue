<template>
    <section class="d-flex">
        <div class="col-lg-4 collection-col" v-for="(card, index) in store.collections">
            <img :src="card.img" :alt="card.collection">
            <div class="collection-text">
                <h3>{{card.collection}}</h3>
                <span>{{card.subtitle}}</span>
                <button class="transp-btn">view more</button>
            </div>
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
            bottom: 50px;
            left: 50%;
            transform: translate(-50%);
            width: 70%;
            @include dflex-column;
            align-items: center;
            color: $white;

            h3{ color: $white; font-size: 23px;}

            span { text-transform: uppercase; font-size: 11px; letter-spacing: 1px; padding: 0px 0px 15px 0px;}
        }
    }
}

</style>