module.exports = {
  siteTitle: `YeseungPark's Blog`,
  siteDescription: `YeseungPark's Tech Blog`,
  authorName: 'Yeseung Park',
  twitterUsername: 'none',
  authorAvatar: '/images/frog-173622__340.jpg',
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  Software Developer
  `,
  siteUrl: 'https:/yeseungpark.dev/',
  disqusSiteUrl: 'https://yeseungpark-dev.disqus.com',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/code-coder-coding-270348.jpg',
  googleAnalyticsId: 'UA-138876150-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'yeseungpark-dev',
  headerLinks: [
    // {
    //   label: '🏡',
    //   url: '/',
    // },
    {
      label: 'YeseungPark Blog',
      url: '/',
    },
    // {
    //   label: 'About',
    //   url: '/gatsby-starter-morning-dew',
    // },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      // {
      //   label: 'About',
      //   url: '/gatsby-starter-morning-dew',
      // },
      // {
      //   label: 'Installation',
      //   url: '/how-to-install',
      // },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/Parkyes90',
        iconClassName: 'fa fa-github',
      },
      // {
      //   label: 'Website',
      //   url: 'https://www.maxpou.fr',
      //   iconClassName: 'fa fa-globe',
      // },
      // {
      //   label: 'Twitter',
      //   url: 'https://twitter.com/_maxpou',
      //   iconClassName: 'fa fa-twitter',
      // },
    ],
  ],
}
