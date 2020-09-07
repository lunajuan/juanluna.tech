import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from '../components/image';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Hero from '../styles/hero';
import Section from '../components/section';
import Seo from '../components/Seo';

const Body = styled.div`
  p {
    margin: 0 auto ${props => props.theme.spacing['10']};
    font-size: ${props => props.theme.fontSize.base};
    line-height: ${props => props.theme.lineHeight.relaxed};
  }

  .subtitle {
    color: ${props => props.theme.text.secondary};
    margin: 0;
    font-weight: ${props => props.theme.fontWeight.normal};
  }

  .reverse-order {
    display: flex;
    flex-direction: column-reverse;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${props => props.theme.spacing['12']};
    align-items: start;

    @media (min-width: ${props => props.theme.screen.md}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-item {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--screenshot {
      align-self: center;
      img,
      .gatsby-resp-image-wrapper,
      .gatsby-resp-image-background-image {
        border-radius: ${props => props.theme.borderRadius.default};
        box-shadow: ${props => props.theme.boxShadow.default};
      }
    }
  }
`;

// gatsby-node api will pass in slug from context data as graphql variable.
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        header
        description
        imageFileName {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              src
            }
          }
        }
        imageAlt
        sections {
          anchor
          header
          view
          subheader
          items {
            header
            imageFileName {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageAlt
            description
            caption
          }
        }
      }
    }
  }
`;

const SectionItems = ({ items }) => {
  return (
    <Body>
      <div className="grid">
        {items.map(({ header, description, imageFileName, imageAlt }) => (
          <div className="grid-item">
            {imageFileName && (
              <Img alt={imageAlt || header} fluid={imageFileName.childImageSharp.fluid} />
            )}
            <h3>{header}</h3>
            {description && <p>{description}</p>}
          </div>
        ))}
      </div>
    </Body>
  );
};

const CaseStudyTemplate = ({ data: { mdx } }) => {
  if (!mdx.frontmatter) return null;

  const {
    frontmatter: {
      slug,
      header: heroHeader,
      description,
      imageFileName: heroFileName,
      imageAlt: heroImageAlt,
      sections,
    },
  } = mdx;

  return (
    <Layout>
      {/* override seo tags */}
      <Seo
        title={heroHeader}
        url={`/${slug}`}
        description={`${heroHeader} Case Study: ${description}`}
        image={heroFileName.childImageSharp.fluid.src}
      />
      <Hero halfSplitLayout={!!heroFileName} breakpoint="1024px">
        <div className="hero-text">
          <h1>{heroHeader}</h1>
          <p>{description}</p>
        </div>
        {heroFileName && (
          <Img
            rounded
            shadow
            alt={heroImageAlt || heroHeader}
            fluid={{
              ...heroFileName.childImageSharp.fluid,
              sizes: '(min-width: 1500px) 700w, (min-width: 1024px) 50vw, 100vw',
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
        )}
      </Hero>
      {sections &&
        sections.length &&
        sections.map(({ anchor, header, view, subheader, items }, index) => (
          <Section key={header} stripped rounded={index % 2 !== 0} id={anchor}>
            <h2>{header}</h2>
            {view === 'gallery' ? (
              <Section id="screenshots">{items && <Gallery items={items} />}</Section>
            ) : (
              <SectionItems items={items} />
            )}
          </Section>
        ))}
    </Layout>
  );
};

export default CaseStudyTemplate;
