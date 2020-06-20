<template lang="pug">
  b-jumbotron.packet-window(v-if="currentPackage.name")
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
      b-badge.keywords__badge(variant="success" v-for="(item, index) in currentPackage.keywords" :key="index") {{ item }}
    hr.my-4
    div.links
      h4 Links:
      b-button-group
        b-button.links__item(:href="currentPackage.links.npm" target="blank"  variant="danger") npm
        b-button.links__item(:href="currentPackage.links.homepage" target="blank"  variant="warning") homepage
        b-button.links__item(:href="currentPackage.links.repository" target="blank"  variant="info") repository
        b-button.links__item(:href="currentPackage.links.bugs" target="blank"  variant="dark") bugs
</template>

<script>
export default {
  props: {
    currentPackage: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.packet-window {
  h1 {
    font-size: 48px;
    @media screen and (max-width: 599px) {
      font-size: 36px;
    }
  }
}
.packet-window__version {
  margin-left: 15px;
}
.keywords__badge {
  font-size: 16px;
  margin-right: 10px;
}
.links__item {
  text-transform: uppercase;
}
</style>
