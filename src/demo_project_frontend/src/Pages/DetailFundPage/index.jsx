import React from 'react';
import PropTypes from 'prop-types';
import './chuongtrinhchitiet.css';
import Header from '../../components/Header/index';
import HeaderContact from '../../components/HeaderContact/index';
import Footer from '../../components/Footer/index';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { demo_project_backend } from '../../../../declarations/demo_project_backend';

DetailFundPage.propTypes = {};

function DetailFundPage(props) {
  // Row code, haven't fixed yet!!!
  const [fundProject, setFundProject] = useState({});

  const ProjectParams = useLocation();

  const idFundProject = ProjectParams.search.substring(6);

  console.log(idFundProject);
  useEffect(() => {
    async function showDetailFundProject() {
      const fundProjectObject = await demo_project_backend.view_fund_project(idFundProject);
      console.log(fundProjectObject);
      // console.log(FundDonationObject[0]);
      const { TargetMoney } = fundProjectObject[0];
      const newFundProject = {
        ...fundProjectObject[0],
        TargetMoney: TargetMoney.toLocaleString(),
      };

      console.log(fundProjectObject[0]);
      setFundProject(newFundProject);
    }

    showDetailFundProject();
  }, []);

  return (
    <div className="detail-fund-page">
      <HeaderContact />
      <Header />
      <div class="container detail-fund__container">
        <div class="">
          <div class="">
            <h2 className="detail-fund__id">Mã dự án: {fundProject.ProjectID}</h2>
            <h3 class="detail-fund__name">Tên dự án :{fundProject.ProjectName}</h3>
            <h3 className="detail-fund__type-project">Loại dự án: {fundProject.ProjectType}</h3>
          </div>
          <div className="detail-fund__wrapper-body">
            <div class="detail-fund__body">
              <h4 class="detail-fund__body-short-desc">
                {/* Mô tả tóm tắt */}
                Mô tả ngắn:
                {fundProject.ShortDesc}
                {/* Ring A Bell là dự án thiện nguyện được tổ chức bởi nhóm sinh viên chuyên ngành PR &
                Tổ chức sự kiện Cao đẳng FPT Polytechnic HCM. Sự kiện sẽ được diễn ra vào lúc 19:30
                – Thứ 6, ngày 03/12/2021 trên nền tảng Zoom. Toàn bộ số tiền quyên góp được từ dự án
                sẽ được dùng với mục đích hỗ trợ các hoàn cảnh vô gia cư trên địa bàn Thành phố Hồ
                Chí Minh. */}
              </h4>
              <div class="detail-fund__body-full-detail">
                <p class="detail-fund__body-full-heading">
                  Ring A Bell là dự án của nhóm 11 sinh viên đến từ lớp PR16306, chuyên ngành PR &
                  Tổ chức sự kiện, Cao đẳng FPT Polytechnic Hồ Chí Minh thực hiện với hy vọng có thể
                  kêu gọi mọi người cùng chung tay giúp đỡ các hoàn cảnh vô gia cư đang gặp rất
                  nhiều khó khăn trên địa bàn thành phố Hồ Chí Minh.
                </p>
                <div class="detail-fund__body-full-img">
                  {/* img/img-ctrinh/ctrinh/hinh-3.jpg */}
                  <img src={fundProject.ImgUrl} alt="" />
                  <p className="detail-fund__img-desc">Hình ảnh: Dự án thiện nguyện Ring A Bell</p>
                </div>

                <div className="detail-fund__body-full-detail-text-wrapper">
                  <p className="detail-fund__body-full-detail-text">
                    Chi tiết thông tin: {fundProject.FullDesc}
                  </p>
                </div>

                {/* <p class="">
                  Dự án Ring A Bell sẽ bao gồm hai phần chính: Sự kiện giải trí và Hoạt động kêu gọi
                  quyên góp.
                  <br></br>
                </p>
                <p class="">
                  Ở phần sự kiện giải trí, Ring A Bell sẽ mang đến cho các bạn một bầu không khí
                  giải trí đúng nghĩa với những hoạt động đầy sôi nổi như: giao lưu âm nhạc, tham
                  gia minigame và đặc biệt hơn hết chính là thưởng thức tiết mục hài độc thoại đầy
                  thú vị với khách mời Phương Nam - Cây hài độc thoại nổi tiếng đến từ Saigon Tếu.
                </p>
                <p class="">
                  “Gửi chút tình, sưởi ấm một trái tim” chính là thông điệp mà các bạn sinh viên
                  muốn gửi gắm thông qua sự chương trình. Hãy cùng Ring A Bell góp nhặt từng chút
                  yêu thương và trao tặng đến các hoàn cảnh vô gia cư để họ có thể cảm thấy ấm áp và
                  hạnh phúc hơn các bạn nhé!
                </p>
                <h4>Thông tin chi tiết về sự kiện:</h4>
                <ul class="">
                  <li>Thời gian: 19h30 - ngày 03/12/2021.</li>
                  <li>Hình thức: Trực tuyến trên ứng dụng Zoom.</li>
                  <li>
                    Thông tin chi tiết có thể theo dõi thêm tại Fanpage:
                    https://www.facebook.com/ringabell16306.
                  </li>
                </ul> */}
              </div>
            </div>

            <div class="detail-fund__sidebar">
              <p>
                <span class="event_left">
                  <i class="material-icons">access_time</i>30 ngày
                </span>
                <span class="event_right">
                  <i class="material-icons">location_on</i>TP.Hồ Chí Minh
                </span>
              </p>
              <div class="progress-text">
                <p class="progress-top">50%</p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '50%' }}
                  ></div>
                </div>
                <p class="progress-left">
                  Đã góp: <span>5.000.000</span>
                </p>
                <p class="progress-right">
                  Mục tiêu: <span>10.000.000</span>
                </p>
              </div>
              <h2 class="borderes">
                <a href="donggop.html">ĐÓNG GÓP NGAY</a>
              </h2>
              <div class="finance">
                <h2 class="finance-title">BÁO CÁO TÀI CHÍNH</h2>
                <div class="finance-title__desc">
                  <a href="search-page.html">* Kiểm tra đóng góp</a>
                </div>
                <div class="finance-title__desc">
                  <a href="chitietgiaingan.html">* Kiểm tra giải ngân</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>

      <Footer />
    </div>
  );
}

export default DetailFundPage;
