import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';
import HeaderContact from '../../components/HeaderContact';
import Footer from '../../components/Footer/index';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
DisbursementPage.propTypes = {};

function DisbursementPage(props) {
  // const [donation, setDonation] = useState({});

  // const params = useLocation();
  // const idDonation = params.search.substring(6);
  // console.log(idDonation);
  // useEffect(() => {
  //   async function showDetailDonateInfo() {
  //     // const donationList
  //     const FundDonationObject = await demo_project_backend.view_donation(idDonation);
  //     // console.log(FundDonationObject[0]);
  //     const { FundId, Email, DonateMoney, Message, NameProject, TimeDonate } =
  //       FundDonationObject[0];
  //     const newDonation = {
  //       ...FundDonationObject[0],
  //       DonateMoney: DonateMoney.toLocaleString(),
  //     };
  //     // newDonation.FundId = FundId;
  //     // newDonation.Email = Email;
  //     // newDonation.DonateMoney = DonateMoney;
  //     // newDonation.Message = Message;
  //     // newDonation.NameProject = NameProject;
  //     // newDonation.TimeDonate = TimeDonate;
  //     console.log(newDonation);
  //     setDonation(newDonation);
  //   }
  //   // console.log(params);
  //   // console.log(props);
  //   showDetailDonateInfo();
  //   // console.log(props);
  //   // console.log('hello 1');
  // }, []);

  return (
    <div>
      <HeaderContact />
      <Header />
      <div class="container detail-disbursement-page">
        <div class="row">
          <div class="swapper">
            <h2 className="detail-disbursement__heading">LỊCH SỬ GIẢI NGÂN CHI TIẾT</h2>
            <div class="grid wide">
              <div class="row ">
                <div class="col l-8 c-12">
                  <p className="">Bản tóm tắt</p>
                  <p className="">Số tiền: 20000000 VND</p>
                  <p className="">
                    Giao dịch này lần đầu tiên được phát vào hệ thống Quỹ từ thiện vào ngày 28 tháng
                    7 năm 2022 lúc 10:05 PM GMT + 7. Giao dịch hiện đã thành công. Tìm hiểu thêm về
                    cách giao dịch hoạt động này
                  </p>
                </div>
                <div class="coi l-4 c-12">
                  <button className="btn-detail-page btn-detail-page__money">5,000,000</button>
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
                  <p className="detail-disbursement__history-item">Dự án nhận giải ngân</p>
                  <p className="detail-disbursement__history-item">Thời gian đã nhận</p>
                  <p className="detail-disbursement__history-item">Đợt giải ngân</p>
                  <p className="detail-disbursement__history-item">Số tiền giải ngân</p>
                  <p className="detail-disbursement__history-item">Hình thức giải ngân </p>
                  <p className="detail-disbursement__history-item">Nội dung giải ngân</p>
                </div>
                <div class="col l-7 c-7">
                  <p className="detail-disbursement__history-item">PS202227FDSFSD</p>
                  <p className="detail-disbursement__history-item">Đã thành công</p>
                  <p className="detail-disbursement__history-item">Nụ cười 1- Giúp đở trẻ mồ côi</p>
                  <p className="detail-disbursement__history-item">2022-07-28 22:05</p>
                  <p className="detail-disbursement__history-item">Giải ngân đợt 1</p>
                  <p className="detail-disbursement__history-item">120000000 VND</p>
                  <p className="detail-disbursement__history-item">Chuyển khoản</p>
                  <p className="detail-disbursement__history-item">
                    Giải ngân dùng sô tiền đóng góp vào chi phí bệnh viện cho người nghèo, mua sữa
                    cơm gạo tặng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DisbursementPage;
