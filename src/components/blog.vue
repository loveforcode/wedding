<template>
    <div id="blog">
    <!-- Page Header Section Start Here -->
    <div class="page-header-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="header-page">
                        <h1>Latest Blog </h1>
                        <ul>
                            <li><router-link :to="'/home'" tag="a">Home</router-link></li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header Section End Here -->
    <!-- Blog Area Start Here -->
    <div class="single-services-area blog-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-md-3 col-sm-3 col-xs-12">
                    <div class="sidebar-area">
                        <div class="single-sidebar">
                            <h2>Search</h2>
                            <div id="custom-search-input">
                                <div class="input-group col-md-12 serach-box">
                                    <input type="text" class="search-query form-control" placeholder="Search Here">
                                    <button class="btn" type="button">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="single-sidebar padding-top">
                            <h2>Categories</h2>
                            <ul>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Flower</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Cakes</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Cars</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Wedding Dresses</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Wedding Venu</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Ring & Jewelry</a></li>
                            </ul>
                        </div>
                        <div class="single-sidebar padding-top">
                            <h2>Archives</h2>
                            <ul>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> February</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 2016(3)</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> March</a></li>
                                <li><a href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>2016(3)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-md-9 col-sm-9 col-xs-12">
                    <div class="blog-page-content">
                        <div class="single-blog">
                            <div class="media">
                                <div class="pull-left">
                                    <a href="single-blog.html"><img src="./../assets/img/blog/bolg_2.jpg" alt=""></a>
                                    <div class="details">
                                        <a href="single-team.html"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="date">
                                        <ul>
                                            <li>01, Jun <span> 2016</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="single-blog.html">Blog Title Here</a></h4>
                                    <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                    <div class="blog-content">
                                        <p>Fimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <div class="read-more">
                                            <a href="single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-blog padding-top">
                            <div class="media">
                                <div class="pull-left">
                                    <a href="single-blog.html"><img src="./../assets/img/blog/blog_1.jpg" alt=""></a>
                                    <div class="details">
                                        <a href="single-team.html"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="date">
                                        <ul>
                                            <li>01, Jun <span> 2016</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="single-blog.html">Blog Title Here</a></h4>
                                    <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                    <div class="blog-content">
                                        <p>Fimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <div class="read-more">
                                            <a href="single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-blog padding-top">
                            <div class="media">
                                <div class="pull-left">
                                    <a href="single-blog.html"><img src="./../assets/img/blog/blog_3.jpg" alt=""></a>
                                    <div class="details">
                                        <a href="single-team.html"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="date">
                                        <ul>
                                            <li>01, Jun <span> 2016</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="single-blog.html">Blog Title Here</a></h4>
                                    <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                    <div class="blog-content">
                                        <p>Fimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <div class="read-more">
                                            <a href="single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-blog padding-top">
                            <div class="media">
                                <div class="pull-left">
                                    <a href="single-blog.html"><img src="./../assets/img/blog/blog_4.jpg" alt=""></a>
                                    <div class="details">
                                        <a href="single-team.html"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                    <div class="date">
                                        <ul>
                                            <li>01, Jun <span> 2016</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="single-blog.html">Blog Title Here</a></h4>
                                    <p><span>by</span> admin <span>  &nbsp;&nbsp;  01</span> comments</p>
                                    <div class="blog-content">
                                        <p>Fimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <div class="read-more">
                                            <a href="single-blog.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination-area">
                            <ul>
                                <li><a href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li class="active"><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog Area End Here -->
    </div>
</template>
<script></script>
<style></style>