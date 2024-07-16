<template>
    <div class="footer">
        <div class="footer_section"></div>
        <div class="footer_section">
            <div class="copyright text-white text-xl py-10">© 2024 Snocko Technology Co.,Ltd . All Rights Reserved</div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../function.scss';

.footer{
    min-height: rem(250);
    background-color: rgb(var(--footer-bg));
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class FooterComp extends Vue {}

</script>