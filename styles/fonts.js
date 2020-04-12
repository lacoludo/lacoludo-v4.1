import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@font-face {
    font-family: 'Gotham-Rounded-Light';
    src: url('/fonts/gotham-rounded/gotham-rounded-light.woff2') format('woff2'),
			url('/fonts/gotham-rounded/gotham-rounded-light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
	}

	@font-face {
    font-family: 'Rajdhani-Regular';
    src: url('/fonts/rajdhani/rajdhani-regular.woff2') format('woff2'),
			url('/fonts/rajdhani/rajdhani-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
	}
`
