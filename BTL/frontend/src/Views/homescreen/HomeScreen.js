import React from 'react';
import { Link } from 'react-router-dom';



function HomeScreen(props) {
    return (
        <div>
            <section className="slider1 cid-smJOL0CJNe" id="slider1-w">
                <div className="carousel slide" id="smKeJR3QIL" data-ride="carousel" data-interval={5000} >
                    <ol className="carousel-indicators">
                        <li data-slide-to={"0"} className="active" data-target="#smKeJR3QIL"></li>
                        <li data-slide-to={"1"} data-target="#smKeJR3QIL"></li>
                        <li data-slide-to={"2"} data-target="#smKeJR3QIL"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item slider-image item active">
                            <div className="item-wrapper">
                                <img className="d-block w-100" src="assets/images/cmnm1.jpg" alt="" />
                                <div className="carousel-caption">
                                    <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                        <strong>Full-Width Slider</strong>
                                    </h5>
                                    <p className="mbr-section-text mbr-fonts-style display-7">Click on the image to edit slides.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <img className="d-block w-100" src="assets/images/background5.jpg" alt="" />
                                <div className="carousel-caption">
                                    <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                        <strong>Full-Width Slider</strong>
                                    </h5>
                                    <p className="mbr-section-text mbr-fonts-style display-7">Click on the image to edit slides.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <img className="d-block w-100" src="assets/images/background8.jpg" alt="" />
                                <div className="carousel-caption">
                                    <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                        <strong>Full-Width Slider</strong>
                                    </h5>
                                    <p className="mbr-section-text mbr-fonts-style display-7">Click on the image to edit slides.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#smKeJR3QIL">
                        <span className="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#smKeJR3QIL">
                        <span className="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        
            <section className="content2 cid-smJOj7VCD4" id="content2-s">
                <div className="container">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Sản phẩm bán chạy</strong></h4>
                        <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Dưới đây là danh sách 3 sản phẩm bán chạy theo đánh giá</h5>
                    </div>
                    <div className="row mt-4">
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/product5.jpg" alt="" title />
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5"><a href="#top" className="text-primary">Easy and Simple</a></h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">
                                        <strong>John Smith</strong><em> 10-10-2025</em><br />
                                        <strong>Giá : </strong><em> $$</em></h6>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Page Maker is a free and simple
                    website builder - just drop site blocks to your page, add content and style it!</p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href="#top" className="btn item-btn btn-primary display-7" target="_blank">Add to cart
                    &gt;</a></div>
                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/product4.jpg" alt="" title />
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5"><a href="#top" className="text-primary">Auto Mobile</a></h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Ann
                      Brown</strong><em>&nbsp;09-09-2025</em><br />
                                        <strong>Giá : </strong><em> $$</em>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Site Creator offers a huge
                    collection of 3500+ site blocks, templates and themes with thousands flexible options.<br />
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href="#top" className="btn btn-primary item-btn display-7" target="_blank">Add to cart
                    &gt;</a></div>
                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="assets/images/product3.jpg" alt="" title />
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5"><a href="#top" className="text-primary">Boost Your Rank</a></h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Jessica Doe
                    </strong><em>08-08-2025</em><br />
                                        <strong>Giá : </strong><em> $$</em>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Page Maker is a free and simple
                    website builder - just drop site blocks to your page, add content and style it!</p>
                                </div>
                                <div className="mbr-section-btn item-footer mt-2"><a href="#top" className="btn btn-primary item-btn display-7" target="_blank">Add to cart
                    &gt;</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image2 cid-smJOBG4e95" id="image2-v">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <img src="assets/images/5.jpg" alt="Mobirise" />
                                <p className="mbr-description mbr-fonts-style mt-2 align-center display-4">
                                    Image Description</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
                                    <strong>Image with Description</strong></h3>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    Use Mobirise website building software to create multiple sites for commercial and non-profit projects. Click on the image in this block to replace it. You can add a description below your image, or on the side. If you want to hide some of the text fields, open the Block parameters, and uncheck relevant options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="share3 cid-smJOuYqiwR" id="share3-t">
                <div className="container">
                    <div className="media-container-row">
                        <div className="col-12">
                            <h3 className="mbr-section-title align-center mb-3 mbr-fonts-style display-2">
                                <strong>Follow Us!</strong>
                            </h3>
                            <div className="social-list align-center">
                                <a className="iconfont-wrapper bg-facebook m-2 " href="https://www.facebook.com/chu.t.manh.7/">
                                    <span className="socicon-facebook socicon" />
                                </a>
                                <a className="iconfont-wrapper bg-twitter m-2" href="https://www.youtube.com/channel/UCVGy6esZzAnbcRxDuGeKqGA">
                                    <span className="socicon-youtube socicon" />
                                </a>
                                <a className="iconfont-wrapper bg-instagram m-2" href="https://www.instagram.com/themanh___luffy/">
                                    <span className="socicon-instagram socicon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeScreen;