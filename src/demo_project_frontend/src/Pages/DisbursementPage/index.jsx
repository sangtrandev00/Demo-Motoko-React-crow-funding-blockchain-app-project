import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';
import HeaderContact from '../../components/HeaderContact';
import Footer from '../../components/Footer/index';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
import './DisbursementPage.css';

DisbursementPage.propTypes = {};

function DisbursementPage(props) {
  const params = useLocation();
  const IdDetailProject = params.search.substring(6);
  // console.log(IdDetailProject);
  const [Disbursement, setDisbursement] = useState({});
  const {
    DisbursementID,
    DateConfirm,
    DateRequest,
    DisbursementMoney,
    NumberDisbursement,
    ProjectID,
    Reason,
    TypeProject,
    UserConfirm,
    UserRequest,
  } = Disbursement;

  const DateAppliedSystem = new Date(DateConfirm);
  // const listDisbursementString = NumberDisbursement.join(', ');
  // console.log('disbursementId: ', DisbursementID);
  console.log('disbursementId: typeof', typeof DisbursementID);
  console.log('NumberDisbursement: typeof', typeof NumberDisbursement);
  // console.log('NumberDisbursement: ', NumberDisbursement);
  // Name project ???
  // const disbursementIdText = DisbursementID.toString();
  const [nameProject, setNameProject] = useState('');

  useEffect(() => {
    async function showDetailDisbursementInfo() {
      // // const donationList
      // const FundProjectObject = await demo_project_backend.view_fund_project(IdDetailProject);

      let disbursementList = await demo_project_backend.readValueDisbursementInfos();

      disbursementList = disbursementList.map((disbursement) => disbursement[0]);
      // console.log(disbursementList);
      const targetDisbursementObject = disbursementList.find(
        (disbursement) => disbursement.ProjectID === IdDetailProject
      );
      // console.log('target disbursement: ', targetDisbursementObject);

      setDisbursement(targetDisbursementObject);

      const fundProjectObject = await demo_project_backend.view_fund_project(IdDetailProject);
      const { ProjectName } = fundProjectObject[0];
      setNameProject(ProjectName);
    }
    // console.log(params);
    // console.log(props);
    showDetailDisbursementInfo();
    // console.log(props);
    // console.log('hello 1');
  }, []);

  return (
    <div>
      <HeaderContact />
      <Header />
      <div class="container detail-disbursement-page">
        <div class="row">
          {IdDetailProject && (
            <div class="swapper">
              <h2 className="detail-disbursement__heading">L???CH S??? GI???I NG??N CHI TI???T</h2>
              <div class="grid wide">
                <div class="row ">
                  <div class="col l-8 c-12">
                    <p className="">B???n t??m t???t</p>
                    <p className="">S??? ti???n: {DisbursementMoney} VND</p>
                    <p className="">
                      Giao d???ch n??y l???n ?????u ti??n ???????c ph??t v??o h??? th???ng Qu??? t??? thi???n v??o{' '}
                      {DateAppliedSystem.toLocaleString} sample: ng??y 28 th??ng 7 n??m 2022 l??c 10:05
                      PM GMT + 7. Giao d???ch hi???n ???? th??nh c??ng. T??m hi???u th??m v??? c??ch giao d???ch ho???t
                      ?????ng n??y
                    </p>
                  </div>
                  <div class="coi l-4 c-12">
                    <button className="btn-detail-page btn-detail-page__money">Tr???ng th??i</button>
                    <button className="btn-detail-page btn-detail-page__status">Th??nh c??ng</button>
                  </div>
                </div>
              </div>

              <h2 className="detail-disbursement__desc-heading">Th??ng tin chi ti???t</h2>
              <div class="grid wide">
                <div class="row">
                  <div class="col l-5 c-5">
                    <p className="detail-disbursement__history-item">M?? giao d???ch gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">Tr???ng th??i</p>
                    <p className="detail-disbursement__history-item">
                      D??? ??n nh???n gi???i ng??n -- M?? d??? ??n
                    </p>
                    <p className="detail-disbursement__history-item">T??n lo???i d??? ??n</p>
                    <p className="detail-disbursement__history-item">Ng?????i k??u g???i gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">Th???i gian k??u g???i gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">Ng?????i x??c nh???n gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">
                      Th???i gian x??c nh???n gi???i ng??n{' '}
                    </p>
                    <p className="detail-disbursement__history-item">C??c ?????t gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">S??? ti???n gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">H??nh th???c gi???i ng??n</p>
                    <p className="detail-disbursement__history-item">N???i dung gi???i ng??n</p>
                  </div>
                  <div class="col l-7 c-7">
                    <p className="detail-disbursement__history-item">
                      M??: {DisbursementID || 'Sample: PS202227FDSFSD'}
                    </p>
                    <p className="detail-disbursement__history-item">???? th??nh c??ng</p>
                    <p className="detail-disbursement__history-item">
                      {nameProject || 'Name ProjectSample'} -- M??:{' '}
                      {ProjectID || 'sample project008'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {TypeProject || 'Sample: Type project'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {UserRequest || 'Sample: Userrequest'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {DateRequest || 'Sample: 2022-07-28 22:05'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {UserConfirm || 'Sample: N??ng V??n T??m'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {DateConfirm || 'Sample: 2022-07-29 22:05'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {NumberDisbursement || 'Sample: Gi???i ng??n ?????t 1, Gi???i ng??n ?????t 2'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {DisbursementMoney || 'Sample: 120000000 VND'}
                    </p>
                    <p className="detail-disbursement__history-item">Chuy???n kho???n</p>
                    <p className="detail-disbursement__history-item">
                      {Reason ||
                        ` Sample: Gi???i ng??n d??ng s?? ti???n ????ng g??p v??o chi ph?? b???nh vi???n cho ng?????i
                    ngh??o, mua s???a c??m g???o t???ng.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DisbursementPage;
