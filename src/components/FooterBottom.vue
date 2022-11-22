<template>
    <section>
        <div class="wrapper-btm-foot">
            <!-- links -->
            <div class="d-flex justify-content-center text-white w-100 pb-1">
                <div class="vz_links">copyright 2012-2020</div>
                <div class="vz_links"><a href="#">Avada Theme by Theme Fusion</a></div>
                <div class="vz_links">All rights reserved</div>
                <div class="vz_links"><a href="#">powered by wordPress</a></div>
            </div>
            <!-- payments -->
            <div class="payments">
                <img src="/img/payment_cards_footer.png" alt="" class="h-100">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FooterBottom'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;
    height: 70px;
    background-color: $darkgray;

    .wrapper-btm-foot {
        width: 60%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .vz_links{
            text-transform: capitalize;
            font-size: 9px;
            padding: 0 5px;
            border-right: 1px solid $white;

            &:last-of-type {
                border: none;
            }
            
            a {
                color: $white;
            }
        }

        .payments{
            height: 20px;
        }
    }

    
}
</style>