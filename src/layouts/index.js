import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './index.css'
import '../styles/layout-overide.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nic's Blog"
      meta={[
        { name: 'description', content: 'Blog' },
        { name: 'keywords', content: 'Nic, blog, react, graphql, gatsby' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
                {children()}
              </div>
              
              <div style={{ flex: 1 }}>
                <Sidebar
                  title='What is this?'
                  description='My notes, research, and information gained through investigation of web development and current best practices.'
                /> 
                <Sidebar
                  title='Who am I?'
                  description='A full-stack web developer exploring new avenues to create and share my knowledge of web development technologies and practices.  I primarily use JavaScript and JavaScript Frameworks to build my applications.'
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
