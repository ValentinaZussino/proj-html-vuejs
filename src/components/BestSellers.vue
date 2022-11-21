<template>
    <section>
        <div class="vz_container ">
            <div class="section-title">
                <h3>Best Sellers</h3>
                <p>Must have products from our top sellers</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BestSellers',
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 100%;
    height: 420px;
    border: 1px solid red;

    div.vz_container {
        border-top: 2px solid $lightgray;
        margin: 70px auto;
        position: relative;

        .section-title {
            width: 35%;
            margin: 0 auto;
            text-align: center;
            background-color: $white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -23%);
            border: 1px solid green;

            p {
                font-size: 13px;
            }
        }
    }
}
</style>