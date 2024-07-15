<template>
    <div class="container mx-auto pt-14">
        <div class="main header text-header-blue dark:text-highllght-blue">Game Assets</div>
        <div class="game_assets_group grid grid-flow-col grid-cols-4 gap-6">
            <div class="game_assets_col col-span-1">
                <div class="game_assets_preview show">
                    <div class="game_assets_commingsoon text-5xl uppercase text-white drop-shadow">Coming Soon</div>
                    <div class="game_assets_image"><img src="../assets/images/game1.png" alt=""></div>
                </div>
                <div class="game_assets_name text-header-blue text-2xl font-semibold pt-6 dark:text-highllght-blue">Slave Festival</div>
                <div class="game_assets_desc text-light-grey text-lg font-normal">Description</div>
            </div>
            <div class="game_assets_col col-span-1">
                <div class="game_assets_preview">
                    <div class="game_assets_commingsoon text-5xl uppercase text-white drop-shadow">Coming Soon</div>
                    <div class="game_assets_image"><img src="../assets/images/game1.png" alt=""></div>
                </div>
                <div class="game_assets_name text-header-blue text-2xl font-semibold pt-6 dark:text-highllght-blue">Slave Festival</div>
                <div class="game_assets_desc text-light-grey text-lg font-normal">Description</div>
            </div>
            <div class="game_assets_col col-span-1">
                <div class="game_assets_preview show">
                    <div class="game_assets_commingsoon text-5xl uppercase text-white drop-shadow">Coming Soon</div>
                    <div class="game_assets_image"><img src="../assets/images/game1.png" alt=""></div>
                </div>
                <div class="game_assets_name text-header-blue text-2xl font-semibold pt-6 dark:text-highllght-blue">Slave Festival</div>
                <div class="game_assets_desc text-light-grey text-lg font-normal">Description</div>
            </div>
            <div class="game_assets_col col-span-1">
                <div class="game_assets_preview show">
                    <div class="game_assets_commingsoon text-5xl uppercase text-white drop-shadow">Coming Soon</div>
                    <div class="game_assets_image"><img src="../assets/images/game1.png" alt=""></div>
                </div>
                <div class="game_assets_name text-header-blue text-2xl font-semibold pt-6 dark:text-highllght-blue">Slave Festival</div>
                <div class="game_assets_desc text-light-grey text-lg font-normal">Description</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../function.scss';

.game{
    &_assets{
        &_preview{
            border: 3px solid rgb(var(--assets-border));
            position: relative;
            border-radius: 40px;
            background-color: rgb(var(--assets-background));
            box-shadow: 0 0 30px rgba(0,0,0,0.2);
            overflow: hidden;
            &.show{
                .game_assets_commingsoon{
                    display: none;
                }
                .game_assets_image{
                    opacity: 1;
                }
            }
        }
        &_commingsoon{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &_image{
            opacity: 0;
            img{
                width: 100%;
                height: auto;
                max-width: none;
            }
        }
    }
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class GameAssetsMain extends Vue {}

</script>