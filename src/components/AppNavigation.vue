<template>
  <v-app>
    <!-- create navigation bar -->
    <v-app-bar app color="#7B1FA2" dark>
      <v-toolbar-title>Grad Tracker Pro</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- loops through data to produce buttons -->
      <v-btn
        v-for="link in links"
        v-bind:key="`${link.label}-header-link`"
        text
        rounded
        v-bind:to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- loads all pages in routes -->
      <router-view></router-view>
    </v-content>
    <!-- create page footer -->
    <v-footer color="#7B1FA2" padless>
      <v-layout justify-center wrap>
        <v-flex purple darken-2 py-4 text-center white--text>
          {{ new Date().getFullYear() }} — Powered by UNA CSIS
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Setup Vue",
          url: "/setupvue"
        },
        {
          label: "Sample Form",
          url: "/sampleform"
        }
      ]
    };
  }
};
</script>
