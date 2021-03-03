import React from 'react';
import { Link } from 'react-router-dom';

function Headers(props) {
    return (
        <div>
            <section className="menu cid-s48OLK6784" once="menu" id="menu1-h">
                <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                    <div className="container">
                        <div className="navbar-brand">
                        <Link to='/'>
                            <span className="navbar-logo">
                                    <img src="assets/images/images-121x121.png" alt="Mobirise" style={{ height: '5.5rem' }} />
                            </span>
                            </Link>
                            <Link to='/'>
                                <span className="navbar-caption-wrap"><a className="navbar-caption text-danger display-7" href="1">ANH CHERRY</a></span>
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                <li className="nav-item dropdown">
                                    <Link to='/products/'>
                                        <a className="nav-link link text-black dropdown-toggle display-4" href="12" data-toggle="dropdown-submenu" aria-expanded="false">PRODUCTS</a>
                                    </Link>

                                    <div className="dropdown-menu"><div className="dropdown">
                                        <a className="text-black dropdown-item dropdown-toggle display-4" href="#" data-toggle="dropdown-submenu" aria-expanded="false">Dòng sản phẩm</a>
                                        <div className="dropdown-menu dropdown-submenu">
                                            <a className="text-black dropdown-item display-4" href="https://mobirise.com">Balas</a>
                                            <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">Vintas</a>
                                            <a className="text-black dropdown-item display-4" href="#" aria-expanded="true">Convert</a>
                                        </div>
                                    </div>
                                        <div className="dropdown">
                                            <a className="text-black dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-toggle="dropdown-submenu">Chất liệu</a>
                                            <div className="dropdown-menu dropdown-submenu">
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="true">Canvas</a>
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">Da lộn</a>
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">Cotton</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="text-black dropdown-item dropdown-toggle display-4" href="#" aria-expanded="false" data-toggle="dropdown-submenu">Bộ sưu tập</a>
                                            <div className="dropdown-menu dropdown-submenu">
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="true">DiscoverYou</a>
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">Black Lace</a>
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">The Ocean</a>
                                                <a className="text-black dropdown-item display-4" href="#" aria-expanded="false">Lego</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link link text-black dropdown-toggle display-4" href="#" data-toggle="dropdown-submenu" aria-expanded="false">NỔI BẬT</a>
                                    <div className="dropdown-menu"><a className="text-black dropdown-item display-4" href="https://mobirise.com">Best Sales</a><a className="text-black dropdown-item display-4" href="#" aria-expanded="true">Sản phẩm mới</a><a className="text-black dropdown-item display-4" href="#" aria-expanded="true">Mua nhiều</a></div></li><li className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.com" /></li><li className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.com" /></li><li className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.com" /></li></ul>
                            <div className="icons-menu">
                                <a className="iconfont-wrapper" href="https://mobiri.se" target="_blank">
                                    <span className="p-2 mbr-iconfont mobi-mbri-cart-full mobi-mbri" style={{ color: 'rgb(68, 121, 217)', fill: 'rgb(68, 121, 217)' }} />
                                </a>
                                <a className="iconfont-wrapper" href="https://mobiri.se" target="_blank">
                                    <span className="p-2 mbr-iconfont mbri-login" style={{ color: 'rgb(68, 121, 217)', fill: 'rgb(68, 121, 217)' }} />
                                </a>
                                <a className="iconfont-wrapper" href="https://mobiri.se" target="_blank">
                                    <span className="p-2 mbr-iconfont mbri-logout" style={{ color: 'rgb(228, 63, 63)', fill: 'rgb(228, 63, 63)' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default Headers;