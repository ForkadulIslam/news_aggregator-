import React, {useState} from "react";

function MyFevFeed(props) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [raw_sources_obj,setRawSourceObj] = useState([]);
    const [sources, setSources] = useState([]);
    const [selectedSources,setSelectedSources] = useState('');
    return (
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
                            <img src="media/gallery/ins-gallery_1.jpg" alt="Cart" width={100} height={90} />
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
                            <img src="media/gallery/ins-gallery_2.jpg" alt="Cart" width={100} height={90} />
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
                            <img src="media/gallery/ins-gallery_3.jpg" alt="Cart" width={100} height={90} />
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
    )

}
export default MyFevFeed;
