import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HeaderContact.css';

HeaderContact.propTypes = {};

function HeaderContact(props) {
  return (
    <header class="header">
      <section class="header-top">
        <div class="container">
          <div class="row header-contact__row">
            <div class="col-md-8 col-sm-8 col-xs-12">
              <div class="contact">
                <p>
                  <span class="phone">
                    <a href="tel:0123546789">Phone: +0123546789</a>
                  </span>
                  <span class="email">
                    <a href="mailto:Fptpolytechnic@edu.com.vn">Email: Fptpolytechnic@edu.com.vn</a>
                  </span>
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="join-us">
                <p>
                  <a class="btn-open-login">THAM GIA NGAY</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeaderContact;
