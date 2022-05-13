<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container
        class="spacing-playground pa-10"
        fluid
      >
        <v-select 
          :items="cities" 
          label="Избери град"
          :disabled="citiesLoading"
          item-text="name" 
          item-value="id"
          ></v-select>

        <template>
          <v-data-table
            :headers="headers"
            :items="offices"
            :items-per-page="10"
            :loading="oficessLoading"
            class="elevation-1"
          ></v-data-table>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  computed: { 
    oficessLoading() {
      return this.$store.state.offices.loading;
    },
    offices () { 
      console.log(this.$store.state.offices.data.length > 0 ? this.$store.state.offices.data[4]: this.$store.state.offices.data)
      return this.$store.state.offices.data; 
    } ,
    cities() {
      return this.$store.state.cities.data;
    },
    citiesLoading() {
      return this.$store.state.cities.loading;
    },
  },

  data: () => ({
    headers: [
      { 
        text: 'Име на офиса', 
        align: 'start', 
        sortable: true, 
        value: 'name', 
      },
      {
        text: "Адрес",
        sortable: false,
        value: "address"
      }

    ]
  }),
};
</script>
