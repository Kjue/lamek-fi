<i18n>
{
  "fi": {
    "title3": "Referenssit",
    
    "description": "Näkyvät esimerkit tehdyistä töistä",
    
    "ref_1": "Lamek Oy -sivusto",
    
    "ref_11": "Tämä sivu edustaa yhtä esimerkkituotosta osaamisestani. Sivusto on tehty yhdistämällä tehokkaita web-työkaluja yhteen jotta saadaan hyvin interaktiivinen käyttökokemus aikaiseksi. Tässä yhteydessä käytetyt työkalut ovat:",
    
    "ref_12": "Nuxt.js alusta palvelinpään toimintoihin ja käännöksiin",
    
    "ref_13": "Vue.js käyttöliittymäkirjasto",
    
    "ref_14": "Vuetify ulkoasukirjasto",
    
    "ref_15": "Firebase pilviympäristö",
    
    "ref_2": "Github profiili",
    
    "ref_21": "Profiilini GitHubissa osoittaa kiinnostukseni eri projekteja kohtaan. Olen ollut aktiivisesti seuraamassa ja ottamassa osaa keskusteluun Babylon.js frameworkin kehittämiseen, ja tavannut alustaa rakentavat ihmiset Wanderfeelin toimintojen yhteydessä.",
    
    "ref_22": "Olen viimeisen vuoden aikana forkannut useamman kirjaston komponentin parantaakseni niitä. Nämä parannukset ovat toimintoja, jotka joko laajentavat käyttöä tai lisäävät yhteensopivuutta eri alustoilla. IE11-yhteensopivuuden lisääminen videojs-vr kirjastoon on yksi viime aikainen lisäykseni.",
    
    "ref_3": "RBushen",
    
    "ref_31": "RBushen on aloittamani projekti joka on avaukseni avoimiin projekteihin. Se on suorituskykyinen tilallinen indeksi moniulotteiselle datalle. Se on erityisesti suunniteltu tukemaan dataa jota käytetään reaaliaikaisessa 3D-ympäristössä. Se poikkeaa inspiraatiosta sallimalla vapaan määrän indeksöitäviä ulottuvuuksia datalle.",
    
    "ref_4": "Trimble Navigation / Ohjelmisto-arkkitehti",
    
    "ref_41": "Tämä toimenkuva antoi minulle mahdollisuuden keskittyä tekninen vetäjä projekteissa. Vastuisiini kuului silloin ohjelmistojen arkkitehtuurin lisäksi projektien pystyttäminen kun käynnistimme mobiilialustan kehittämisen, sekä ohjeistamisen ja ohjaamisen sen käytössä eri aikavyöhykkeillä olevalle tiimille.",
    
    "ref_42": "Erityisalueeni tässä projektissa oli yhdistää olemassaoleva teknologia eri alustoista ja saattaa ne alustariippumattoman järjestelmän käyttöön, jota ajettiin Xamarin -alustalla.",

    "ref_6": "python-opencv-gpu-video",
    
    "ref_61": "Kirjoitin teknisen dokumentaation blogin muodossa Python koodin kiihdyttämisestä OpenCV-kirjaston käytöstä. Esimerkin tarkoituksena on osoittaa miten grafiikkakorttia voidaan käyttää tehostamaan koodia käytännössä."
  },
  "en": {
    "title3": "References",
    
    "description": "Publicly viewable work packages and achievements",
    
    "ref_1": "Lamek Oy pages",
    
    "ref_11": "This webpage is a sample of my skills. It has been made by combining powerful tools and frameworks to achieve an interactive experience. The libraries used for this are:",
    
    "ref_12": "Nuxt.js platform for server-side support and translations",
    
    "ref_13": "Vue.js view only layer",
    
    "ref_14": "Vuetify styling layer",
    
    "ref_15": "Firebase cloud environment",
    
    "ref_2": "Github profile",
    
    "ref_21": "My profile in Github reflects my professional interests in different projects that I have actively followed. I have especially taken part in discussion on the Babylon.js project that we are utilizing in our product. I have met the founders of that project personally as well.",
    
    "ref_22": "I have forked several Vue-components to improve upon them. The improvements have been to either expand the existing functionalities or make the components more compatible in different environments. Adding compatibility for IE11 was my latest contribution to videojs-vr.",
    
    "ref_3": "RBushen",
    
    "ref_31": "RBushen is a project I started to change my stance to open source. RBushen is a high-performance JavaScript R-tree-based N-dimensional spatial index for spatial points. It is inspired by the 2D and 3D counterparts. It has been designed to support data used for realtime operation in a 3D-environment. It allows for free number of dimensions to be indexed unlike its counterparts.",
    
    "ref_4": "Trimble Navigation / Software architect",
    
    "ref_41": "This position allowed me to shift my focus as a software architect to concentrate being the technical lead on specific projects. My responsibilities in addition to architectural design included setting up the project from technical perspective, and give guidance and education in technical aspects to co-located teams.",
    
    "ref_42": "My last specialty project in this space involved interoperability for 3D components in mobile tools maintained in Xamarin. This has carried forward in my latest experiences.",

    "ref_6": "python-opencv-gpu-video",
    
    "ref_61": "I wrote this technical document in the form of a blog entry to describe how to accelerate OpenCV in Python with dedicated GPU. This was intended as a practical example and also to provide the mechanism by which the acceleration was possible."
  }
}
</i18n>

<template>
  <v-content>
    <section>
      <v-parallax
        src="/rust.jpg"
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
            <!-- <h3>{{ $t('title3') }}</h3> -->
            <h3>
              <a href="https://github.com/kjue/lamek-fi">{{ $t('ref_1') }}</a>
            </h3>
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('ref_11') }}</p>
            <ul>
              <li>{{ $t('ref_12') }}</li>
              <li>{{ $t('ref_13') }}</li>
              <li>{{ $t('ref_14') }}</li>
              <li>{{ $t('ref_15') }}</li>
            </ul>
          </v-flex>

          <v-flex
            xs11
            md4
            text-xs-left
          >
            <!-- <h3>{{ $t('title3') }}</h3> -->
            <h3>
              <a href="https://github.com/kjue">{{ $t('ref_2') }}</a>
            </h3>
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('ref_21') }}</p>
            <p>{{ $t('ref_22') }}</p>
          </v-flex>

          <v-flex
            xs11
            md4
            text-xs-left
          >
            <!-- <h3>{{ $t('title3') }}</h3> -->
            <h3>
              <a href="https://github.com/Kjue/python-opencv-gpu-video">{{ $t('ref_6') }}</a>
            </h3>
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('ref_61') }}</p>
          </v-flex>

          <v-flex
            xs11
            md4
            text-xs-left
          >
            <!-- <h3>{{ $t('title3') }}</h3> -->
            <h3>
              <a href="https://github.com/Kjue/rbushen">{{ $t('ref_3') }}</a>
            </h3>
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('ref_31') }}</p>
          </v-flex>

          <v-flex
            xs11
            md4
            text-xs-left
          >
            <h3>
              <a href="https://www.linkedin.com/in/mikaellavi/">{{ $t('ref_4') }}</a>
            </h3>
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('ref_41') }}</p>
            <p>{{ $t('ref_42') }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('title3'),
      meta: [
        {
          hid: 'references',
          name: 'description',
          content: this.$t('description')
        }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      fi: '/referenssit',
      en: '/references'
    }
  }
}
</script>
