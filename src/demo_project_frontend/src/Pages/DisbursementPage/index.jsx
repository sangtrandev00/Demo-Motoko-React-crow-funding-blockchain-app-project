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
              <h2 className="detail-disbursement__heading">LỊCH SỬ GIẢI NGÂN CHI TIẾT</h2>
              <div class="grid wide">
                <div class="row ">
                  <div class="col l-8 c-12">
                    <p className="">Bản tóm tắt</p>
                    <p className="">Số tiền: {DisbursementMoney} VND</p>
                    <p className="">
                      Giao dịch này lần đầu tiên được phát vào hệ thống Quỹ từ thiện vào{' '}
                      {DateAppliedSystem.toLocaleString} sample: ngày 28 tháng 7 năm 2022 lúc 10:05
                      PM GMT + 7. Giao dịch hiện đã thành công. Tìm hiểu thêm về cách giao dịch hoạt
                      động này
                    </p>
                  </div>
                  <div class="coi l-4 c-12">
                    <button className="btn-detail-page btn-detail-page__money">Trạng thái</button>
                    <button className="btn-detail-page btn-detail-page__status">Thành công</button>
                  </div>
                </div>
              </div>

              <h2 className="detail-disbursement__desc-heading">Thông tin chi tiết</h2>
              <div class="grid wide">
                <div class="row">
                  <div class="col l-5 c-5">
                    <p className="detail-disbursement__history-item">Mã giao dịch giải ngân</p>
                    <p className="detail-disbursement__history-item">Trạng thái</p>
                    <p className="detail-disbursement__history-item">
                      Dự án nhận giải ngân -- Mã dự án
                    </p>
                    <p className="detail-disbursement__history-item">Tên loại dự án</p>
                    <p className="detail-disbursement__history-item">Người kêu gọi giải ngân</p>
                    <p className="detail-disbursement__history-item">Thời gian kêu gọi giải ngân</p>
                    <p className="detail-disbursement__history-item">Người xác nhận giải ngân</p>
                    <p className="detail-disbursement__history-item">
                      Thời gian xác nhận giải ngân{' '}
                    </p>
                    <p className="detail-disbursement__history-item">Các đợt giải ngân</p>
                    <p className="detail-disbursement__history-item">Số tiền giải ngân</p>
                    <p className="detail-disbursement__history-item">Hình thức giải ngân</p>
                    <p className="detail-disbursement__history-item">Nội dung giải ngân</p>
                  </div>
                  <div class="col l-7 c-7">
                    <p className="detail-disbursement__history-item">
                      Mã: {DisbursementID || 'Sample: PS202227FDSFSD'}
                    </p>
                    <p className="detail-disbursement__history-item">Đã thành công</p>
                    <p className="detail-disbursement__history-item">
                      {nameProject || 'Name ProjectSample'} -- Mã:{' '}
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
                      {UserConfirm || 'Sample: Nông Văn Tám'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {DateConfirm || 'Sample: 2022-07-29 22:05'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {NumberDisbursement || 'Sample: Giải ngân đợt 1, Giải ngân đợt 2'}
                    </p>
                    <p className="detail-disbursement__history-item">
                      {DisbursementMoney || 'Sample: 120000000 VND'}
                    </p>
                    <p className="detail-disbursement__history-item">Chuyển khoản</p>
                    <p className="detail-disbursement__history-item">
                      {Reason ||
                        ` Sample: Giải ngân dùng sô tiền đóng góp vào chi phí bệnh viện cho người
                    nghèo, mua sữa cơm gạo tặng.`}
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
