<i18n>
{
  "fi": {
    "desc1.1": "Lamek Oy on yritys joka tekee ratkaisuja eri tarpeisiin. Yrityksen keulana on Mikael Lavi, joka on kerännyt vahvan ja yli 13 vuoden kokemuksen sovellusten ja ratkaisujen kehittämisestä AEC-alalle (architecture, engineering and construction).",
    "desc1.2": "Ota yhteyttä mikäli sinulla on ongelma ja kaipaat ajatteluapua. Tilanteen arviointi tehdään vapaamuotoisesti ja ratkaisun suunta mietitään yhdessä.",
    "quote": "Kaikki asiat ovat mahdollisia - jotkin vain maksavat enemmän kuin muut.",
    "contacts": "Yhteystiedot",
    "title2": "Erikoistuminen",
    "desc2.1": "Erikoistumiseni ja kiinnostukseni ovat 3D-teknologioissa ja niiden soveltamisessa rakennetussa ympäristössä. Kiinnostukseni rakennettua ympäristöä kohtaan kehittyi ollessani monta vuotta töissä sen kanssa. Kiinnostuin käytettävyydestä ja käyttäjäinteraktioiden konsistenssista tehtävissäni interaktiivisten käyttöliittymien kanssa. Interaktiivisuus ei aina ole intuitiivista ja joskus ratkaisut löytyvät vastakohdista ja epäintuitiivisista valinnoista. Vähän on yleensä enemmän.",
    "desc2.2": "Muut teknologiset kiinnostukseni sisältävät mm. konenäköä ja kuvankäsittelyä. Minulla on laajat tiedot saatavilla olevista työkaluista ja osaan löytää tarvitsemani tiedon. Minulla on kokemusta tieteellisen materiaalin tutkimisesta käytännön sovelluksia varten.",
    "desc2.3": "Projekteissani olen panostanut paljon jaettuun dokumentaatioon ja toimiin joilla tietoa saadaan tehokkaasti jaettua. Yhteistyöalustat kuten Google Docs ja Slack ovat tuttuja ja käytän niitä tehokkasti. Ne ovat keskeisessä asemassa tiedon helpolle saatavuudelle ja ristiinkytkennät verkottavat kerätyn tiedon yhteen. Wikit ovat hyviä etenkin ristiinlinkitetyssä tiedossa, joskin niistä puuttuu välittömyys jonka saa kun samaa dokumenttia voi muokata monta käyttäjää samaan aikaan."
  },
  "en": {
    "desc1.1": "Lamek Oy is a company that develops and implements solutions to interactive systems. The head of the company is Mikael Lavi with extensive experience with solutions especially to AEC-business (architecture, engineering and construction).",
    "desc1.2": "Contact us and tell about your problem when you need thinking help. We will evaluate the situation with you and together we can decide on the approach.",
    "quote": "Everything is possible - some things are just more costly.",
    "contacts": "Contacts",
    "title2": "Specialization",
    "desc2.1": "My specialization and interest are in 3D technologies and how to apply that to the built environment. My interest towards the built environment has developed after being involved with it for many years. I got interested in usability and consistency of user interaction through my work with interactive viewers. Interactivity is not something that is always intuitive, and sometimes it is the counter-intuitive solutions that solve the problems. Less is often more.",
    "desc2.2": "My other technological topics include machine vision and image processing. I have a large knowledge of tools available and good skills to locate what I need. I have experience in researching scientific material to attain knowledge and to apply that in solutions.",
    "desc2.3": "In my projects I have engaged heavily in shared documentation practices in collaborative platforms like Google Docs. It is vital to have an interactive access to information and build structures into it that cross-link it to knowledge. Wikis are good,but they lack the immediacy of a collaborative document that can be edited at the same time."
  }
}
</i18n>

<template>
  <v-content>

    <section>
      <v-parallax
        src="/sunset.jpg"
        height="400"
      />
    </section>

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
          </v-flex>
          <v-flex
            xs11
            md7
            my-3
            text-xs-left
          >
            <p>{{ $t('desc1.1') }}</p>
            <p>{{ $t('desc1.2') }}</p>
            <p class="text-xs-right font-italic font-weight-medium">{{ $t('quote') }}<br>
              <em><small>&mdash; Mikael Lavi</small></em>
            </p>
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


    <section>
      <v-parallax
        src="/wood.jpg"
        height="400"
      />
    </section>

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

        </v-layout>
      </v-container>
    </section>

    <section>
      <v-parallax
        src="/rust.jpg"
        height="400"
      />
    </section>

  </v-content>
</template>

<script>
export default {}
</script>
