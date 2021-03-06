import React from 'react';
import LinkButton from '../linkButton';

const propTypes = {
  repository: React.PropTypes.string.isRequired, // Name of the repo
  owner: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired, // Title of the section we are on
  siteId: React.PropTypes.number.isRequired,
  branch: React.PropTypes.string.isRequired,
  fileName: React.PropTypes.string,
  viewLink: React.PropTypes.string
};

const defaultPropTypes = {
  fileName: ''
};

class PagesHeader extends React.Component {
  getLinkButtonConfigs() {
    const {
      siteId,
      branch,
      fileName,
      viewLink,
      owner,
      repository
    } = this.props;

    return {
      text: 'View Website',
      alt: 'View this website',
      className: 'usa-button-big pull-right icon icon-view icon-white',
      target: '_blank',
      href: viewLink,
    };
  }

  render() {
    const { repository, title } = this.props;
    const buttonConfigs = this.getLinkButtonConfigs();

    return (
      <div className="usa-grid header">
        <div className="usa-width-two-thirds">
          <img
            className="header-icon"
            src="/images/website.svg"
            alt="Websites icon"/>
          <div className="header-title">
            <h1>{repository}</h1>
            <p>{title}</p>
          </div>
        </div>
        <div className="usa-width-one-third">
          <LinkButton {...buttonConfigs} />
        </div>
      </div>
    );
  }
}

PagesHeader.propTypes = propTypes;
PagesHeader.defaultPropTypes = defaultPropTypes;

export default PagesHeader;
