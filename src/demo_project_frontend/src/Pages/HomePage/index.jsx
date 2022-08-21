import React from 'react';
import PropTypes from 'prop-types';
import HeaderContact from '../../components/HeaderContact';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import LastestNews from '../../components/LastestNews';
import Footer from '../../components/Footer';
import ImportantDonation from '../../components/ImportantDonation';
import FundItemGroup from '../../components/FundItemGroup';
import {
  poorFundProjects,
  educationFundProjects,
  homeLessFundProjects,
} from './fund-projects-data';

HomePage.propTypes = {};

function HomePage(props) {
  // get data from here!!!

  const homeLessFundList = homeLessFundProjects;
  const poorFundList = poorFundProjects;
  const educationFundList = educationFundProjects;

  return (
    <div>
      <HeaderContact />
      <Header />
      <Banner />
      <ImportantDonation />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI VÔ GIA CƯ"
        fundProjectList={homeLessFundList}
      />
      <FundItemGroup nameFundGroup="CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO" fundProjectList={poorFundList} />
      <FundItemGroup
        nameFundGroup="CÁC DỰ ÁN HỖ TRỢ GIÁO DỤC"
        fundProjectList={educationFundList}
      />
      <LastestNews />
      <Footer />
    </div>
  );
}

export default HomePage;
