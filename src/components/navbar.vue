<template>
    <header>
        <div class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div class="logo-area">
                            <router-link :to="'/home'" tag="a">Home<img src="./../assets/img/logo.png" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="main-menu-area">
                            <nav>
                                <ul id="nav">
                                    <li><router-link :to="'/home'" tag="a">Home</router-link></li>
                                    <li><router-link :to="'/about'" tag="a">About</router-link></li>
                                    <li>
                                        <router-link :to="'/services'" tag="a">Services</router-link>
                                        <ul>
                                            <li><router-link :to="'/single-services'" tag="a">Single Services</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link :to="'/blog'" tag="a">Blog</router-link></li>
                                    <li><router-link :to="'/team'" tag="a">Team</router-link></li>
                                    <li><router-link :to="'/contact'" tag="a">Contact</router-link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 hidden-sm hidden-xs text-right">
                        <div class="cart-area">
                            <ul>
                                <li class="search-icons"><i class="fa fa-search" aria-hidden="true"></i>
                                    <div class="search-box">
                                        <form>
                                            <input type="text" class="search-text" placeholder="Search......" required>
                                        </form>
                                    </div>
                                </li>
                                <li class="cart-area"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>0</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li><router-link :to="'/home'" tag="a">Home</router-link></li>
                                    <li><router-link :to="'/about'" tag="a">About</router-link></li>
                                    <li><router-link :to="'/services'" tag="a">Services</router-link>
                                        <ul>
                                            <li><router-link :to="'/single-services'" tag="a">Single Services</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link :to="'/blog'" tag="a">Blog</router-link></li>
                                    <li><router-link :to="'/team'" tag="a">Team</router-link></li>
                                    <li><router-link :to="'/contact'" tag="a">Contact</router-link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

</script>
<style>

</style>