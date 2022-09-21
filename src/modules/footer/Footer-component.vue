<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <div class="footer-nav__first">
          <div class="footer-nav__first-explore">
            <h6 class="footer-nav__first-title">Menu</h6>
            <p class="footer-nav__first-text">New arrivals</p>
            <p class="footer-nav__first-text">Best Sellers</p>
            <p class="footer-nav__first-text">Recently viewed</p>
            <p class="footer-nav__first-text">Popular this week</p>
            <p class="footer-nav__first-text">
              <router-link to="/products" class="nav-menu__item-link"
                >All products</router-link
              >
            </p>
          </div>
          <div class="footer-nav__first-pages">
            <h6 class="footer-nav__first-title">Categories</h6>
            <p class="footer-nav__first-text">Crockery</p>
            <p class="footer-nav__first-text">Furniture</p>
            <p class="footer-nav__first-text">Homeware</p>
            <p class="footer-nav__first-text">Plant pots</p>
            <p class="footer-nav__first-text">Chairs</p>
            <p class="footer-nav__first-text">Crockery</p>
          </div>
          <div class="footer-nav__first-pages">
            <h6 class="footer-nav__first-title">Our company</h6>
            <p class="footer-nav__first-text">
              <router-link to="/about" class="nav-menu__item-link"
                >About us</router-link
              >
            </p>
            <p class="footer-nav__first-text">Vacancies</p>
            <p class="footer-nav__first-text">Contact us</p>
            <p class="footer-nav__first-text">Privacy</p>
            <p class="footer-nav__first-text">Returns policy</p>
          </div>
          <div class="footer-nav__first-hours">
            <h6 class="footer-nav__first-title">Join our mailing list</h6>
            <input
              type="text"
              class="footer-nav__first-input"
              placeholder="your@email.com"
            />
            <button class="footer-nav__first-btn btn-dark">Sign up</button>
          </div>
        </div>
        <div class="footer-nav__second">
          <div class="footer-nav__second__logo">
            <h6 class="footer-nav__second-title">Copyright 2022 Avion LTD</h6>
          </div>
          <div class="footer-nav__second-socials">
            <img
              src="../../assets/images/icons/linkedin (2).svg"
              alt="facebook"
              class="footer-nav__second-img"
            />
            <img
              src="../../assets/images/icons/facebook.svg"
              alt="twitter"
              class="footer-nav__second-img"
            />
            <img
              src="../../assets/images/icons/pinterest.svg"
              alt="linked"
              class="footer-nav__second-img"
            />
            <img
              src="../../assets/images/icons/twitter.svg"
              alt="insta"
              class="footer-nav__second-img"
            />
            <img
              src="../../assets/images/icons/instagram.svg"
              alt="insta"
              class="footer-nav__second-img"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/footer.scss";
</style>
