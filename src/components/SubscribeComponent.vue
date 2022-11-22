<template>
    <section>
        <div class="vz_container">
            <div class="sub-col">
                <div class="envelope"><i class="fa-regular fa-envelope"></i></div>
                <p>Subscribe now and get special offers</p>
            </div>
            <div class="sub-col">
                <input type="text" placeholder="insert your email">
                <button class="blue-btn">send</button>
            </div>
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

        .sub-col{
            width: 47%;
            height: 100px;
            @include dflex-base;
            line-height: 10px;

            .envelope{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: $midgray;
                text-align: center;
                line-height: 55px;
                margin-right: 15px;

                i {
                    font-size: 25px;
                    color: $textgraycolor;
                }
            }

            p {
                color: $white;
                font-weight: bold;
                margin-bottom: 0;
                line-height: 1.2;
            }

            input {
                border-radius: 15px;
                padding: 6px 10px;
                font-size: 11px;
                width: 55%;
            }
            button.blue-btn {
                padding: 8px 23px;
                margin-left: 15px;
            }

            &:last-of-type {
                justify-content: flex-end;
            }
        }
    }
}

</style>