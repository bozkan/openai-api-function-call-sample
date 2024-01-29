import Head from 'next/head';
import Sandbox from './sandbox';

export const metadata = {
    title: process.env.siteTitle,
    description: 'A sample React app built using Next.JS powered by OpenAI API',
    viewport: 'maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=0',
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
    },
    manifestUrl: '/manifest.json', // Add your manifest URL here
    appleTouchIconUrl: '/logo.png', // Add your apple-touch-icon URL here
}

export default function Page() {
    return (
        <div>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="manifest" href={metadata.manifestUrl} /> {/* Add manifest link */}
                <link rel="apple-touch-icon" href={metadata.appleTouchIconUrl} /> {/* Add apple-touch-icon link */}
                {/* Add other meta tags and links as needed */}
            </Head>
            <Sandbox />
        </div>
    );
}
