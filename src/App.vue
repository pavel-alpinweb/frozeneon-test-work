<template lang="pug">
  #app
    header.page-header.mb-15  
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
        .row
          .col
            b-form-input(v-model="searchString" placeholder="Enter package name")

    main.page-content.mt-15
      .container
        .row
          .col
            .overflow-auto
              b-table#results-table(
                :items="items" 
                :fields="fields" 
                :per-page="perPage" 
                :current-page="currentPage" 
                hover 
                striped)
                  template(v-slot:cell(show_details)="row")
                    b-button(size="sm") Details
                  template(v-slot:cell(package.date)="data")
                    b.text-info {{ data.value | date() }} 
              b-pagination.mt-15(
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
      perPage: 5,
      currentPage: 1,
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
          key: "package.author.name",
          label: "Author",
          sortable: false
        },
        {
          key: "package.date",
          label: "Date",
          sortable: false
        },
        "show_details"
      ],
      items: [
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
          }
        },
        {
          package: {
            name: "sass",
            scope: "unscoped",
            version: "1.26.8",
            description: "A pure JavaScript implementation of Sass.",
            date: "2020-06-05T00:43:04.279Z",
            author: {
              name: "Natalie Weizenbaum",
              email: "nweiz@google.com",
              url: "https://github.com/nex3"
            }
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
