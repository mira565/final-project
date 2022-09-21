<template>
  <div class="details">
    <div class="container">
      <div class="details-item">
        <div class="details-item__img">
          <img class="details-item__img" :src="products.img" alt="" />
        </div>
        <div class="details-info">
          <h2 class="details-title">{{ products.title }}</h2>
          <p class="details-price">£{{ products.price }}</p>
          <p class="details-description">Products description</p>
          <p class="details-description__text">{{ products.descr }}</p>
          <p class="details-dimensions">Dimensions</p>
          <div class="details-box">
            <div class="details-size">
              <p class="details-size__title">Height</p>
              <p class="details-size__number">{{ products.height }}cm</p>
            </div>
            <div class="details-size">
              <p class="details-size__title">Width</p>
              <p class="details-size__number">{{ products.width }}cm</p>
            </div>
            <div class="details-size">
              <p class="details-size__title">Depth</p>
              <p class="details-size__number">{{ products.depth }}cm</p>
            </div>
          </div>

          <p class="details-description">Quantity</p>

          <div class="details-quantity">
            <router-link to="/basket" class="details-quantity">{{
              getBasket.length
            }}</router-link>
          </div>

          <button class="button btn-dark" @click="addToBasket(products)">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <Products-page></Products-page>
    <brand-page></brand-page>
  </div>
</template>

<script>
import BrandPage from "../../../about/Brand-page.vue";
import ProductsPage from "./Products-page.vue";

export default {
  components: { ProductsPage, BrandPage },
  data() {
    return {
      productId: this.$route.params,
      products: "",
      data: [],
    };
  },
  created() {
    fetch(`http://localhost:3000/products/${this.productId.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
        console.log(this.products);
      });
  },
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
  methods: {
    addToBasket(product) {
      this.getBasket.push(product);
      this.$store.commit("SET_BASKET", this.getBasket);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/products.scss";
</style>
