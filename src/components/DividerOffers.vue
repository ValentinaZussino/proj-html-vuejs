<template>
    <section>
        <div id="confetti">
            <div class="vz_container">
                <div class="box-offers">
                    <img src="/img/promo_box_1_bg.jpg" alt="">
                    <div class="offers-text">
                        <h3>70% off</h3>
                        <span>Vivamus temp leor lacus, feugiat ut magna aliquam erat.</span>
                        <button class="transp-btn">view more</button>
                    </div>
                </div>
                <div class="box-offers">
                    <img src="/img/promo_box_2_bg.jpg" alt="">
                    <div class="offers-text">
                        <h3>free shipping</h3>
                        <span>Vivamus temp leor lacus, feugiat ut magna aliquam erat.</span>
                        <button class="transp-btn">view more</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'DividerOffers'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;
    height: 380px;
    background-color: $lightblue;
    padding: 50px 0px;

    #confetti {
        width: 100%;
        height: 230px;
        background-image: url('/img/bkgd_confetti-compressor.jpg');
        background-position:center;
        background-size: cover;
        background-repeat: repeat;
        position: relative;
    }
    div.vz_container {
        height: 270px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        @include dflex('between');

        .box-offers{
            width: 48%;
            height: 100%;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                cursor: pointer;
                transition: 1s;

                &:hover {
                    opacity: 0.78;
                }
            }

            .offers-text{
                position: absolute;
                left: 30px;
                bottom: 60px;
                width: 45%;
                @include dflex-column;
                align-items: flex-start;
                color: $white;
                line-height: 1.8;

                h3{ color: $white; font-size: 23px;}

                span { font-size: 12px; padding: 0px 0px 15px 0px;}
            }
        }
    }
    
}
</style>