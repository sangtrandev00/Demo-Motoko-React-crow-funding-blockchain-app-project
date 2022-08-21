import React from 'react';
import PropTypes from 'prop-types';
import PoorFund from './components/PoorFund';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomeLessFund from './components/HomeLessFund';
import EducationFund from './components/EducationFund';
import HeaderContact from '../../components/HeaderContact';

FundProgramsPage.propTypes = {};

function FundProgramsPage(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <HeaderContact />
      <Header />

      {/* <Route path="programs-fund-page/poor-fund" component={PoorFund}/> */}
      {/* <PoorFund /> */}
      <Switch>
        <Route path={`${match.path}/poor-fund`} component={PoorFund} />
        <Route path={`${match.path}/education-fund`} component={EducationFund} />
        <Route path={`${match.path}/homeless-fund`} component={HomeLessFund} />
        <Route path={match.path} component={PoorFund} />
      </Switch>

      <Footer />
    </div>
  );
}

export default FundProgramsPage;
