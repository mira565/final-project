<template>
  <section class="products">
    <div class="container">
      <h2 class="products-title">All Products</h2>
      <div class="products-items">
        <div
          class="products-item"
          v-for="(product, index) in getProducts"
          :key="index"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.img" alt="" class="products-item__img" />
            <h2 class="products-item__title">{{ product.title }}</h2>
            <div class="products-item__price">£{{ product.price }}</div>
          </router-link>
        </div>
      </div>

      <button @click="loadMore()" class="btn-light">View Collection</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: "",
      limit: 4,
    };
  },

  created() {
    this.$store.dispatch("getProducts", this.limit);
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProductsFromState;
    },
  },

  methods: {
    loadMore() {
      this.limit = this.limit + 4;

      this.$store.dispatch("getProducts", this.limit);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/products.scss";
</style>
