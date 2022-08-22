import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';
import HeaderContact from '../../components/HeaderContact';
import Footer from '../../components/Footer/index';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';
HistoryDonatePage.propTypes = {};

function HistoryDonatePage(props) {
  const [donation, setDonation] = useState({});

  const params = useLocation();
  const idDonation = params.search.substring(6);
  console.log(idDonation);
  useEffect(() => {
    async function showDetailDonateInfo() {
      // const donationList
      const FundDonationObject = await demo_project_backend.view_donation(idDonation);
      // console.log(FundDonationObject[0]);
      const { FundId, Email, DonateMoney, Message, NameProject, TimeDonate } =
        FundDonationObject[0];
      const newDonation = {
        ...FundDonationObject[0],
        DonateMoney: DonateMoney.toLocaleString(),
      };
      // newDonation.FundId = FundId;
      // newDonation.Email = Email;
      // newDonation.DonateMoney = DonateMoney;
      // newDonation.Message = Message;
      // newDonation.NameProject = NameProject;
      // newDonation.TimeDonate = TimeDonate;
      console.log(newDonation);
      setDonation(newDonation);
    }
    // console.log(params);
    // console.log(props);
    showDetailDonateInfo();
    // console.log(props);
    // console.log('hello 1');
  }, []);

  return (
    <div>
      <HeaderContact />
      <Header />
      <div class="container detail-donate-page">
        <div class="row">
          <div class="swapper">
            <h2 className="detail-donate__heading">LỊCH SỬ GIAO DỊCH ĐÓNG GÓP CHI TIẾT</h2>
            <div class="grid wide">
              <div class="row ">
                <div class="col l-8 c-12">
                  <p className="">Bản tóm tắt</p>
                  <p className="">Số tiền: {donation.DonateMoney} VND</p>
                  <p className="">
                    Giao dịch này lần đầu tiên được phát vào hệ thống Quỹ từ thiện vào ngày{' '}
                    {donation.TimeDonate
                      ? donation.TimeDonate
                      : ` 28 tháng
                    7 năm 2022 lúc 10:05 PM GMT + 7`}
                    . Giao dịch hiện đã thành công. Tìm hiểu thêm về cách giao dịch hoạt động này
                  </p>
                </div>
                <div class="coi l-4 c-12">
                  <button className="btn-detail-page btn-detail-page__money">Trạng thái</button>
                  <button className="btn-detail-page btn-detail-page__status">Thành công</button>
                </div>
              </div>
            </div>

            <h2 className="detail-donate__desc-heading">Thông tin chi tiết</h2>
            <div class="grid wide">
              <div class="row">
                <div class="col l-5 c-5">
                  <p className="detail-donate__history-item">Mã giao dịch đóng góp</p>
                  <p className="detail-donate__history-item">Trạng thái</p>
                  <p className="detail-donate__history-item">Thời gian đã nhận</p>
                  <p className="detail-donate__history-item">Tên nhà hảo tâm</p>
                  <p className="detail-donate__history-item">Số tiền quyên góp</p>
                  <p className="detail-donate__history-item">Hình thức đóng góp </p>
                  <p className="detail-donate__history-item">Dự án đóng góp </p>
                  <p className="detail-donate__history-item">Nội dung lời nhắn</p>
                </div>
                <div class="col l-7 c-7">
                  <p className="detail-donate__history-item">
                    {donation.FundId ? donation.FundId : 'Empty Fund ID Name'}
                  </p>
                  <p className="detail-donate__history-item">Đã thành công</p>
                  <p className="detail-donate__history-item">
                    {donation.TimeDonate ? donation.TimeDonate : 'Sample date: 2022-07-28 22:05'}
                  </p>
                  <p className="detail-donate__history-item">
                    {donation.Name ? donation.Name : 'Empty Donor Name'}{' '}
                  </p>
                  <p className="detail-donate__history-item">
                    {donation.DonateMoney ? donation.DonateMoney : 'Empty donation.DonateMoney'} VND
                  </p>
                  <p className="detail-donate__history-item">Chuyển khoản</p>
                  <p className="detail-donate__history-item">
                    {donation.NameProject ? donation.NameProject : 'Empty name Project'}
                  </p>
                  <p className="detail-donate__history-item">
                    {donation.Message
                      ? donation.Message
                      : `Sample: Chúc các em sức khỏe, có đủ nghị lực vượt qua nghịch cảnh này, hi vọng
                    một ngày nào đó các em có thể vươn lên trở thành một người có giá trị cho xã
                    hội, và giúp đỡ những người có hoàn cảnh khó khăn như tụi em hiện tại. Thân`}
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

export default HistoryDonatePage;
