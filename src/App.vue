<template lang="pug">
  #app
    header.page-header  
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
        .row
          .col
            b-form-input.mb-15(v-model="searchString" placeholder="Enter package name")
            
    main.page-content
      .container
        .row
          .col
            .overflow-auto
              b-table#results-table.mb-15(
                :items="items" 
                :fields="fields" 
                :per-page="perPage" 
                :current-page="currentPage" 
                hover 
                striped)
              b-pagination(
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="results-table")

    footer.page-footer
      .container
        .row
          .col
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchString: "",
      perPage: 2,
      currentPage: 1,
      fields: [
        {
          key: "package.id",
          sortable: true
        },
        {
          key: "package.first_name",
          sortable: true
        },
        {
          key: "package.last_name",
          sortable: false
        }
      ],
      items: [
        {
          package: {
            id: 1,
            first_name: "Fred",
            last_name: "Flintstone"
          }
        },
        {
          package: {
            id: 1,
            first_name: "Fred",
            last_name: "Flintstone"
          }
        },
        {
          package: {
            id: 1,
            first_name: "Fred",
            last_name: "Flintstone"
          }
        },
        {
          package: {
            id: 1,
            first_name: "Fred",
            last_name: "Flintstone"
          }
        },
        {
          package: {
            id: 1,
            first_name: "Fred",
            last_name: "Simpson"
          }
        }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
