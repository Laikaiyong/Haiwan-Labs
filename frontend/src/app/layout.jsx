import '@mantine/core/styles.css';
import "@fontsource/jua"

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Inter } from "next/font/google";
import { Wallet } from './providers';
import { ResponsiveNavbar } from '../../components/Sidebar';

export const metadata = {
  title: "Haiwan Lab",
  description: "Solving Food Waste Issues to Pet Food Manufacturing with Blockchain",
  icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/logo.jpeg",
		},
	],
	openGraph: {
		title: "Haiwan Lab",
		description: "Solving Food Waste Issues to Pet Food Manufacturing with Blockchain",
		images: ["/haiwanlab.jpg"],
	},
	twitter: {
		card: "summary",
		site: "Haiwan Lab",
		title: "Haiwan Lab",
		description: "Solving Food Waste Issues to Pet Food Manufacturing with Blockchain",
		images: ["/haiwanlab.jpg"],
	},
};

const theme = createTheme({
  fontFamily: 'Jua',
  headings: { fontFamily: 'Jua' },
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
        <Wallet>
          <div>
                {/* Sidebar content */}
          <ResponsiveNavbar />
                {/* Main content */}
                <div>

        {children}
                </div>
          </div>
        </Wallet>
        </MantineProvider>
      </body>
    </html>
  );
}
