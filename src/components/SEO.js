import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'

class SEO extends React.Component {
  render() {
    const { isBlogPost, path = '', lang = 'en' } = this.props
    const title = this.props.title
      ? `${this.props.title} | ${siteConfig.siteTitle}`
      : siteConfig.siteTitle
    const formatedSiteUrl = siteConfig.siteUrl.substring(
      0,
      siteConfig.siteUrl.length - 1
    )
    const imagePath =
      this.props.imageFb || this.props.cover || withPrefix(siteConfig.siteCover)
    const imagePathTwitter =
      this.props.imageTw || this.props.cover || withPrefix(siteConfig.siteCover)
    const image = `${formatedSiteUrl}${imagePath}`
    const imageTwitter = `${formatedSiteUrl}${imagePathTwitter}`
    const description = this.props.description || siteConfig.siteDescription

    return (
      <Helmet
        title={title}
        script={[
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-138876150-1',
            type: 'text/javascript',
          },
          {
            type: 'text/javascript',
            innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-138876150-1');`,
          },
        ]}
      >
        {/* General tags */}
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="OqRPvfIBa6oz4rK2u7xDLw54pMAjbegD7rAg0zgE8iI"
        />
        <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
        <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteConfig.twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageTwitter} />
      </Helmet>
    )
  }
}

export default SEO
