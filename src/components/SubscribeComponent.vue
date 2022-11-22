<template>
    <section>
        <div class="vz_container">
            <div class="sub-col"></div>
            <div class=" sub-col"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SubscribeComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    width: 1005;
    height: 150px;
    background-color: $gray;

    div.vz_container {
        height: 100%;
        margin: 0 auto;
        @include dflex('between');
        padding: 20px 0;
        border: 1px solid yellow;

        .sub-col{
            width: 47%;
            height: 100px;
            border: 1px solid green;
        }
    }
}

</style>