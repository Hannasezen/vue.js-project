<template>
  <div id="header">
    <div class="container">
      <div class="mobile-wrapper">
        <div class="wrap wrap-logo">
          <!--Header logos-->
          <div class="header__logo desktop-logo">
            <a href="index.html" class="logo" accesskey="t">Template</a>
          </div>
          <div class="header__logo mobile-logo">
            <a href="index.html" class="logo" accesskey="t">TL</a>
          </div>
          <!--Header`s logos end-->
          <!--Header`s auth link and shopping bag link-->
          <div class="auth-cart">
            <!--auth link-->
            <div class="auth">
              <a href="#">E-mail sing up</a>
            </div>
            <!--shopping bag link-->
            <div class="cart">
              <a href="./shopping-cart.html" accesskey="c">
                <span class="cart__img icon-shopping-bag"></span>
                <span>Bag </span><span id="bag-price"></span> (<span id="bag-quantity">0</span>)
              </a>
            </div>         
          </div>
          <!--Header`s auth link and shopping cart link end-->
        </div>
        <!--Header`s burger menu-->
        <div id="burger-btn" class="burger-menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <!--Header`s burger menu end-->
      </div>        
      <div id="header-menu" class="wrap wrap-menu">
        <!--Header`s navigation-->
        <nav class="header__nav">
          <ul class="nav__links">
            <li class="nav__link"><a href="./catalog.html">women</a></li>
            <li class="nav__link"><a href="./catalog.html">men</a></li>
            <li class="nav__link"><a href="./catalog.html">handbags</a></li>
            <li class="nav__link"><a href="./catalog.html">Accessories</a></li>
            <li class="nav__link"><a href="./catalog.html">Sale</a></li>
            <li class="nav__link"><a href="#new-arrivals">New Arrivals</a></li>
            <li class="nav__link"><a href="#footer">Clearance</a></li>
            <li class="nav__link"><a href="#footer">Store Locator</a></li>
          </ul>
        </nav>
        <!--Header`s navigation end-->
        <!--Header`s search form-->
        <form class="search" id="search">
          <input  id="search__input" class="search__input" type="text" placeholder="style name">
          <button class="search__btn" type="submit" accesskey="s">
            <span class="icon-search"></span>
          </button>
        </form>
        <!--Header`s search form end-->
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header {
  width: 100%;
  margin: 0 auto;
  padding: 24px 0;
  font-family: 'OpenSansBold';
  box-shadow: inset 0px -1px 0 0 rgb(229, 229, 229);
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header__logo {
  font-size: 30px;
  margin-bottom: 22px;
}

.mobile-logo {
  display: none;
}

.burger-menu {
  display: none;
  cursor: pointer;
  padding: 28px 0 28px 20px;
  border-left: 1px solid rgb(229, 229, 229);
}

.burger-menu.active .line:first-child {
  background: rgb(241, 74, 88);
  transform: rotate(46deg) translate(3px, 3px);
}

.burger-menu.active .line:nth-child(2) {
  background: rgb(241, 74, 88);
  transform: rotate(-45deg);
}

.burger-menu.active .line:last-child {
  display: none;
}

.line {
  width: 14px;
  height: 2px;
  background-color: rgb(0, 0, 0);
}

.line:nth-last-child(1n + 2) {
  margin-bottom: 3px;
}

.wrap-menu {
  position: relative;
}

.header__nav {
  flex-grow: 1;
}

.nav__links {
  max-width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 13px;
  text-transform: capitalize;
}

.nav__link {
  line-height: 2;
}

.nav__link:last-child {
  margin-right: 0;
}

.header__forms {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  font-family: 'OpenSans';
  font-size: 12px;
}

.auth-cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  letter-spacing: 0.4px;
}

.auth {
  margin-right: 56px;
}

.cart__img {
  margin-right: 16px;
}

.search {
  width: 118px;
  margin-left: 110px;
  position: absolute;
  right: 0;
  top: 0;
  background: white;
  box-shadow: -10px 0 50px 20px white;
}

.search__input {
  width: calc(100% - 25px);
}

.search:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgb(229, 229, 229);
}

.search__btn {
  position: absolute;
  right: 0;
  top: 2px;
}

.search__input::placeholder {  
  font-family: 'OpenSans';
  font-size: 12px;
  text-transform: capitalize;
  color: rgb(168, 168, 168);
}
</style>
