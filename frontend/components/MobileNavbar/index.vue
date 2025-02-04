<template>
  <v-bottom-navigation class="md:hidden" :elevation="10">
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>

      <span>Recent</span>
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-account </v-icon>

      <span>Alunos</span>
    </v-btn>
  </v-bottom-navigation>
</template>
