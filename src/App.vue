<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <!-- <main-component></main-component> -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
import FooterComponent from "./modules/footer/Footer-component.vue";
// import MainComponent from "./modules/main/Main-page.vue";

export default {
  components: {
    HeaderComponent,

    FooterComponent,
    // MainComponent,
  },
};
</script>

<style lang="scss">
@import "./assets/css/vars.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $SFont;
  font-weight: 400;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $CDFont;
  font-weight: 400;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  border: 0;
  font-family: $CDFont;
  padding: 16px 32px;
  &:hover {
    cursor: pointer;
    background-color: darkslateblue;
    color: white;
  }
}
.btn-dark {
  color: #fff;
  background-color: $darkprimary;
  font-family: $SFont;
  font-size: 16px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
