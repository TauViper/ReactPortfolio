// import "./App.css";
import React from "react";
import { FooterHead } from "./components/Footer/FooterHead";
import { Header } from "./components/Header/Header";
import { Product } from "./components/ProductItems/Product";
import { UnderHeader } from "./components/UnderHeader/UnderHeader";
export function App() {
  return (
    <>
      <Header />
      <main>
        <UnderHeader />
        <Product />
      </main>
      <FooterHead />

      {/* <header class="header">
        <nav class="heading container">
            <div class="left">
                <a href="index.html"><img class="logo" src="img/logo.png" alt="logo"/></a>
                <div class="search">
                    <label for="search"><svg width="27" height="28" viewBox="0 0 27 28"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22463 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71814 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" />
                        </svg></label>
                    <input type="search" id="search" placeholder="Search"/>
                </div>

            </div>
            <div class="right">
                <div class="menu">
                    <input type="checkbox" id="menu"/>
                    <label for="menu"><img src="img/menu.svg" alt="menu"/></label>
                    <div class="menu__nav">
                        <div>
                            <label for="menu">X</label>

                            <h2>MENU</h2>
                            <h3>MAN</h3>
                            <ul>
                                <li><a href="">Bags</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Denim</a></li>
                                <li><a href="">T-Shirts</a></li>
                            </ul>
                            <h3>WOMAN</h3>
                            <ul>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Jackets & Coats</a></li>
                                <li><a href="">Polos</a></li>
                                <li><a href="">T-Shirts</a></li>
                                <li><a href="">Shirts</a></li>
                            </ul>
                            <h3>KIDS</h3>
                            <ul>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Jackets & Coats</a></li>
                                <li><a href="">Polos</a></li>
                                <li><a href="">T-Shirts</a></li>
                                <li><a href="">Bags</a></li>
                            </ul>
                        </div>

                    </div>


                </div>
                <a href="registration.html"><img src="img/login.svg" alt="login"/></a>
                <a href="cart.html" target="_blank"><img src="img/basket.svg" alt="basket"/></a>

            </div>
        </nav>
    </header>
    <main>
        <section class="banner">
            <div class="under__header container">
                <h1><b>the brand</b> of&nbsp;luxerious <span>fashion</span> </h1>
            </div>
        </section>
        <section>
            <div class="box container">
                <div class="card__box card__box--woman">
                    <p>30% OFF <span><b>FOR&nbsp;WOMEN</b></span></p>
                </div>
                <div class="card__box card__box--man">
                    <p> HOT DEAL <span><b>FOR&nbsp;MEN</b></span></p>
                </div>
                <div class="card__box card__box--kids">
                    <p> NEW ARRIVALS <span><b>FOR&nbsp;KIDS</b></span></p>
                </div>
                <div class="card__box card__box--accesories">
                    <p> LUXIROUS&nbsp;&&nbsp;TRENDY <span><b>ACCESORIES</b></span></p>
                </div>
            </div>
        </section>
        <section class="center__block container">
            <div class="future">
                <h2>Fetured Items</h2>
                <p>Shop for items based on what we featured in this week</p>
            </div>
            <div class="product">
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item1.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item2.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item3.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item4.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item5.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
                <div class="product__box">
                    <div class="item">
                        <img src="img/Item6.png" alt="item1"/>
                        <a href="product.html">Add to Cart</a>
                    </div>
                    <h2><b>ELLERY X M'O CAPSULE</b></h2>
                    <p>Known for her sculptural takes on traditional tailoring, Australian
                        arbiter
                        of
                        cool
                        Kym
                        Ellery teams up with Moda Operandi.</p>
                    <span>$ 52.00</span>
                </div>
            </div>
            <form class="browse">
                <a href="catalog.html" target="_blank">Browse All Product</a>
            </form>
        </section>
    </main>
    <footer>
        <section class="footer container">
            <div class="footer__box footer__box--box1">
                <h2>Free Delivery</h2>
                <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                    next&nbsp;-&nbsp;generation
                    innov tion with extensive models.
                </p>
            </div>
            <div class="footer__box footer__box--box2">
                <h2>Sales & discounts</h2>
                <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                    next&nbsp;-&nbsp;generation
                    innov tion with extensive models.
                </p>
            </div>
            <div class="footer__box footer__box--box3">
                <h2>Quality assurance</h2>
                <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                    next&nbsp;-&nbsp;generation
                    innov tion with extensive models.
                </p>
            </div>
        </section>
        <section class="footer__center container">
            <div class="footer__right">
                <img src="img/footer_face.png" alt="footer_face"/>
                <p>"Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                    a&nbsp;pulvinar
                    purus condimentum"
                </p>
            </div>
            <div class="footer__subscribe">
                <p> <b>SUBSCRIBE</b> <br/>
                    FOR OUR NEWLETTER AND PROMOTION
                </p>
                <form action="#">
                    <input id="email" type="email" placeholder="Enter Your Email"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
        <section class="footer__bar container">
            <p>&copy; 2021 Brand All Rights Reserved.</p>
            <div class="footer__social">
                <a href="https://www.facebook.com/"><svg width="32" height="32" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.0884 16.28L19.5069 13.616H16.8902V11.8873C16.8902 11.1585 17.2557 10.4481 18.4277 10.4481H19.6172V8.17997C19.6172 8.17997 18.5377 8 17.5056 8C15.3507 8 13.9422 9.27593 13.9422 11.5857V13.616H11.5469V16.28H13.9422V22.72H16.8902V16.28H19.0884Z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/"><svg width="33" height="32" viewBox="0 0 33 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_128:232)">
                            <path
                                d="M16.139 12.6816C14.0238 12.6816 12.3177 14.3849 12.3177 16.4966C12.3177 18.6083 14.0238 20.3117 16.139 20.3117C18.2541 20.3117 19.9602 18.6083 19.9602 16.4966C19.9602 14.3849 18.2541 12.6816 16.139 12.6816ZM16.139 18.9769C14.7721 18.9769 13.6547 17.8646 13.6547 16.4966C13.6547 15.1287 14.7688 14.0164 16.139 14.0164C17.5092 14.0164 18.6233 15.1287 18.6233 16.4966C18.6233 17.8646 17.5058 18.9769 16.139 18.9769ZM21.0078 12.5255C21.0078 13.0203 20.6087 13.4154 20.1165 13.4154C19.621 13.4154 19.2252 13.0169 19.2252 12.5255C19.2252 12.0341 19.6243 11.6357 20.1165 11.6357C20.6087 11.6357 21.0078 12.0341 21.0078 12.5255ZM23.5386 13.4287C23.4821 12.2367 23.2094 11.1808 22.3347 10.3109C21.4634 9.44097 20.4058 9.1687 19.2119 9.10894C17.9814 9.03921 14.2932 9.03921 13.0627 9.10894C11.8721 9.16538 10.8145 9.43765 9.93987 10.3076C9.06522 11.1775 8.79584 12.2333 8.73597 13.4253C8.66613 14.6539 8.66613 18.3361 8.73597 19.5646C8.79251 20.7566 9.06522 21.8124 9.93987 22.6824C10.8145 23.5523 11.8688 23.8246 13.0627 23.8843C14.2932 23.9541 17.9814 23.9541 19.2119 23.8843C20.4058 23.8279 21.4634 23.5556 22.3347 22.6824C23.2061 21.8124 23.4788 20.7566 23.5386 19.5646C23.6085 18.3361 23.6085 14.6572 23.5386 13.4287ZM21.949 20.8828C21.6895 21.5335 21.1874 22.0349 20.5322 22.2972C19.5511 22.6857 17.2231 22.596 16.139 22.596C15.0548 22.596 12.7235 22.6824 11.7457 22.2972C11.0939 22.0382 10.5917 21.5369 10.329 20.8828C9.93987 19.9033 10.0297 17.5791 10.0297 16.4966C10.0297 15.4142 9.9432 13.0867 10.329 12.1105C10.5884 11.4597 11.0906 10.9583 11.7457 10.696C12.7268 10.3076 15.0548 10.3972 16.139 10.3972C17.2231 10.3972 19.5545 10.3109 20.5322 10.696C21.184 10.955 21.6862 11.4564 21.949 12.1105C22.3381 13.09 22.2483 15.4142 22.2483 16.4966C22.2483 17.5791 22.3381 19.9066 21.949 20.8828Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_128:232">
                                <rect width="14.8991" height="17" transform="translate(8.68555 8)" />
                            </clipPath>
                        </defs>
                    </svg></a>
                <a href="https://www.pinterest.com/"><svg width="32" height="32" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_128:240)">
                            <path
                                d="M16.7403 8.20312C13.5556 8.20312 10.4082 10.3406 10.4082 13.8C10.4082 16 11.6374 17.25 12.3823 17.25C12.6896 17.25 12.8666 16.3875 12.8666 16.1438C12.8666 15.8531 12.1309 15.2344 12.1309 14.025C12.1309 11.5125 14.0305 9.73125 16.4889 9.73125C18.6027 9.73125 20.1671 10.9406 20.1671 13.1625C20.1671 14.8219 19.506 17.9344 17.3642 17.9344C16.5913 17.9344 15.9302 17.3719 15.9302 16.5656C15.9302 15.3844 16.7496 14.2406 16.7496 13.0219C16.7496 10.9531 13.835 11.3281 13.835 13.8281C13.835 14.3531 13.9002 14.9344 14.133 15.4125C13.7046 17.2688 12.8293 20.0344 12.8293 21.9469C12.8293 22.5375 12.9131 23.1188 12.969 23.7094C13.0745 23.8281 13.0218 23.8156 13.1832 23.7563C14.7476 21.6 14.6917 21.1781 15.3994 18.3562C15.7812 19.0875 16.7683 19.4812 17.5505 19.4812C20.8469 19.4812 22.3275 16.2469 22.3275 13.3313C22.3275 10.2281 19.6643 8.20312 16.7403 8.20312Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_128:240">
                                <rect width="11.9193" height="16" transform="translate(10.4082 8)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="https://www.tweeter.com/"><svg width="32" height="32" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">

                        <g clip-path="url(#clip0_128:236)">
                            <path
                                d="M22.417 12.7405C22.427 12.8826 22.427 13.0248 22.427 13.1669C22.427 17.5019 19.1498 22.4969 13.1599 22.4969C11.3145 22.4969 9.60022 21.9588 8.1582 21.0248C8.4204 21.0552 8.67247 21.0654 8.94475 21.0654C10.4674 21.0654 11.8691 20.5476 12.9884 19.6644C11.5565 19.6339 10.3565 18.6898 9.94305 17.3903C10.1447 17.4207 10.3464 17.441 10.5582 17.441C10.8506 17.441 11.1431 17.4004 11.4153 17.3294C9.92291 17.0248 8.80355 15.705 8.80355 14.1111V14.0705C9.23715 14.3141 9.74139 14.4664 10.2758 14.4867C9.39849 13.8979 8.82373 12.8928 8.82373 11.7557C8.82373 11.1466 8.98504 10.5882 9.26741 10.1009C10.8708 12.0908 13.2809 13.3902 15.9833 13.5324C15.9329 13.2887 15.9027 13.035 15.9027 12.7811C15.9027 10.974 17.3548 9.50195 19.1598 9.50195C20.0976 9.50195 20.9446 9.89789 21.5396 10.5375C22.2757 10.3954 22.9816 10.1212 23.6068 9.74561C23.3648 10.507 22.8505 11.1466 22.1749 11.5527C22.8304 11.4817 23.4657 11.2989 24.0505 11.0451C23.6069 11.6948 23.0522 12.2735 22.417 12.7405Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_128:236">
                                <rect width="15.8924" height="16" transform="translate(8.1582 8)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </section>
    </footer> */}
    </>
  );
}
