<template>
  <div class="box">
    <div class="container">
      <div class="box-email">
        <h2 class="box-email__title">Join the club and get the benefits</h2>
        <p class="box-email__text">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div class="box-email__options">
          <div class="box-email__option">
            <img
              src="./../../assets/images/icons/Checkmark--filled.svg"
              alt="checkmark"
              class="box-email__svg"
            />
            <span class="box-email__option-text">Exclusive offers</span>
          </div>
          <div class="box-email__option">
            <img
              src="./../../assets/images/icons/Checkmark--filled.svg"
              alt="checkmark"
              class="box-email__svg"
            />
            <span class="box-email__option-text">Exclusive offers</span>
          </div>
          <div class="box-email__option">
            <img
              src="./../../assets/images/icons/Checkmark--filled.svg"
              alt="checkmark"
              class="box-email__svg"
            />
            <span class="box-email__option-text">Exclusive offers</span>
          </div>
        </div>
        <input
          class="box-email__input"
          type="text"
          id="email"
          placeholder="your@email.com"
        /><span><button class="btn btn-dark">Sign up</button></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/email.scss";
</style>
