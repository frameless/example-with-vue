<script setup lang="ts">
import { ref } from 'vue';
import {
  Button,
  HtmlContent,
  Heading2,
  Heading3,
  Paragraph,
  Link,
  Strong,
} from '@utrecht/component-library-vue';
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
  deskMemo: 'KCC',
};

// Set "tekst" as the default selected category
const selectedCategory = ref<string>('tekst');

const selectCategory = (category: string) => {
  if (selectedCategory.value !== category) {
    selectedCategory.value = category;
  }
};
</script>

<template>
  <div class="utrecht-page-layout">
    <div class="utrecht-document utrecht-page">
      <utrecht-page-header>
        <div class="utrecht-logo">
          <Link href="#"> <utrecht-logo-image></utrecht-logo-image></Link>
        </div>
      </utrecht-page-header>
      <div class="container">
        <aside class="sidebar">
          <Button
            v-for="(_content, key) in contentData"
            :key="key"
            :appearance="
              selectedCategory === key ? 'secondary-action-button' : 'primary-action-button'
            "
            @click="selectCategory(key)"
          >
            {{ mappedCategories[key] }}
          </Button>
        </aside>
        <main class="content">
          <article class="utrecht-article">
            <section v-if="selectedCategory">
              <HtmlContent v-html="contentData[selectedCategory as keyof typeof contentData]" />
            </section>
          </article>
        </main>
      </div>
    </div>
    <utrecht-page-footer>
      <Heading2 className="utrecht-heading-2--reset-h2">Gemeente Utrecht</Heading2>
      <div class="grid-container">
        <section>
          <Heading3 className="utrecht-heading-3--distanced">Telefoon</Heading3>
          <Paragraph className="utrecht-paragraph--distanced">
            <a
              href="tel:+31302860000"
              className="utrecht-link utrecht-link--html-a utrecht-link--telephone"
            >
              14 030
            </a>
          </Paragraph>
          <ul role="list" class="utrecht-link-list utrecht-link-list--html-ul">
            <li class="utrecht-link-list__item">
              <a
                href="https://www.utrecht.nl/contact/verkort-telefoonnummer-gemeente"
                class="utrecht-link utrecht-link--html-a utrecht-link-list__link"
              >
                <utrecht-icon-chevron-right></utrecht-icon-chevron-right>
                <span class="utrecht-link-list__link-text"> Hoe werkt 14 030? </span>
              </a>
            </li>
            <li class="utrecht-link-list__item">
              <a
                href="https://www.utrecht.nl/contact"
                class="utrecht-link utrecht-link--html-a utrecht-link-list__link"
              >
                <utrecht-icon-chevron-right></utrecht-icon-chevron-right>
                <span class="utrecht-link-list__link-text">Meer contactinformatie</span>
              </a>
            </li>
            <li class="utrecht-link-list__item">
              <Link
                href="https://www.utrecht.nl/over-deze-website"
                class="utrecht-link utrecht-link--html-a utrecht-link-list__link"
              >
                <utrecht-icon-chevron-right></utrecht-icon-chevron-right>
                <span class="utrecht-link-list__link-text">Over deze website</span>
              </Link>
            </li>
          </ul>
        </section>
        <address
          className="utrecht-page-footer__address utrecht-page-footer__address--reset-address"
        >
          <Heading3 className="utrecht-heading-3--distanced">Adres</Heading3>
          <Paragraph className="utrecht-paragraph--distanced">
            <Strong>Stadskantoor</Strong>
            <br />
            Stadsplateau 1<br />
            3521AZ
          </Paragraph>
        </address>
      </div>
    </utrecht-page-footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.sidebar {
  inline-size: 600px;
  padding-inline: 20px;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
}

.content {
  flex-grow: 1;
  padding: 20px;
  inline-size: 100dvw;
  background-color: #fff;
}
</style>

<style src="@utrecht/component-library-vue/dist/style.css"></style>
