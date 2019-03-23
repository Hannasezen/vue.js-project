<template>
  <div id="footer" class="footer-wrapper">
    <div class="footer container">
      <!--footer copyrights-->
      <div class="footer__copyrights">
        &copy; 2010–2019, <a href="#">The Template Group inc.</a>
      </div>
      <!--footer share count-->
      <div class="footer__share">share
        <span class="shares__number">1 437</span>
      </div>
      <!--socials block for mobile-->
      <div class="footer__socials">
        <a href="https://www.facebook.com/" class="socials__fb">
          <span class="icon-social-facebook"></span>
        </a>
        <a href="https://twitter.com/" class="socials__twit">
          <span class="icon-social-twitter"></span>
        </a>
      </div>
      <!--socials block for mobile end-->
      <!--footer navigation-->
      <nav class="footer__nav">
        <ul class="nav__items">
          <li class="nav__item"><router-link to="/">Legal notice</router-link></li>
          <li class="nav__item"><router-link to="/">Privacy policy</router-link></li>
          <li class="nav__item"><router-link to="/">Site map</router-link></li>
        </ul>
      </nav>
      <!--footer navigation end-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

