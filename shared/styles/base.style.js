import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  // Table of Content
  // ==================================================
  // #Reset & Basics
  // #Basic Styles
  // #Site Styles
  // #Typography
  // #Links
  // #Lists
  // #Images
  // #Buttons
  // #Forms
  // #Misc

  // #Reset & Basics (Inspired by E. Meyers)
  // ==================================================
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  select {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-transform: uppercase;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // #Basic Styles
  // ==================================================
  body {
    background: #000000;
    font-family: 'Gotham-Rounded-Light', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #fff;
    overflow-x: hidden;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }
  html {
    overflow-x: hidden;
    height: 100%;
  }

  // #Typography
  // ==================================================
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #f8f8f8;
    font-family: 'Gotham-Rounded-Light', sans-serif;
    font-weight: 700;
    text-align: center;
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    font-weight: inherit;
  }
  h1 {
    font-size: 40px;
    line-height: 40px;
  }
  h2 {
    font-size: 34px;
    line-height: 34px;
  }
  h3 {
    font-size: 30px;
    line-height: 30px;
  }
  h4 {
    font-size: 24px;
    line-height: 24px;
  }
  h5 {
    font-size: 20px;
    line-height: 20px;
  }
  h6 {
    font-size: 18px;
    line-height: 18px;
  }
  p img {
    margin: 0;
  }
  p.lead {
    font-size: 21px;
    line-height: 27px;
    color: #777;
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: 600;
  }
  small {
    font-size: 80%;
  }

  // Blockquotes
  blockquote,
  blockquote p {
    font-size: 17px;
    line-height: 24px;
    color: #777;
  }
  blockquote {
    margin: 0 0 20px;
    padding: 9px 20px 0 19px;
  }
  blockquote cite {
    display: block;
    font-size: 12px;
    color: #555;
  }
  blockquote cite:before {
    content: '\\2014 \\0020';
  }
  blockquote cite a,
  blockquote cite a:visited,
  blockquote cite a:visited {
    color: #555;
  }
  hr {
    border: solid #323a3d;
    border-width: 1px 0 0;
    clear: both;
    margin: 0 10px 0 10px;
    height: 0;
    position: relative;
  }

  // #Links
  // ==================================================
  a,
  a:visited {
    text-decoration: none;
  }
  p a,
  p a:visited {
    line-height: inherit;
    text-decoration: none;
  }
  a:focus {
    outline: none;
  }

  // #Lists
  // ==================================================
  ul {
    list-style: none outside;
  }
  ol {
    list-style: decimal;
  }
  ol,
  ul.square,
  ul.circle,
  ul.disc {
    margin-left: 30px;
  }
  ul.square {
    list-style: square outside;
  }
  ul.circle {
    list-style: circle outside;
  }
  ul.disc {
    list-style: disc outside;
  }
  ul ul,
  ul ol,
  ol ol,
  ol ul {
    font-size: 90%;
  }
  li {
    line-height: 18px;
  }
  ul.large li {
    line-height: 21px;
  }
  li p {
    line-height: 21px;
  }

  // #Buttons
  // ==================================================
  .button,
  button,
  input[type='submit'],
  input[type='reset'],
  input[type='button'] {
    background: #363636;
    margin-top: 10px;
    border: none;
    color: #dfdfdf;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    line-height: normal;
    padding: 15px 25px;
    transition: all 0.3s ease-out;
    width: 100%;
  }

  .button:hover,
  button:hover,
  input[type='submit']:hover,
  input[type='reset']:hover,
  input[type='button']:hover {
    color: #e74c3c;
    background: #292929;
  }

  .button:active,
  button:active,
  input[type='submit']:active,
  input[type='reset']:active,
  input[type='button']:active {
    color: #e74c3c;
  }

  .button.full-width,
  button.full-width,
  input[type='submit'].full-width,
  input[type='reset'].full-width,
  input[type='button'].full-width {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center;
  }

  // #Images
  // ==================================================

  // #Misc
  // ==================================================
  .remove-top {
    margin-top: 0 !important;
  }
  .remove-bottom {
    margin-bottom: 0 !important;
  }
  .half-bottom {
    margin-bottom: 10px !important;
  }
  .add-bottom {
    margin-bottom: 20px !important;
  }

  .clear {
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
  }
  ::selection {
    background: rgba(100, 100, 100, 0.2); // Safari
  }
`
