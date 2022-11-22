<template>
    <section>
        <div class="vz_container">
            <!-- img tesimonial -->
            <div class="testimonial-img">
                <img src="/img/man_testimonial.png" alt="testimonial man">
            </div>
            <!-- text and name and role -->
            <p class="fst-italic">Curabitur non tristique tortor. Vestibulum aliquet suspicit ipsum in voluptat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consecutur est et nibh sadip hendrerit bibendum.</p>
            <div><span class="fw-bold">Dario Pineda, </span><span>Theme Fusion</span></div>
            <!-- circles -->
            <div class="d-flex">
                <div class="circles"></div>
                <div class="circles"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'DividerTestimonilas'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section{
    width: 100%;
    height: 380px;
    background-image: url('/img/testimonials_home_1_bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    div.vz_container {
        height: 190px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: $white;
        font-size: 13px;
        padding: 50px 150px 0px 150px;
        @include dflex-column;
        align-items: center;

        .testimonial-img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: absolute;
            top: -30px;
        }

        div.circles {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid $white;
            transform: translate(-50%, -50%);
            margin-top: 20px;
            margin-right: 5px;

            &:first-of-type {
                background-color: $white;
            }
        }
    }
}

</style>