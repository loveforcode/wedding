<template>
    <div id="frontPage">
    <!-- slider area-->
    <div class="slider-area">
        <div class="bend niceties preview-2">
            <div id="ensign-nivoslider" class="slides">
                <img src="./../assets/img/slider/slide1.jpg" alt="" title="#slider-direction-1"  />
                <img src="./../assets/img/slider/slide2.jpg" alt="" title="#slider-direction-2"  />
                <img src="./../assets/img/slider/slide3.jpg" alt="" title="#slider-direction-3"  />
            </div>
            <!-- direction 1 -->
            <div id="slider-direction-1" class="t-cn slider-direction">
                <div class="slider-content t-cn s-tb slider-1">
                    <div class="title-container s-tb-c title-compress">
                        <p>Creative Wedding Planner</p>
                        <h1 class="title1">We Make Your Dream True</h1>
                        <div class="title2" >Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. </div>
                        <div class="read-more" >
                            <a href="#">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- direction 2 -->
            <div id="slider-direction-2" class="slider-direction">
                <div class="slider-content t-cn s-tb slider-2">
                    <div class="title-container s-tb-c">
                        <p>Happy Wedding Happy Life</p>
                        <h1 class="title1">Wedding Planner & Agency</h1>
                        <div class="title2" >Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. </div>
                        <div class="read-more" >
                            <a href="#">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- direction 1 -->
            <div id="slider-direction-3" class="t-cn slider-direction">
                <div class="slider-content t-cn s-tb slider-1">
                    <div class="title-container s-tb-c title-compress">
                        <p>Creative Wedding Planner</p>
                        <h1 class="title1">We Make Your Dream True</h1>
                        <div class="title2" >Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. </div>
                        <div class="read-more" >
                            <a href="#">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- slider end-->
    <!-- Home Page Our Service Section Area Start Here -->
    <div class="home-our-service-area section-spacing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="template-section-area">
                        <h2>What We Do</h2>
                        <p> Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries, but also the leap iining esse</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-single-service-area">
                        <div class="single-services-area">
                            <div class="service-icon">
                                <img src="./../assets/img/services/service1.png" alt="">
                            </div>
                            <h3><router-link :to="'/single-services'" tag="a">Planning</router-link></h3>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.</p>
                            <div class="read-more">
                                <router-link :to="'/single-services'" tag="a">Read More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-single-service-area">
                        <div class="single-services-area">
                            <div class="service-icon">
                                <img src="./../assets/img/services/service2.png" alt="">
                            </div>
                            <h3><router-link :to="'/single-services'" tag="a">Decore</router-link></h3>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.</p>
                            <div class="read-more">
                                <router-link :to="'/single-services'" tag="a">Read More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-single-service-area">
                        <div class="single-services-area">
                            <div class="service-icon">
                                <img src="./../assets/img/services/service3.png" alt="">
                            </div>
                            <h3><router-link :to="'/single-services'" tag="a">Consulting</router-link></h3>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.</p>
                            <div class="read-more">
                                <router-link :to="'/single-services'" tag="a">Read More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page Our Service Section Area End Here -->
    <!-- Home Page About Section Area Start Here -->
    <div class="home-page-about-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="about-us-content">
                        <h2>About <span>Us</span></h2>
                        <p><span>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries.</span></p>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esseSimply dummy text of the printing and typesetting industry.</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esseSimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="about-us-feature-image">
                        <img src="./../assets/img/about-feature.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page About Section Area End Here -->
    <!-- Home Page Our Service Area Start Here -->
    <div class="home-page-our-service">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="template-section-area">
                        <h2>Our Services</h2>
                        <p> Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries, but also the leap iining esse</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="services-area">
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_1.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Flowers</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_3.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Cakes</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_3.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Cars</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_1.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Flowers</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_3.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Cars</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_1.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Flowers</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-service">
                        <div class="media">
                            <div class="pull-left">
                                <router-link :to="'/single-services'" tag="a">
                                    <img class="media-object" src="../assets/img/services/services_3.png" alt="...">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading"><router-link :to="'/single-services'" tag="a">Cakes</router-link></h4>
                                <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page Our Service Area End Here -->
    <!-- Home Page Banner Area Start Here -->
    <div class="home-page-banner-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <h1>We Make Your Dream Come Ture</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page Banner Area End Here -->
    <!-- Home Page Portfolio Area Start Here -->
    <div class="home-portfolio-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="template-section-area">
                        <h2>Our Portfolio</h2>
                        <p> Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries, but also the leap iining esse.</p>
                    </div>
                </div>
            </div>
            <div class="row main-portfolio-section">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <div id="dg-container" class="dg-container">
                        <div class="dg-wrapper">
                            <a href="#"><img src="../assets/img/portfolio/portfolio_1.jpg" alt="image01"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_2.jpg" alt="image02"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_3.jpg" alt="image03"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_4.jpg" alt="image04"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_5.jpg" alt="image04"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_6.jpg" alt="image04"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_7.jpg" alt="image04"></a>
                            <a href="#"><img src="../assets/img/portfolio/portfolio_8.jpg" alt="image04"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page Portfolio Area End Here -->
    <!-- Home Page Team Start Here -->
    <div class="home-page-team-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="template-section-area">
                        <h2>Creative Team</h2>
                        <p> Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries, but also the leap iining esse.</p>
                    </div>
                </div>
            </div>
            <div class="row total-team">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-team-area">
                        <div class="single-team-area">
                            <a href="single-team.html"><img src="../assets/img/team/team_1.png" alt=""></a>
                            <div class="details">
                                <a href="single-team.html">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="team-detals-area">
                        <h3><a href="single-team.html">Tina Jahan</a></h3>
                        <p class="designation">Wedding Co0rdinator</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-team-area">
                        <div class="single-team-area">
                            <a href="single-team.html"><img src="../assets/img/team/team_2.png" alt=""></a>
                            <div class="details">
                                <a href="single-team.html">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="team-detals-area">
                        <h3><a href="single-team.html">Kaji Fahim</a></h3>
                        <p class="designation">Wedding Planner</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="total-team-area">
                        <div class="single-team-area">
                            <a href="single-team.html"><img src="../assets/img/team/team_3.png" alt=""></a>
                            <div class="details">
                                <a href="single-team.html">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="team-detals-area">
                        <h3><a href="single-team.html">Lija Kiron</a></h3>
                        <p class="designation">Wedding Cordinator</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Home Page Team End Here -->
    <!-- Home Page Store Start Here -->
        <!-- Home Page Testimonial Area start Here -->
        <div class="home-page-testimonial-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                        <div class="home-testimonial">
                            <div class="single-testimonial">
                                <div class="team-img">
                                    <img src="../assets/img/testimonial/testimonial_1.png" alt="">
                                </div>
                                <h3>Mr.Mamunnu</h3>
                                <p class="designation">CEO</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                            <div class="single-testimonial">
                                <div class="team-img">
                                    <img src="../assets/img/testimonial/testimonial_2.png" alt="">
                                </div>
                                <h3>Ms.Israt Jahan</h3>
                                <p class="designation">Team Leader</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                            <div class="single-testimonial">
                                <div class="team-img">
                                    <img src="../assets/img/testimonial/testimonial_3.png" alt="">
                                </div>
                                <h3>Mr.Mamunnu</h3>
                                <p class="designation">CEO</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                            <div class="single-testimonial">
                                <div class="team-img">
                                    <img src="../assets/img/testimonial/testimonial_4.png" alt="">
                                </div>
                                <h3>Mr.Kaji Fahim</h3>
                                <p class="designation">CEO</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                            <div class="single-testimonial">
                                <div class="team-img">
                                    <img src="../assets/img/testimonial/testimonial_1.png" alt="">
                                </div>
                                <h3>Mr.Mamunnu</h3>
                                <p class="designation">CEO</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home Page Testimonial Area End Here -->
        <!-- Home Page Blog Start Here -->
        <div class="home-page-latest-blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-md-12 col-sm-12 col-xs-12 text-center">
                        <div class="template-section-area">
                            <h2>Latest Blogs</h2>
                            <p> Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived not only five centuries, but also the leap iining esse.</p>
                        </div>
                    </div>
                </div>
                <div class="total-blog-content-area">
                    <div class="row">
                        <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12">
                            <div class="single-blog">
                                <router-link :to="'/single-services'" tag="a"><img src="../assets/img/blog/blog_1.jpg" alt=""></router-link>
                                <div class="details">
                                    <router-link :to="'/single-services'" tag="a"><i class="fa fa-link" aria-hidden="true"></i></router-link>
                                </div>
                                <div class="date"><ul>
                                    <li>01, Jul <span> 2016</span></li>
                                </ul>
                                </div>
                                <h3><router-link :to="'/single-services'" tag="a">Blog Title Here</router-link></h3>
                                <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                <div class="blog-content">
                                    <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12">
                            <div class="single-blog">
                                <router-link :to="'/single-services'" tag="a"><img src="../assets/img/blog/bolg_2.jpg" alt=""></router-link>
                                <div class="details">
                                    <router-link :to="'/single-services'" tag="a"><i class="fa fa-link" aria-hidden="true"></i></router-link>
                                </div>
                                <div class="date">
                                    <ul>
                                        <li>01, Jun <span> 2016</span></li>
                                    </ul>
                                </div>
                                <h3><router-link :to="'/single-services'" tag="a">Blog Title Here</router-link></h3>
                                <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                <div class="blog-content">
                                    <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-md-4 col-sm-4 col-xs-12">
                            <div class="single-blog">
                                <router-link :to="'/single-services'" tag="a"><img src="../assets/img/blog/blog_3.jpg" alt=""></router-link>
                                <div class="details">
                                    <router-link :to="'/single-services'" tag="a"><i class="fa fa-link" aria-hidden="true"></i></router-link>
                                </div>
                                <div class="date"><ul>
                                    <li>01, May <span> 2016</span></li>
                                </ul>
                                </div>
                                <h3><router-link :to="'/single-services'" tag="a">Blog Title Here</router-link></h3>
                                <p><span>by</span> admin <span> &nbsp;&nbsp;  01</span> comments</p>
                                <div class="blog-content">
                                    <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texen book. It has survived.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home Page Blog End Here -->
    <!-- Footer Area End Here -->
    </div>
</template>
<script>

</script>
<style>

</style>