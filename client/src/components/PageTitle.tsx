import React from "react";
import * as PropTypes from "prop-types";
import { Helmet } from "react-helmet";

interface IPageTitle {
  title: string;
}

const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  title = `${title} | Utube`;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
