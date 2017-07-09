<template>
    <div id="contact">
    <!-- Page Header Section Start Here -->
    <div class="page-header-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="header-page">
                        <h1>Contact Us</h1>
                        <ul>
                            <li> <a href="index.html">Home</a> </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header Section End Here -->
    <!-- Contact Us Page Start Here -->
    <div class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-md-3 col-sm-3 col-xs-12">
                    <div class="main-contact-form">
                        <h3>Send Us Message</h3>
                        <form  method="post" action="php/contact.php" name="cform" id="cform">
                            <fieldset>
                                <div class="col-sm-12 acurate">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" placeholder="Name*">
                                    </div>
                                </div>
                                <div class="col-sm-12 acurate">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Email*">
                                    </div>
                                </div>
                                <div class="col-sm-12 acurate">
                                    <div class="form-group">
                                        <input type="phone" name="subject" class="form-control" placeholder="Phone*">
                                    </div>
                                </div>
                                <div class="col-sm-12 acurate">
                                    <div class="form-group">
                                        <textarea cols="40"  name="comments" rows="10" class="textarea form-control" placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12 acurate">
                                    <div class="form-group">
                                        <button class="btn-send" type="submit" id="submit">Send Message</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div id="response_message"></div>
                </div>
                <div class="col-lg-9 col-md-md-9 col-sm-9 col-xs-12">
                    <div class="contact-page-contact">
                        <!-- Google Map Integrate Start Here -->
                        <div class="google-map-area">
                            <div id="googleMap" style="width:100%;height:450px;"></div>
                        </div>
                        <div class="contact-page-content">
                            <h3>Location</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit expedita, deleniti culpa nam fuga neque ab similique corporis. Sed eligendi perspiciatis error ipsam culpa, iusto dolor cum consectetur nihil.</p>
                            <ul>
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i>44 Kazi View Road, Newyork</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i> +12345678910</li>
                                <li><i class="fa fa-envelope-o" aria-hidden="true"></i> info@weddingreval.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact Us Page End Here -->
    </div>
</template>
<script></script>
<style></style>