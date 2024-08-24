import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Inter } from "next/font/google";
import { Wallet } from './providers';
import { ResponsiveSidebar } from '../../components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
        <Wallet>
          <div>
            <div style={{ display: 'flex', height: "100%" }}>
              <div style={{ flex: '0 0 25%', maxWidth: '25%' }}>
                {/* Sidebar content */}
          <ResponsiveSidebar />
              </div>
              <div style={{ flex: '1' }}>
                {/* Main content */}
        {children}
              </div>
            </div>
          </div>
        </Wallet>
        </MantineProvider>
      </body>
    </html>
  );
}
