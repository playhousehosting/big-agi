/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Chat With GPT',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Chat With GPT',
  },
  Meta: {
    Description: 'Launch Chat With GPT to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Chat With GPT | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://ChatWithGPT.app',
    // App: 'ChatWithGPT.app',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: '',
    OpenProject: '',
    SupportInvite: '',
    // Twitter: '',
    PrivacyPolicy: '',
  },
} as const;
