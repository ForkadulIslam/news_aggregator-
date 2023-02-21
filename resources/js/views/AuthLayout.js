import React from 'react';

function AuthLayout({ children }) {
    return (
        <div>
            <div className="pre-loader" id="preloader">
                <div className="loader" />
            </div>
            <div id="main_content" className="footer-fixed">
                <header className="rt-header sticky-on">
                    <div id="sticky-placeholder" />
                    <div className="topbar topbar-style-1" id="topbar-wrap">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="rt-trending rt-trending-style-1">
                                        <p className="trending-title">
                                            <i className="fas fa-bolt icon" />
                                            Trending
                                        </p>
                                        <div className="rt-treding-slider1 swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="item">
                                                        <p className="trending-slide-title">
                                                            newsan unknown printer took a galley of
                                                            type andscrambled.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item">
                                                        <p className="trending-slide-title">
                                                            newsan unknown printer took a galley of
                                                            type andscrambled.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item">
                                                        <p className="trending-slide-title">
                                                            newsan unknown printer took a galley of
                                                            type andscrambled.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="rt-topbar-right">
                                        <div className="meta-wrap">
                        <span className="rt-meta">
                          <i className="far fa-calendar-alt icon" />
                          <span className="currentDate">
                            DECEMBER 9, 2022
                          </span>
                        </span>
                                        </div>
                                        <div className="social-wrap d-none d-xl-block">
                                            <ul className="rt-top-social">
                                                <li className="follow">Follow Us:</li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </li>
                                                <li><a href="https://www.pinterest.com/" target="_blank">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.whatsapp.com/" target="_blank">
                                                        <i className="fab fa-skype" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className="footer">
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="footer-bottom-area d-flex align-items-center justify-content-center">
                                <p className="copyright-text mb-0 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="800ms">
                                    <span className="currentYear" /> © FuadHasan all right reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="offcanvas-menu-wrap" id="offcanvas-wrap" data-position="left">
                <div className="offcanvas-content">
                    <div className="offcanvas-header">
                        <div className="offcanvas-logo">
                            <div className="site-branding">
                                <a className="dark-logo" href="index.html">
                                    MY NEWS
                                </a>
                                <a className="light-logo" href="index.html">
                                    MY NEWS
                                </a>
                            </div>
                        </div>
                        <div className="close-btn offcanvas-close">
                            <a href="#">
                                <i className="fas fa-times" />
                            </a>
                        </div>
                    </div>
                    <div className="offcanvas-widget">
                        <h3 className="offcanvas-widget-title">NEWS SOURCE</h3>
                        <p>
                            The argument in favor of using filler text
                            goes something like this: If you use arey
                            real content in the Consulting Process
                            anytime you reachtent.
                        </p>
                    </div>
                    <div className="offcanvas-widget">
                        <h3 className="offcanvas-widget-title">Instagram</h3>
                        <div className="insta-gallery">
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_1.jpg" width={100} height={90} alt="gallery1" />
                                </a>
                            </div>
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_2.jpg" width={100} height={90} alt="gallery2" />
                                </a>
                            </div>
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_3.jpg" width={100} height={90} alt="gallery3" />
                                </a>
                            </div>
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_4.jpg" width={100} height={90} alt="gallery4" />
                                </a>
                            </div>
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_5.jpg" width={100} height={90} alt="gallery5" />
                                </a>
                            </div>
                            <div className="galleryitem">
                                <a href="https://www.instagram.com/">
                                    <img src="assets/media/gallery/ins-gallery_6.jpg" width={100} height={90} alt="gallery6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-widget footer-widget">
                        <h3 className="offcanvas-widget-title">Contact Info</h3>
                        <ul className="contact-info-list widget-list">
                            <li className="widget-list-item">
                                <i className="fas fa-map-marker-alt list-icon" />
                                Chicago 12, Melborne City, USA
                            </li>
                            <li className="widget-list-item">
                                <i className="fas fa-phone-alt list-icon" />
                                <a href="tel:123333000999" className="widget-list-link">
                                    (123) 333-000-999
                                </a>
                            </li>
                            <li className="widget-list-item">
                                <i className="fas fa-envelope list-icon" />
                                <a href="mailto:info@example.com" className="widget-list-link">
                                    neeon@gmail.com
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-social style-2 gutter-15">
                            <li className="social-item">
                                <a href="https://www.facebook.com/" className="social-link fb" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://twitter.com/" className="social-link tw" target="_blank">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://vimeo.com/" className="social-link vm" target="_blank">
                                    <i className="fab fa-vimeo-v" />
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://www.pinterest.com/" className="social-link pn" target="_blank">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://www.whatsapp.com/" className="social-link wh" target="_blank">
                                    <i className="fab fa-whatsapp" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-wrap" id="cart-wrap" data-position="left">
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="cart-title d-inlie-block">Cart</span>
                        <button type="button" className="cart-menu-btn menu-close-btn">
                <span className="menu-btn-icon">
                  <i className="fas fa-times" />
                </span>
                        </button>
                    </div>
                    <ul className="cart-items ">
                        <li className="d-flex ">
                            <div className="item-figure">
                                <a href="#">
                                    <img src="assets/media/gallery/ins-gallery_1.jpg" alt="Cart" width={100} height={90} />
                                </a>
                                <div className="item-dismiss">
                                    <a href="#"><i className="fas fa-times" /></a>
                                </div>
                            </div>
                            <div className="item-description">
                                <span className="item-main-title"><a href="#">Animal</a></span>
                                <span className="item-amount d-flex align-items-center"><span className="item-quantity">1</span>X<span className="item-price">$12.00</span></span>
                            </div>
                        </li>
                        <li className="d-flex">
                            <div className="item-figure">
                                <a href="#">
                                    <img src="assets/media/gallery/ins-gallery_2.jpg" alt="Cart" width={100} height={90} />
                                </a>
                                <div className="item-dismiss">
                                    <a href="#"><i className="fas fa-times" /></a>
                                </div>
                            </div>
                            <div className="item-description">
                                <span className="item-main-title"><a href="#">Sports</a></span>
                                <span className="item-amount d-flex align-items-center"><span className="item-quantity">1</span>X<span className="item-price">$18.00</span></span>
                            </div>
                        </li>
                        <li className="d-flex">
                            <div className="item-figure">
                                <a href="#">
                                    <img src="assets/media/gallery/ins-gallery_3.jpg" alt="Cart" width={100} height={90} />
                                </a>
                                <div className="item-dismiss">
                                    <a href="#"><i className="fas fa-times" /></a>
                                </div>
                            </div>
                            <div className="item-description">
                                <span className="item-main-title"><a href="#">Fashion</a></span>
                                <span className="item-amount d-flex align-items-center"><span className="item-quantity">1</span>X<span className="item-price">$20.00</span></span>
                            </div>
                        </li>
                    </ul>
                    <div className="cart-footer">
                        <ul className="total-amount">
                            <li className="title">Subtotal:</li>
                            <li className="amount">$50.00</li>
                        </ul>
                        <ul className="action-buttons">
                            <li><a href="#" className="rt-submit-btn">VIEW CART</a></li>
                            <li><a href="#" className="rt-submit-btn">CHECKOUT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="template-search" className="template-search">
                <button type="button" className="close">×</button>
                <form className="search-form">
                    <input type="search" defaultValue placeholder="Search" />
                    <button type="submit" className="search-btn btn-ghost style-1">
                        <i className="flaticon-search" />
                    </button>
                </form>
            </div>
            <div className="theme-switch-box-wrap">
                <div className="theme-switch-box">
                    <span className="theme-switch-box__theme-status"><i className="fas fa-cog" /></span>
                    <label className="theme-switch-box__label" htmlFor="themeSwitchCheckbox">
                        <input className="theme-switch-box__input" type="checkbox" name="themeSwitchCheckbox" id="themeSwitchCheckbox" />
                        <span className="theme-switch-box__main" />
                    </label>
                    <span className="theme-switch-box__theme-status"><i className="fas fa-moon" /></span>
                </div>
            </div>
            <a href="#" id="back-to-top">
                <i className="fas fa-angle-double-up" />
            </a>
        </div>
    )


}

export default AuthLayout;
