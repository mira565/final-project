<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-top">
          <img
            src="./../../assets/images/icons/Search.svg"
            alt="search"
            class="header-top__search"
          />
          <div class="header-top__title">
            <router-link to="/"><h1>Avion</h1></router-link>
          </div>
          <div class="header-top__icons">
            <router-link to="/basket" class="nav-menu__item-link">
              <img
                src="./../../assets/images/icons/Shopping--cart.svg"
                alt="search"
                class="header-icons_first"
              />
              {{ getBasket }}</router-link
            >
            <img
              src="./../../assets/images/icons/User--avatar.svg"
              alt="search"
              class="header-icons_second"
            />
          </div>
        </div>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__item">
              <router-link to="/about" class="nav-menu__item-link"
                >About company</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/products" class="nav-menu__item-link"
                >Products</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/add-product" class="nav-menu__item-link"
                >Admin</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/basket" class="nav-menu__item-link"
                >Basket {{ getBasket }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/header.scss";
</style>
