import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderContact from '../../components/HeaderContact';

DoantionPage.propTypes = {};

function DoantionPage(props) {
  console.log('Props donate page: ', props);
  const { onDonateSubmit } = props;
  console.log(onDonateSubmit);

  return (
    <div className="donation-page">
      {/* Header */}
      <HeaderContact />
      <Header />
      <section class="donors">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="donors_input col-md-6 ">
                <h2 class="donors-input-title">ĐÓNG GÓP</h2>
                <form class="donors-input-form" action="#" method="post">
                  <div class="donors-input-form__infor">
                    {/* Name input */}
                    <input class="donors-input-form__infor-desc" type="text" placeholder="Tên" />
                    {/* Email Input */}
                    <input class="donors-input-form__infor-desc" type="email" placeholder="Email" />
                    {/* Phone input */}
                    <input
                      class="donors-input-form__infor-desc"
                      type="text"
                      placeholder="Số điện thoại"
                    />
                    {/* Donate Money */}
                    <input
                      class="donors-input-form__infor-desc"
                      type="text"
                      placeholder="Số tiền đóng góp"
                    />
                  </div>
                  {/* Name Donate Project */}
                  <div class="donors-input-form__option">
                    <select class="donors-input-form__option-desc">
                      <option>Tôi muốn đóng góp cho dự án 1</option>
                      <option>Tôi muốn đóng góp cho dự án 2</option>
                      <option>Tôi muốn đóng góp cho dự án 3</option>
                    </select>

                    <div class="donors-input-form__option">
                      <select class="donors-input-form__option-desc" name="" id="">
                        <option value="">Chuyển tiền online</option>
                        <option value="">Đóng góp bằng ví</option>
                      </select>
                    </div>

                    {/* Message Donate */}
                    <div class="donors-input-form__note">
                      <textarea
                        class="donors-input-form__note-desc"
                        type="text"
                        placeholder="Lời nhắn"
                      ></textarea>
                    </div>
                  </div>

                  <a class="donors-input-form__done" href="#">
                    <input
                      class="donors-input-form__done-desc"
                      type="submit"
                      value="ĐÓNG GÓP BẰNG VNPAY"
                    />
                  </a>
                </form>
              </div>

              <div class="donors-output col-md-6 ">
                <div class="donors-output-head">
                  <div class="donors-output-head__title">LỊCH SỬ GIAO DỊCH</div>
                  <a href="search-page.html" class="donors-output-head__link">
                    <button class="donors-output-head__link-btn">KIỂM TRA ĐÓNG GÓP</button>
                  </a>
                </div>
                <div class="donors-output-container">
                  <table class="donors-output-container__body">
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">Mã giao dịch</td>
                      <td class="colum2">Thời gian</td>
                      <td class="colum3">Số tiền</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                    <tr class="donors-output-container__body-title">
                      <td class="colum1">
                        <a href="">hd3ehd932hd832hd93ye3d...</a>
                      </td>
                      <td class="colum2">12:30</td>
                      <td class="colum3">300.000</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DoantionPage;
