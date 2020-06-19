<template lang="pug">
  #app
    header.page-header
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
        .row
          .col
            b-form-input(v-model="searchString" @keyup.enter="getPackagesFromApi" size="lg" placeholder="Enter package name")

    main.page-content(v-if="packages.length > 0")
      .container
        .row
          .col
            .overflow-auto
              b-table#results-table(
                :items="packages" 
                :fields="fields" 
                :per-page="perPage" 
                :current-page="currentPage" 
                hover 
                bordered
                striped)
                  template(v-slot:cell(show_details)="row")
                    b-button(size="sm" v-b-modal.my-modal @click="showDetails(row)") Details
                  template(v-slot:cell(package.date)="data")
                    b.text-info {{ data.value | date("date") }}
            b-pagination(
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="results-table")
            
            b-modal(id="my-modal" title="Details" size="xl" hide-footer, v-if="currentPackage.name")
              b-jumbotron.packet-window
                template(v-slot:header) 
                  |{{ currentPackage.name }}
                  b-badge.packet-window__version {{ currentPackage.version }}
                template(v-slot:lead) {{ currentPackage.description }}
                b-avatar.mr-3
                b-link(:href="currentPackage.author.url" target="blank") {{ currentPackage.author.name }}
                hr.my-4
                div.keywords
                  h4 
                    |Last published: 
                    b-badge {{ currentPackage.date | date("date") }}
                hr.my-4
                div.keywords
                  h4 Keywords:
                  b-badge.keywords__badge(variant="success" v-for="item in currentPackage.keywords") {{ item }}
                hr.my-4
                div.links
                  h4 Links:
                  b-button-group
                    b-button.links__item(:href="currentPackage.links.npm" target="blank"  variant="danger") npm
                    b-button.links__item(:href="currentPackage.links.homepage" target="blank"  variant="warning") homepage
                    b-button.links__item(:href="currentPackage.links.repository" target="blank"  variant="info") repository
                    b-button.links__item(:href="currentPackage.links.bugs" target="blank"  variant="dark") bugs

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
      perPage: 10,
      currentPage: 1,
      currentPackage: {},
      fields: [
        {
          key: "package.name",
          label: "Name",
          sortable: false
        },
        {
          key: "package.version",
          label: "Version",
          sortable: false
        },
        {
          key: "package.description",
          label: "Description",
          sortable: false
        },
        {
          key: "package.date",
          label: "Last published",
          sortable: false
        },
        "show_details"
      ]
    };
  },
  computed: {
    rows() {
      return this.$store.state.packages.length;
    },
    packages() {
      return this.$store.state.packages;
    }
  },
  methods: {
    getPackagesFromApi() {
      if (this.searchString !== "") {
        this.$store.dispatch("getAllPackages", this.searchString);
      }
    },
    showDetails(row) {
      this.currentPackage = row.item.package;
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
.keywords__badge {
  font-size: 16px;
  margin-right: 10px;
}
.links__item {
  text-transform: uppercase;
}
.page-header {
  margin-bottom: 15px;
}
.packet-window {
  @media screen and (max-width: 599px) {
    h1 {
      font-size: 36px;
    }
  }
}
.packet-window__version {
  margin-left: 15px;
}
</style>
