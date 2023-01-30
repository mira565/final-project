<template>
  <div class="basket">
    <div class="container">
      <div class="products basket-items">
        <div
          v-for="(basketProduct, index) in getBasket"
          class="products basket-item"
          :key="index"
          @deleteFromCart="deleteFromCart(index)"
        >
          <img class="basket-item__img" :src="basketProduct.img" alt="" />
          <div class="basket-item__descr">
            <h3 class="basket-item__title">{{ basketProduct.title }}</h3>
            <h2 class="basket-item__description">{{ basketProduct.descr }}</h2>
            <div class="basket-item__price">£ {{ basketProduct.price }}</div>
          </div>
          <div class="basket-items__quantity">
            <p class="basket-item__quantity">Quantity</p>
            {{ basketProduct.quantity }}
          </div>
          <div class="basket-items__quantity">
            <span>
              <!-- <span @click="minusItem">-</span> -->
              <p>{{ getBasket.quantity }}</p>
              <!-- <span @click="minusItem">+</span> -->
            </span>
          </div>
        </div>
        <h3 class="basket-item__total">Total</h3>
        <p class="basket-item__sum">{{ cartTotalCost }}</p>
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
    cartTotalCost() {
      let result = [];

      for (let basketProduct of this.getBasket) {
        result.push(basketProduct.quantity * basketProduct.price);
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },
  mounted() {
    this.$set(this.products, "quantity", 1);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/products.scss";
</style>
