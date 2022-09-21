<template>
  <main class="main">
    <section class="hero">
      <div class="hero-container">
        <div class="hero-wrapper">
          <div class="hero-info">
            <h2 class="hero-info__heading">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p class="hero-info__text">
              Shop the new Spring 2022 collection today
            </p>
            <button class="hero-info__btn">View collection</button>
          </div>
        </div>
      </div>
    </section>
    <brand-page></brand-page>
    <products-page></products-page>
    <history-page></history-page>
    <div class="email"><User-mail></User-mail></div>
  </main>
</template>

<script>
import BrandPage from "../about/Brand-page.vue";
import ProductsPage from "../main/components/products/Products-page.vue";
import HistoryPage from "../about/History-page.vue";
import UserMail from "../footer/User-mail.vue";

export default {
  components: {
    BrandPage,
    ProductsPage,
    HistoryPage,
    UserMail,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/main.scss";
</style>
