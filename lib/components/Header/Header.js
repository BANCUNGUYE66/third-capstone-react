import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/User.png';
import './Header.scss';
const Header = () => /*#__PURE__*/React.createElement("div", {
  className: "header"
}, /*#__PURE__*/React.createElement(Link, {
  to: "/"
}, /*#__PURE__*/React.createElement("div", {
  className: "logo"
}, "Movie App")), /*#__PURE__*/React.createElement("div", {
  className: "user-image"
}, /*#__PURE__*/React.createElement("img", {
  src: user,
  alt: "user"
})));
export default Header;