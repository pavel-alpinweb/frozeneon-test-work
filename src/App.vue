<template lang="pug">
  #app
    header.page-header
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
            h1.h1.page-title App for search of npm packages
        .row
          .col
            b-form-input.search-input(v-model="searchString" type="search" @keyup.enter="getPackagesFromApi" size="lg" placeholder="Enter package name or keyword")
        .row
          .col
            label(for="from-datepicker") Packages from
            b-form-datepicker(id="from-datepicker" v-model="packagesFromDate" reset-button)
          .col
            label(for="to-datepicker") Packages to
            b-form-datepicker(id="to-datepicker" v-model="packagesToDate" reset-button)
        .row(v-if="isLoading")
          .col
            b-spinner.spinner(label="Spinning")
        .row(v-if="isNotFound && !isLoading")
          .col 
            b-alert.results-alert(variant="warning" show) Not Found
    main.page-content(v-if="packages.length > 0 && !isLoading")
      .container
        .row
          .col
            p.h4 Sort by:
            b-button-group.sorting
              b-button(@click="sortOption='base'" ) Base
              b-button(@click="sortOption='quality'" variant="success") Quality
              b-button(@click="sortOption='popularity'" variant="info") Popularity
              b-button(@click="sortOption='maintenance'" variant="warning") Maintenance
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
              b-link(href="https://github.com/pavel-alpinweb" target="blank") Author's Github
          .col.col-lg-2
            p.h6 
              b-link(href="https://alpinweb.com" target="blank") Author's Website
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
      isLoading: false,
      isNotFound: false,
      searchString: "",
      sortOption: "base",
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
      const sortArray = this.sortArray(
        this.$store.state.packages,
        this.sortOption
      );
      const filteredArrayByDate = this.filterArrayByDate(sortArray);
      return filteredArrayByDate;
    }
  },
  mounted() {
    this.$eventBus.$on("endLoading", data => {
      this.isLoading = data.isLoading;
      this.sortOption = data.sortOption;
      if (this.packages.length === 0) {
        this.isNotFound = true;
      } else {
        this.isNotFound = false;
      }
    });
    this.$eventBus.$on("showMessage", data => {
      this.isLoading = data.isLoading;
      this.$bvToast.toast(data.text, {
        title: "Message:",
        variant: data.variant,
        autoHideDelay: 5000,
        solid: true
      });
    });
  },
  methods: {
    getPackagesFromApi() {
      if (this.searchString !== "") {
        this.isLoading = true;
        this.$store.dispatch("getAllPackages", this.searchString);
      }
    },
    showDetails(row) {
      this.currentPackage = row.item.package;
    },
    sortArray(array, option) {
      if (option === "base") {
        return array.sort((a, b) => {
          return b.searchScore - a.searchScore;
        });
      }
      return array.sort((a, b) => {
        return b.score.detail[option] - a.score.detail[option];
      });
    },
    filterArrayByDate(array) {
      let filtredArray = array;
      if (this.packagesFromDate !== "") {
        const fromDate = new Date(this.packagesFromDate);
        filtredArray = array.filter(item => {
          const itemDate = new Date(item.package.date);
          if (itemDate >= fromDate) {
            return item;
          }
        });
        if (filtredArray.length === 0) {
          this.isNotFound = true;
        } else {
          this.isNotFound = false;
        }
      }
      if (this.packagesToDate !== "") {
        const toDate = new Date(this.packagesToDate);
        filtredArray = filtredArray.filter(item => {
          const itemDate = new Date(item.package.date);
          if (itemDate <= toDate) {
            return item;
          }
        });
        if (filtredArray.length === 0) {
          this.isNotFound = true;
        } else {
          this.isNotFound = false;
        }
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
.page-title {
  text-transform: uppercase;
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
.spinner {
  margin-top: 15px;
}
.results-alert {
  margin-top: 15px;
}
.sorting {
  margin-bottom: 15px;
}
</style>
