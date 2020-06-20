<template lang="pug">
  #app
    header.page-header
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
        .row
          .col
            b-form-input.search-input(v-model="searchString" @keyup.enter="getPackagesFromApi" size="lg" placeholder="Enter package name")
        .row
          .col
            label(for="from-datepicker") Packages from
            b-form-datepicker(id="from-datepicker" v-model="packagesFromDate")
          .col
            label(for="to-datepicker") Packages to
            b-form-datepicker(id="to-datepicker" v-model="packagesToDate")
        //- .row
        //-   .col
        //-     b-spinner(label="Spinning")
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
            
            b-modal(id="my-modal" title="Details" size="xl" hide-footer)
              Package(:currentPackage="currentPackage")
    footer.page-footer
      .container
        .row
          .col
            .app-author
              img.portret-photo.img-thumbnail(alt="Pavel Photo" src="./assets/profile.jpg")
              p.h4 Pavel Bezdornov
        .row.justify-content-md-center
          .col.col-lg-2
            p.h6 
              b-link(href="https://github.com/pavel-alpinweb" target="blank") Author Github
          .col.col-lg-2
            p.h6 
              b-link(href="https://alpinweb.com" target="blank") Author Website
</template>

<script>
import Package from "./components/package";

export default {
  name: "App",
  components: {
    Package
  },
  data() {
    return {
      searchString: "",
      perPage: 10,
      currentPage: 1,
      currentPackage: {},
      packagesFromDate: "",
      packagesToDate: "",
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
      return this.packages.length;
    },
    packages() {
      return this.filterTradeByDate(this.$store.state.packages);
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
    },
    filterTradeByDate(array) {
      let filtredArray = array;
      if (this.packagesFromDate !== "") {
        const fromDate = new Date(this.packagesFromDate);
        filtredArray = array.filter(item => {
          const itemDate = new Date(item.package.date);
          if (itemDate >= fromDate) {
            return item;
          }
        });
      }
      if (this.packagesToDate !== "") {
        const toDate = new Date(this.packagesToDate);
        filtredArray = filtredArray.filter(item => {
          const itemDate = new Date(item.package.date);
          if (itemDate <= toDate) {
            return item;
          }
        });
      }
      return filtredArray;
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-header {
  margin-bottom: 15px;
}
.page-footer {
  margin-top: auto;
  padding-bottom: 50px;
}
.search-input {
  margin-bottom: 15px;
}
.portret-photo {
  border-radius: 50%;
}
</style>
