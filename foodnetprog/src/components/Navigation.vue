<template>
  <div id="Navigation">
     <v-row
        class="fill-height"
        no-gutters
      >
    <v-toolbar app light clipped-left color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FOOD<b>PROG</b>2.0</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        hide-details
        solo-inverted
        flat
        prepend-inner-icon="mdi-magnify"
        label="Cerca prodotto..."
      ></v-text-field>
    </v-toolbar>
     </v-row>
    <!-- Navigation drawer -->
    <v-navigation-drawer
      app

      v-model="drawer"
      bottom
      temporary
    >
      <v-list v-for="(item, index) in drawerItems" :key="index">
        <v-flex>
          <v-subheader v-if="item.subheader">
            {{ item.subheader }}
          </v-subheader>
        </v-flex>

        
        <v-list-tile
          style="padding: 20px"
          v-for="(item, index) in item.tiles"
          :key="index"
          :to="item.route"
        >
          <v-list-tile-action style="margin-left: 10px">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
          <br />
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      query: "",
      drawerItems: {
        // voci del menù
        firstChunk: {
          subheader: "Prodotti",
          tiles: [
            { title: "Più venduti", icon: "mdi-star", route: "/popular" },
            {
              title: "Miglior eco-score",
              icon: "local_florist",
              route: "/top-eco",
            },
            {
              title: "Miglior nutri-score",
              icon: "emoji_nature",
              route: "/top-nutri",
            },
          ],
        },
        secondChunk: {
          subheader: "Collezioni",
          tiles: [
            {
              title: "Preferiti",
              icon: "favorite_border",
              route: "/favorites",
            },
          ],
        },
        thirdChunk: {
          subheader: "About",
          tiles: [{ title: "Il progetto", icon: "article", route: "/about" }],
        },
      },
    };
  },
  computed: {
    encodedQuery() {
      return encodeURI(this.query.replace(/ /g, "+"));
      // nella query dobbiamo sostituire gli spazi con il segno '+'
      // e fare l'opportuna codifica
    },
  },
  methods: {
    search() {
      this.$router.push("/search/" + this.encodedQuery);
      // quando l'utente preme invio nella barra di ricerca
      // l'applicazione cambia route e inserisce come parametro
      // la query, che sarà utilizzata dal componente per
      // fare la richiesta API
    },
  },
};
</script>