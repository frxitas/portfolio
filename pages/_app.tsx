import type { AppProps } from "next/app";

import { Fragment } from "react";

import { Global, ThemeProvider } from "@emotion/react";

import globalStyles from "../styles/global.styles";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	);
}

export default MyApp;
