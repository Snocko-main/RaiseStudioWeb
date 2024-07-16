<template>
  <div class="home">
    <ProjectMain />
    <GameAssetsMain />
    <FooterComp />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import ProjectMain from '@/components/ProjectMain.vue';
import GameAssetsMain from '@/components/GameAssetsMain.vue';
import FooterComp from '@/components/FooterComp.vue';

@Options({
  components: {
    HelloWorld,
    ProjectMain,
    GameAssetsMain,
    FooterComp
  },
})
export default class HomeView extends Vue {}
</script>
