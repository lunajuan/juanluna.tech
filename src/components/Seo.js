import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import defaulMetaImage from '../../static/images/metaImage.jpg';

const Seo = ({ title, url, description, image }) => {
  const {
    title: siteTitle,
    url: siteUrl,
    description: siteDescription,
    twitterHandle,
  } = useSiteMetadata();
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaulMetaImage}`;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet titleTemplate="%s | Juan Luna Ramirez" defaultTitle={siteTitle}>
      <html lang="en" />

      {title && <title>{title}</title>}

      {/* General tags */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Seo.defaultProps = {
  title: null,
  url: null,
  description: null,
  image: null,
};

export default Seo;
