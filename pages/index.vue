<i18n>
{
  "fi": {
    "desc1.1": "Lamek Oy on yritys joka tekee ratkaisuja eri tarpeisiin. Yrityksen keulana on Mikael Lavi, joka on kerännyt vahvan ja yli 13 vuoden kokemuksen sovellusten ja ratkaisujen kehittämisestä AEC-alalle (architecture, engineering and construction).",
    "desc1.2": "Ota yhteyttä mikäli sinulla on ongelma ja kaipaat ajatteluapua. Tilanteen arviointi tehdään vapaamuotoisesti ja ratkaisun suunta mietitään yhdessä.",
    "download": "Näillä sivuilla olen listannut oleelliset tiedot erikoistumisestani ja referensseistäni. Niiden lisäksi voit ladata tästä printtiversion materiaalista:",
    "quote": "Kaikki asiat ovat mahdollisia - jotkin ovat vain hankalampia kuin muut.",
    "contacts": "Yhteystiedot"
  },
  "en": {
    "desc1.1": "Lamek Oy is a company that develops and implements solutions to interactive systems. The head of the company is Mikael Lavi with extensive experience with solutions especially to AEC-business (architecture, engineering and construction).",
    "desc1.2": "Contact us and tell about your problem when you need thinking help. We will evaluate the situation with you and together we can decide on the approach.",
    "download": "On these pages I have listed out my important expertise and references. In addition you may download a print version of the same material here:",
    "quote": "Everything is possible - some things are just more complex.",
    "contacts": "Contacts"
  }
}
</i18n>

<template>
  <v-content>

    <section>
      <v-img
        src="/sunset.jpg"
        height="400"
        class="hidden-sm-and-down"
      />
    </section>

    <v-spacer class="my-5 hidden-md-and-up" />

    <section>
      <v-container>
        <v-layout
          row
          wrap
          pa-4
          align-start
          justify-center
        >
          <v-flex
            xs11
            md4
            text-xs-left
          >
            <h2>Lamek Oy</h2>
            <h3>Mikael Lavi</h3>
            <v-img
              src="/profile.png" 
              contain
              class="mt-4 hidden-sm-and-down"
              width="200" />
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('desc1.1') }}</p>
            <p>{{ $t('download') }} <a href="/CV_Mikael_Lavi.pdf">CV Mikael Lavi.pdf</a></p>
            <p>{{ $t('desc1.2') }}</p>
            <p class="text-xs-right font-italic font-weight-medium">{{ $t('quote') }}</p>
          </v-flex>

          <v-flex
            xs11
            md4
            text-xs-left
          >
            <h3>{{ $t('contacts') }}</h3>
          </v-flex>
          <v-flex
            xs11
            md7
            py-3
            text-xs-left
          >
            <p class="bigger">
              Lamek Oy<br>
              Mikael Lavi<br>
              +358 50 30 700 20<br>
            <a href="mailto:mikael@lamek.fi">mikael@lamek.fi</a></p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-content>
</template>

<script>
export default {}
</script>
