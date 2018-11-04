<i18n>
{
  "fi": {
    "desc1.1": "Lamek Oy on yritys joka tekee ratkaisuja eri tarpeisiin. Yrityksen keulana on Mikael Lavi, joka on kerännyt vahvan ja yli 13 vuoden kokemuksen sovellusten ja ratkaisujen kehittämisestä AEC-alalle (Architecture, Engineering and Construction).",
    "desc1.2": "Ota yhteyttä mikäli sinulla on ongelma ja kaipaat ajatteluapua. Tilanteen arviointi tehdään vapaamuotoisesti ja ratkaisun suunta mietitään yhdessä.",
    "quote": "Kaikki asiat ovat mahdollisia - jotkin vain maksavat enemmän kuin muut.",
    "title2": "Erikoistuminen",
    "desc2.1": "Erikoistumiseni ja kiinnostukseni ovat 3D-teknologioissa ja niiden soveltamisessa rakennetussa ympäristössä. Kiinnostukseni rakennettua ympäristöä kohtaan kehittyi ollessani monta vuotta töissä sen kanssa. Kiinnostuin käytettävyydestä ja käyttäjäinteraktioiden konsistenssista tehtävissäni interaktiivisten käyttöliittymien kanssa. Interaktiivisuus ei aina ole intuitiivista ja joskus ratkaisut löytyvät vastakohdista ja epäintuitiivisista valinnoista. Vähän on yleensä enemmän.",
    "desc2.2": "Muut teknologiset kiinnostukseni sisältävät mm. konenäköä ja kuvankäsittelyä. Minulla on laajat tiedot saatavilla olevista työkaluista ja osaan löytää tarvitsemani tiedon. Minulla on kokemusta tieteellisen materiaalin tutkimisesta käytännön sovelluksia varten.",
    "desc2.3": "Projekteissani olen panostanut paljon jaettuun dokumentaatioon ja toimiin joilla tietoa saadaan tehokkaasti jaettua. Yhteistyöalustat kuten Google Docs ja Slack ovat tuttuja ja käytän niitä tehokkasti. Ne ovat keskeisessä asemassa tiedon helpolle saatavuudelle ja ristiinkytkennät verkottavat kerätyn tiedon yhteen. Wikit ovat hyviä etenkin ristiinlinkitetyssä tiedossa, joskin niistä puuttuu välittömyys jonka saa kun samaa dokumenttia voi muokata monta käyttäjää samaan aikaan."
  },
  "en": {
    "desc1.1": "English description 1",
    "desc1.2": "English description 2",
    "quote": "English quote",
    "title2": "Specialization",
    "desc2.1": "My specialization and interest are in 3D technologies and how to apply that to the built environment. My interest towards the built environment has developed after being involved with it for many years. I got interested in usability and consistency of user interaction through my work with interactive viewers. Interactivity is not something that is always intuitive, and sometimes it is the counter-intuitive solutions that solve the problems. Less is often more.",
    "desc2.2": "My other technological topics include machine vision and image processing. I have a large knowledge of tools available and good skills to locate what I need. I have experience in researching scientific material to attain knowledge and to apply that in solutions.",
    "desc2.3": "In my projects I have engaged heavily in shared documentation practices in collaborative platforms like Google Docs. It is vital to have an interactive access to information and build structures into it that cross-link it to knowledge. Wikis are good,but they lack the immediacy of a collaborative document that can be edited at the same time."
  }
}
</i18n>

<template>
  <v-layout
    row
    wrap
    justify-center
    align-start
    elevation-10
    pa-5
    my-5
  >

    <v-flex
      xs11
      md4
      text-xs-left
    >
      <h2>Lamek Oy</h2>
      <h3>Mikael Lavi</h3>
    </v-flex>
    <v-flex
      xs11
      md7
      my-3
      text-xs-left
    >
      <p>{{ $t('desc1.1') }}</p>
      <p>{{ $t('desc1.2') }}</p>
    </v-flex>

    <v-flex
      xs11
      md4
      text-xs-left
    >
      <h3>Yhteystiedot</h3>
    </v-flex>
    <v-flex
      xs11
      md7
      text-xs-left
    >
      <p class="headline">
        Lamek Finland Oy<br>
        +358 50 30 700 20<br>
      <a href="mailto:mikael.lavi@gmail.com">mikael.lavi@gmail.com</a></p>

      <p class="text-xs-right font-italic font-weight-medium">{{ $t('quote') }}<br>
        <em><small>&mdash; Mikael Lavi</small></em>
      </p>
    </v-flex>

    <v-flex
      xs11
      md4
      text-xs-left
    >
      <h3>{{ $t('title2') }}</h3>
    </v-flex>
    <v-flex
      xs11
      md7
      my-3
      text-xs-left
    >
      <p>{{ $t('desc2.1') }}</p>
      <p>{{ $t('desc2.2') }}</p>
      <p>{{ $t('desc2.3') }}</p>
    </v-flex>

    <!-- <v-flex
      xs11
      md10
      lg9
      xl8
      text-xs-left
    >
      <h3>Tietoa</h3>
      <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>

      <p>For more information on Vuetify, check out the <a
        href="https://vuetifyjs.com"
        target="_blank">documentation</a>.</p>

      <p>If you have questions, please join the official <a
        href="https://chat.vuetifyjs.com/"
        target="_blank"
        title="chat">discord</a>.</p>

      <p>Find a bug? Report it on the github <a
        href="https://github.com/vuetifyjs/vuetify/issues"
        target="_blank"
        title="contribute">issue board</a>.</p>

      <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>

      <div class="text-xs-right">
        <em><small>&mdash; Mikael Lavi</small></em>
      </div>
    </v-flex> -->

  </v-layout>
</template>

<script>
export default {}
</script>
