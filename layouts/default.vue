<i18n>
{
  "fi": {
    "introduction": "Esittely",
    "experience": "Erikoistuminen",
    "references": "Referenssit"
  },
  "en": {
    "introduction": "Introduction",
    "experience": "Experience",
    "references": "References"
  }
}
</i18n>
<template>
  <v-app light>
    <v-toolbar
      dark 
      fixed
      align-center
      color="brown darken-2">
      <v-spacer/>

      <v-toolbar-items
        class="hidden-sm-and-down">
        <v-btn
          :to="localePath('index')"
          flat>{{ $t('introduction') }}</v-btn>
        <v-btn
          :to="localePath('experience')" 
          flat>{{ $t('experience') }}</v-btn>
        <v-btn
          :to="localePath('references')" 
          flat>{{ $t('references') }}</v-btn>
        <LanguageSwitcher/>
      </v-toolbar-items>

      <v-toolbar-items
        class="hidden-md-and-up">
        <v-btn
          :to="localePath('index')"
          flat
          fab>{{ $t('introduction').substr(0,5) }}</v-btn>
        <v-btn
          :to="localePath('experience')" 
          flat
          fab>{{ $t('experience').substr(0,5) }}</v-btn>
        <v-btn
          :to="localePath('references')" 
          flat
          fab>{{ $t('references').substr(0,5) }}</v-btn>
        <LanguageSwitcher/>
      </v-toolbar-items>

      <v-spacer/>
    </v-toolbar>    
    <nuxt />
  </v-app>
</template>

<script>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

export default {
  components: { LanguageSwitcher }
}
</script>
