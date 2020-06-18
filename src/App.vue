<template lang="pug">
  #app
    header.page-header
      .container
        .row
          .col
            img(alt="Vue logo" src="./assets/logo.png")
        .row
          .col
            b-form-input(v-model="searchString" size="lg" placeholder="Enter package name")

    main.page-content
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
                bordered
                striped)
                  template(v-slot:cell(show_details)="row")
                    b-button(size="sm" v-b-modal.modal-1) Details
                  template(v-slot:cell(package.date)="data")
                    b.text-info {{ data.value | date("date") }} 
            b-pagination(
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="results-table")
            
            b-modal(id="modal-1" title="Details" size="xl" hide-footer)
              b-jumbotron.packet-window
                template(v-slot:header) 
                  |Name - sass
                  b-badge.packet-window__version 1.26.8
                template(v-slot:lead)
                  |description - A pure JavaScript implementation of Sass.
                b-avatar.mr-3
                b-link(href="#") Natalie Weizenbaum
                hr.my-4
                div.keywords
                  h4 
                    |Last published: 
                    b-badge 05.06.2020
                hr.my-4
                div.keywords
                  h4 Keywords:
                  b-badge.keywords__badge(variant="success") style
                  b-badge.keywords__badge(variant="success") scss
                  b-badge.keywords__badge(variant="success") sass
                  b-badge.keywords__badge(variant="success") preprocessor
                  b-badge.keywords__badge(variant="success") css
                hr.my-4
                div.links
                  h4 Links:
                  b-button-group
                    b-button.links__item(href="#"  variant="danger") npm
                    b-button.links__item(href="#"  variant="warning") homepage
                    b-button.links__item(href="#"  variant="info") repository
                    b-button.links__item(href="#"  variant="dark") bugs
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
          key: "package.date",
          label: "Last published",
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
