<template>
  <about class="about">
    <div class="container">
      <h2 class="about-title">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h2>
      <div class="about-first">
        <div class="about-first__box">
          <h2 class="about-first__title">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p class="about-first__text">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <img
          class="about-first__img"
          src="../../assets/images/image/p.3 flowers.jpg"
          alt=""
        />
      </div>
      <div class="about-second">
        <img
          class="about-first__img"
          src="../../assets/images/image/p.3 sofa.jpg"
          alt=""
        />
        <div class="about-first__box">
          <h2 class="about-first__title">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h2>
          <p class="about-first__text">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
      </div>
    </div>
    <brand-page></brand-page>
    <div class="email"><User-mail></User-mail></div>
  </about>
</template>

<script>
import BrandPage from "./Brand-page.vue";
import UserMail from "../footer/User-mail.vue";
export default {
  components: {
    BrandPage,
    UserMail,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/about.scss";
</style>
