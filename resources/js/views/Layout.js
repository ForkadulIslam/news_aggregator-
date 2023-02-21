import React, {useState, useEffect} from 'react';
import FeedCustomizationComp from "../components/FeedCustomizationComp";

function Layout({ children }) {
    const [articles, setArticles] = useState([]);
    const [supportingData, setSupportingData] = useState({})

    useEffect( () => {
        axios.get('everything').then(response => {
            setArticles(response.data.articles);
        }).catch( error => {
            console.log(error);
        });
    }, []);

    function onSubmitCustomFeed(_data){
        setSupportingData({
            loading:true,
            serverError:false
        })
        axios.post('my_feed',_data).then(response => {
            if(response.data.articles){
                setSupportingData({
                    loading:false,
                    serverError:false
                })
                setArticles(response.data.articles);
            }else{
                setSupportingData({
                    loading:false,
                    serverError:'Api request limit has been exceeded'
                })
                console.log(response.data);
            }
        })
    }

    function onSubmitFilter(_data){
        setSupportingData({
            loading:true,
            serverError:false
        })
        axios.post('/filter_feed',_data).then(response => {
            if(response.data.articles){
                setSupportingData({
                    loading:false,
                    serverError:false
                })
                setArticles(response.data.articles);
            }else{
                setSupportingData({
                    loading:false,
                    serverError:'Api request limit has been exceeded'
                })
                console.log(response.data);
            }
        })
    }


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
                                                            A new portal for all around the world
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item">
                                                        <p className="trending-slide-title">
                                                            A new portal for all around the world
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item">
                                                        <p className="trending-slide-title">
                                                            A new portal for all around the world
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="rt-topbar-right">
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
                    <div className="header-main header-main-style-1 navbar-wrap" id="navbar-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="site-branding">
                                        <a className="dark-logo" href="#">
                                            My NEWS
                                        </a>
                                        <a className="light-logo" href="#">
                                            MY NEWS
                                        </a>
                                    </div>
                                    <div className="main-menu">
                                        <nav className="main-menu__nav">
                                            <ul>
                                                <li className="main-menu__nav_sub list active">
                                                    <a className="animation" href="#">Home</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="header-action-items">
                                        <li className="item cart-icon">
                                            <a href="#" className="cart-menu-btn menu-open-btn">
                                                <i className="fas fa-heartbeat" />
                                            </a>
                                        </li>
                                        <li className="item humburger offcanvas-menu-btn menu-status-open">
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="rt-mobile-header mobile-sticky-on">
                    <div id="mobile-sticky-placeholder" />
                    <div className="mobile-top-bar" id="mobile-top-bar">
                        <ul className="mobile-top-list">
                            <li>
                  <span className="rt-meta">
                    <i className="far fa-calendar-alt icon" />
                    <span className="currentDate">
                        {new Date().toLocaleString() + ""}
                    </span>
                  </span>
                            </li>
                            <li>
                  <span className="rt-meta">
                    <i className="fas fa-map-marker-alt icon" />
                    Dhaka , Bangladesh
                  </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-bar-wrap" id="mobile-menu-bar-wrap">
                        <div className="mobile-menu-bar">
                            <div className="logo">
                                <a href="#">
                                    THE NEWS
                                </a>
                            </div>
                            <span className="sidebarBtn">
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </span>
                        </div>
                        <div className="rt-slide-nav">
                            <div className="offscreen-navigation">
                                <nav className="menu-main-primary-container">
                                    <ul className="menu">
                                        <li className="list menu-item-has-children">
                                            <a className="animation" href="#">Home</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    {React.Children.map(children, (child) => {
                        const props = { articles:articles, supportingData:supportingData};
                        return React.cloneElement(child, props);
                    })}
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
                <FeedCustomizationComp onSubmitFilter={onSubmitFilter} onSubmitCustomFeed={onSubmitCustomFeed} />
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

export default Layout;
