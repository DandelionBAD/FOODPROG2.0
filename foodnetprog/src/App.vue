<template>
  <v-app>
    <v-main>
      <Navigation/>
      <CardGrid/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import CardGrid from './components/CardGrid';

export default {
  name: 'App',

  components: {
    Navigation,
    CardGrid,
  },

  data: () => ({
    //
  }),
};
</script>
