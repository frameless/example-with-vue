<script setup lang="ts">
import { ref } from 'vue';
import { Heading, Button, HtmlContent } from '@utrecht/component-library-vue'
import { contentData } from './data.ts';

const mappedCategories = {
  bewijs: 'Bewijs',
  bezwaarEnBeroep: 'Bezwaar',
  contact: 'Contact',
  kostenEnBetaalmethoden: 'Kosten',
  notice: 'bijzonderheden',
  procedureBeschrijving: 'Aanvraag',
  tekst: 'inleiding',
  uitersteTermijn: 'termijn',
  vereisten: 'voorwaarden',
  wtdBijGeenReactie: 'Wat te doen bij geen reactie',
  deskMemo: 'KCC'
}


// Set "tekst" as the default selected category
const selectedCategory = ref<string>('tekst');

const selectCategory = (category: string) => {
  if (selectedCategory.value !== category) {
    selectedCategory.value = category;
  }
};

</script>

<template>
  <div class="utrecht-theme utrecht-document utrecht-page">
    <header>
    <Heading :level="1">Overige Objecten API Met NL design systeem</Heading>
  </header>
  <div class="container">
    <aside class="sidebar">
      <Button
        v-for="(_content, key) in contentData"
        :key="key"
        @click="selectCategory(key)"
        :appearance="selectedCategory === key ? 'secondary-action-button' : 'primary-action-button'"
      >
        {{ mappedCategories[key] }}
      </Button>
    </aside>

    <!-- Main Content Area -->
    <main class="content">
      <section v-if="selectedCategory">
        <HtmlContent v-html="contentData[selectedCategory as keyof typeof contentData]" />
      </section>
    </main>
  </div>
</div>
</template>

<style scoped>

.container {
  display: flex;
  block-size: 100vh;
  inline-size: 100vw;
}

header {
padding-inline: 2rem;
padding-block: 2rem;
text-align: center;
}

.sidebar {
  inline-size: 600px;
  padding-inline: 20px;
  padding-block: 20px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  inline-size: 100dvw;
}
</style>

<style src="@utrecht/component-library-vue/dist/style.css"></style>