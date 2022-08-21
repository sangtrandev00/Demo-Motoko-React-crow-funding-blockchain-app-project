import React from 'react';
import PropTypes from 'prop-types';
import ImportantImg_1 from '../../../assets/img/img-ctrinh/ctrinh-quantrong/hinh-1.jpeg';
ImportantDonation.propTypes = {};

function ImportantDonation(props) {
  return (
    <div>
      <section class="donate_section">
        <div class="container">
          <div class="row">
            <div class="col-md-7 for-padding">
              <img src={ImportantImg_1} alt="" />
            </div>
            <div class="col-md-5 for-padding">
              <h4>DỰ ÁN QUAN TRỌNG</h4>
              <h3>GIÚP TRẺ MỒ CÔI TẠI MÁI ẤM:</h3>
              <p>
                Mái ấm Tín Thác là nơi đã thu nhận, nuôi dưỡng, chăm sóc những đứa trẻ mồ côi,
                khuyết tật. Đồng thời cũng là vòng tay lớn yêu thương, che chở cho những đứa bé đã
                bị bỏ rơi trong suốt 10 năm qua. Tại nơi đây, hàng trăm đứa trẻ đã thực sự có được
                một mái ấm thân thương như ruột thịt đúng nghĩa. Đây cũng chính là nguồn cảm hứng,
                tạo động lực cho các bạn sinh viên Cao đẳng FPT Polytechnic của team 28s Event thực
                hiện dự án mang tên “Ban mai giữa phong ba”
              </p>
              <div class="progress-text">
                <p class="progress-top">50%</p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '50%' }}
                  ></div>
                </div>
                <p class="progress-left">Đã góp: 5.000.000</p>
                <p class="progress-right">Mục tiêu: 10.000.000</p>
              </div>
              <h2>
                <a href="#">ĐÓNG GÓP NGAY</a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImportantDonation;
