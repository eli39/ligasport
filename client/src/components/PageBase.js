import React from 'react';
import PropTypes from 'prop-types';
const PageBase = (props) => {
  return (
    <section className="content container-fluid">
      {props.children}
    </section>
  );
};

PageBase.propTypes = {
  children: PropTypes.element
};

export default PageBase;
