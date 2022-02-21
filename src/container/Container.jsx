import React from "react";
import "./container.css";
import logo from "../assets/globe.png";
import searchicon from "../assets/searchicon.svg";
import market from "../assets/market.svg";
import whiteheart from "../assets/whiteheart.png";
import word from "../assets/word.png";
import chevronRight from "../assets/chevronright.svg";
import fb from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";
import footer4 from "../assets/footer4.svg";
import footer5 from "../assets/footer5.svg";
import footer6 from "../assets/footer6.svg";
import footer7 from "../assets/footer7.svg";
import footer8 from "../assets/footer8.svg";
import footer9 from "../assets/footer9.svg";
import footer10 from "../assets/footer10.svg";
import footer11 from "../assets/footer11.svg";
import multi from "../assets/multi.svg";
import gobic from "../assets/gobi.svg";
import "@fontsource/roboto";

export const Container = () => {
  return (
    <div className="app">
      <div className="navbar">
        <div className="multilanguage">
          <img src={logo} alt="logo" className="logo" />
          <h5 className="language">Global - English</h5>
        </div>
        <div className="more">
          <h5 className="order">RETURNING AN ORDER?</h5>
          <h5 className="info">Click for more info</h5>
        </div>
        <div className="right">
          <h5 className="signup">SIGN IN</h5>
          <h5 className="signin">SIGN UP</h5>
        </div>
      </div>
      <div className="container">
        <div className="cover">
          <div className="menu">
            <div className="left">
              <p className="item">WOMAN</p>
              <p className="item">MEN</p>
              <p className="item">HOME</p>
              <p className="item">ACCESSORIES</p>
              <p className="item">ORGANIC</p>
            </div>
            <div className="center">
              <img src={gobic} alt="word" />
            </div>
            <div className="right">
              <div className="item">
                <img src={searchicon} alt="searchicon" className="searchIcon" />
                <div className="searchInput">
                  <input placeholder="search" className="input" />
                </div>
              </div>
              <img src={whiteheart} alt="whiteheart" className="item" />
              <img src={market} alt="market" className="item" />
            </div>
          </div>
          <div className="menu1">
            <div className="left">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.992188 1.31299H21.3721" stroke="white" />
                <path d="M0.992188 8.25977H18.1299" stroke="white" />
                <path d="M0.992188 15.2085H21.3721" stroke="white" />
              </svg>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.9268 20.3445L15.6165 16.0342" stroke="white" />
                <circle cx="9.3601" cy="9.63012" r="8.48803" stroke="white" />
              </svg>
            </div>
            <div className="center">
              <img src={gobic} alt="word" />
            </div>
            <div className="right">
              <img src={whiteheart} alt="whiteheart" className="item" />
              <img src={market} alt="market" className="item" />
            </div>
          </div>
          <div className="banner">
            <div className="texts">
              <div className="summer">SUMMER</div>
              <div className="sale">Sale</div>
              <div className="up">
                <h5 className="to">UPTO</h5>
                <h5 className="sixty">60%</h5>
                <h5 className="ff">ff</h5>
              </div>
            </div>
            <div className="shopnow">
              <h5 className="shopnoww">SHOP NOW</h5>
            </div>
          </div>
        </div>
        <div className="winter">
          <div className="shopnow">
            <h5 className="text1">WINTER SPICE 2020</h5>
            <h5 className="text2">
              Infusion of summer pieces and cashmere silk blends.
            </h5>
            <div className="button">
              <h5 className="text">shop now</h5>
            </div>
          </div>
          <div className="picture">
            <div className="picture1"></div>
            <div className="pictures">
              <div className="picture2"></div>
              <div className="picture3"></div>
            </div>
          </div>
        </div>
        <div className="woman">
          <div className="side">
            <div className="bottom">
              <h5 className="text">CARDIGANS</h5>
              <img src={chevronRight} alt="chevron" />
            </div>
          </div>
          <div className="center">
            <h5 className="text1">women</h5>
            <div className="image">
              <div className="bottom">
                <h5 className="text">CARDIGANS</h5>
                <img src={chevronRight} alt="chevron" />
              </div>
            </div>
          </div>
          <div className="side">
            <div className="bottom">
              <h5 className="text">CARDIGANS</h5>
              <img src={chevronRight} alt="chevron" />
            </div>
          </div>
        </div>
        <div className="man">
          <div className="side">
            <div className="bottom">
              <h5 className="text">CARDIGANS</h5>
              <img src={chevronRight} alt="chevron" />
            </div>
          </div>
          <div className="center">
            <h5 className="text1">men</h5>
            <div className="image">
              <div className="bottom">
                <h5 className="text">CARDIGANS</h5>
                <img src={chevronRight} alt="chevron" />
              </div>
            </div>
          </div>
          <div className="side">
            <div className="bottom">
              <h5 className="text">CARDIGANS</h5>
              <img src={chevronRight} alt="chevron" />
            </div>
          </div>
        </div>
        <div className="gift">
          <div className="item">
            <div className="picture1"></div>
            <div className="text">
              Zweiseitiger Wendemantel Mit Schmetterlingsxzds
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
          <div className="item">
            <div className="picture2"></div>
            <div className="text">
              Écharpe tisée avec bords contrastants et franges
            </div>
            <div className="colors">
              <div className="colors1" />
              <div className="colors2" />
              <div className="colors3" />
              <div className="colors4" />
              <div className="colors5" />
              <div className="colors6" />
              <div className="colors7" />
              <div className="text2">+17</div>
            </div>
          </div>
          <div className="item">
            <div className="picture3"></div>
            <div className="text">
              Трикотажный Супер Мягкий Плед Контрастного Оттенка
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
          <div className="item">
            <div className="picture4"></div>
            <div className="text">
              Кардиган в Стиле Колор-Блок с V-Образным Воротником
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
          <div className="item">
            <div className="picture1"></div>
            <div className="text">
              Zweiseitiger Wendemantel Mit Schmetterlingsxzds
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
          <div className="item">
            <div className="picture2"></div>
            <div className="text">
              Écharpe tisée avec bords contrastants et franges
            </div>
            <div className="colors">
              <div className="colors1" />
              <div className="colors2" />
              <div className="colors3" />
              <div className="colors4" />
              <div className="colors5" />
              <div className="colors6" />
              <div className="colors7" />
              <div className="text2">+17</div>
            </div>
          </div>
          <div className="item">
            <div className="picture3"></div>
            <div className="text">
              Трикотажный Супер Мягкий Плед Контрастного Оттенка
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
          <div className="item">
            <div className="picture4"></div>
            <div className="text">
              Кардиган в Стиле Колор-Блок с V-Образным Воротником
            </div>
            <div className="text1">+6 colors</div>
            <div className="amount">
              $ 299.00 <span className="amount1">$ 79.00</span>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="picture"></div>
          <div className="aboutus">
            <h5 className="title">ABOUT US</h5>
            <h5 className="title1">SEASON LIFE</h5>
            <h5 className="text">
              Aute et officia anim consectetur consequat velit minim irure Lorem
              ad. Officia nisi sunt est eiusmod occaecat excepteur velit
              reprehenderit occaecat cillum anim ad magna aliqua. Sint enim
              Lorem amet in tempor non ea duis cillum. Cillum consectetur in in
              aliqua. Nostrud minim duis cupidatat et ea sint.
            </h5>
            <div className="button">
              <h5 className="readmore">read more</h5>
            </div>
            <div className="pictures">
              <div className="picture1"></div>
              <div className="picture1"></div>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <h5 className="title">Subscribe</h5>
          <h5 className="text1">
            Sign up for emails and receive early access to new arrivals, sales,
            events + more.
          </h5>
          <div className="email">
            <h5 className="text2">Enter your email address</h5>
            <div className="submit">
              <h5 className="text3">submit</h5>
            </div>
          </div>
          <h5 className="policy">
            By signing up, you will receive Gobi Cashmere offers, promotions and
            other commercial messages. You are also agreeing to Gobi Cashmere's
            Privacy Policy. You may unsubscribe at any time.
          </h5>
        </div>
      </div>
      <footer className="footer">
        <div className="items">
          <div className="item">
            <h5 className="title">ABOUT US</h5>
            <h5 className="text">Our History</h5>
            <h5 className="text">Produc Care</h5>
            <h5 className="text">Store Location</h5>
            <h5 className="text">Sustainability</h5>
          </div>
          <div className="item">
            <h5 className="title">POLICY</h5>
            <h5 className="text">Shipping & Return Policy</h5>
            <h5 className="text">Privacy Policy</h5>
            <h5 className="text">Impressum</h5>
            <h5 className="text">Return Portal</h5>
          </div>
          <div className="item">
            <h5 className="title">CUSTOMER SERVICE</h5>
            <h5 className="text">General Terms and Conditions</h5>
            <h5 className="text">Contact Us</h5>
            <h5 className="text">News</h5>
            <h5 className="text">FAQ</h5>
          </div>
          <div className="item">
            <h5 className="title">CUSTOMER SERVICE</h5>
            <h5 className="text">General Terms and Conditions</h5>
            <h5 className="text">Contact Us</h5>
            <h5 className="text">News</h5>
            <h5 className="text">FAQ</h5>
          </div>
          <div className="item1">
            <h5 className="title">FOLLOW US</h5>
            <h5 className="text">
              <img src={fb} alt="" />
            </h5>
            <h5 className="text">
              <img src={instagram} alt="" />
            </h5>
            <h5 className="text">
              <img src={twitter} alt="" />
            </h5>
            <h5 className="text">
              <img src={youtube} alt="" />
            </h5>
          </div>
        </div>
        <div className="bottom">
          <div className="pay">
            <img src={footer1} className="item" alt="" />
            <img src={footer2} className="item" alt="" />
            <img src={footer3} className="item" alt="" />
            <img src={footer4} className="item" alt="" />
            <img src={footer5} className="item" alt="" />
            <img src={footer6} className="item" alt="" />
            <img src={footer7} className="item" alt="" />
            <img src={footer8} className="item" alt="" />
            <img src={footer9} className="item" alt="" />
            <img src={footer10} className="item" alt="" />
            <img src={footer11} className="item" alt="" />
          </div>
          <div className="multilanguage">
            <h5 className="language">Global - English</h5>
            <img src={multi} alt="multi" className="logo" />
          </div>
        </div>
        <div className="copyright">
          All content Copyright © 2020 GOBI Cashmere
        </div>
      </footer>
    </div>
  );
};
export default Container;
