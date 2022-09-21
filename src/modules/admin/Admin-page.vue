<template>
  <div class="add-products">
    <div class="container">
      <div class="form">
        <label for="image">Enter image URL</label>
        <input type="text" id="image" v-model="products.img" />
        <label for="title">Title</label>
        <input type="text" id="title" v-model="products.title" />
        <label for="description">Description</label>
        <textarea id="description" v-model="products.descr"> </textarea>
        <label for="title">Price</label>
        <input type="text" id="price" v-model="products.price" />
        <button @click="addProducts()">Add product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        title: "",
        img: "",
        descr: "",
        price: "",
        height: "",
        width: "",
        depth: "",
      },
    };
  },
  methods: {
    addProducts() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.products),
      }).then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/admin.scss";
</style>
