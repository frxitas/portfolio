import { css } from "@emotion/react";

import normalizeStyles from "./normalize.styles";
import { generateCSSVarsFromTheme } from "../theme";

/** THEME */
import theme from "../theme";
/** END THEME */

const globalStyles = css`
	${normalizeStyles}

	:root {
		${generateCSSVarsFromTheme(theme)}
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;

		&:before,
		&:after {
			box-sizing: border-box;
		}
	}

	html {
		font-size: 10px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #000;
		background-color: #202627;
		font-family: 'Montserrat', sans-serif;
		min-height: 100%;
		text-rendering: optimizelegibility;
		width: 100%;
	}
`;

export default globalStyles;
