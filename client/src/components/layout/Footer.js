import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <div className="footer bg-primary">
      <Fragment>
        <a href='https://koa-script.netlify.app/' target="-blank">Built By KoaScript <i class="fas fa-cat"/></a>
        <a href='https://github.com/Cvan23/contact-keeper' target="-blank">Github Repo For This Project <i class="fab fa-github"/></a>
      </Fragment>
    </div>
  ) 
};

export default Footer;
