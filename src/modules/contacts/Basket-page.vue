<template>
  <div class="basket">
    <div class="container">
      <div class="products basket-items">
        <div
          v-for="(basketProduct, index) in getBasket"
          class="products basket-item"
          :key="index"
        >
          <img class="basket-item__img" :src="basketProduct.img" alt="" />
          <div class="basket-item__descr">
            <h3 class="basket-item__title">{{ basketProduct.title }}</h3>
            <h2 class="basket-item__description">{{ basketProduct.descr }}</h2>
            <div class="basket-item__price">£ {{ basketProduct.price }}</div>
          </div>
          <div class="basket-items__quantity">
            <p class="basket-item__quantity">Quantity</p>
            {{ getBasket.quantity }}
          </div>
          <div class="basket-items__quantity">
            <p class="basket-item__quantity">Total</p>
            {{ getBasket.quantity }}
          </div>
        </div>
        <div class="basket-item__total">Total</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/products.scss";
</style>
