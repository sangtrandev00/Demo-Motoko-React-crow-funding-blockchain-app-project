import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="footer-charity-text">
                <h2>Quỹ Từ Thiện</h2>
                <p>
                  Quỹ từ thiện là quỹ được tổ chức, hoạt động với mục đích hỗ trợ khắc phục sự cố do
                  thiên tai, hỏa hoạn, dịch bệnh, tai nạn và các đối tượng khác thuộc diện khó khăn,
                  yếu thế cần sự trợ giúp của xã hội, không vì mục tiêu lợi nhuận.
                </p>
                {/* <p><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i
                                        class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i
                                        class="fa fa-behance" aria-hidden="true"></i></a><a href="#"><i
                                        class="fa fa-dribbble" aria-hidden="true"></i></a></p> */}
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <div class="footer-text one">
                    <h3>BÀI ĐĂNG GẦN ĐÂY</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="material-icons">keyboard_arrow_right</i> CÁC DỰ ÁN HỖ TRỢ NGƯỜI
                          VÔ GIA CƯ{' '}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="material-icons">keyboard_arrow_right</i> CÁC DỰ ÁN HỖ TRỢ NGƯỜI
                          NGHÈO{' '}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="material-icons">keyboard_arrow_right</i> CÁC DỰ ÁN HỖ TRỢ GIÁO
                          DỤC{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-3">
                  <div class="footer-text two">
                    <h3>LIÊN KẾT HỮU ÍCH</h3>
                    <ul>
                      <li>
                        <a href="#">Trang Chủ</a>
                      </li>
                      <li>
                        <a href="#">Giới thiệu</a>
                      </li>
                      <li>
                        <a href="#">Sự Kiện</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="footer-text one">
                    <h3>CONTACT US</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="material-icons">location_on</i>391A Đ. Nam Kỳ Khởi Nghĩa, Phường
                          14, Quận 3, Thành phố Hồ Chí Minh
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="material-icons">email</i>fptpolytechnic@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="material-icons">call</i>+123456789
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
