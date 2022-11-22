<template>
    <section>
        <div class="vz_container">
            <span>brand logos</span>
            <div class="logos-container">
                <div class="single-logo"><img src="/img/b_logotype_6.png" alt="" class="h-100"></div>
                <div class="single-logo"><img src="/img/b_logotype_7.png" alt="" class="h-100"></div>
                <div class="single-logo"><img src="/img/b_logotype_1.png" alt="" class="h-100"></div>
                <div class="single-logo"><img src="/img/b_logotype_2.png" alt="" class="h-100"></div>
                <div class="single-logo"><img src="/img/b_logotype_3.png" alt="" class="h-100"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BrandsSection'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;
    height: 210px;
    background-color: $softgray;

    div.vz_container {
        height: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 40px 0;

        span{
            text-transform: uppercase;
            font-size: 11px;
            color: $textgraycolor;
            letter-spacing: 1.2px;
        }
        .logos-container{
            width: 100%;
            height: 100px;
            margin-top: 15px;
            @include dflex-base;

            .single-logo{
                height: 100%;
                width: calc(100% / 5);
            }
        }
    }
}
</style>