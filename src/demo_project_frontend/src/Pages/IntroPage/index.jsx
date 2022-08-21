import React from 'react';
import PropTypes from 'prop-types';
import HeaderContact from '../../components/HeaderContact';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

IntroPage.propTypes = {};

function IntroPage(props) {
  return (
    <div>
      <HeaderContact />
      <Header />

      <div className="introduction-page">
        <div class="container container--color">
          <div class="introduce col-xs-12  col-sm-12 col-md-12">
            <div class="introduce-title">
              <h3 class="introduce-title__desc"> GIỚI THIỆU</h3>
              <p></p>
            </div>
            <div class="introduce-head">
              <div class="introduce-head__desc">
                Quỹ Từ thiện Fpoly (gọi tắt là Quỹ Fpoly) là Quỹ Từ thiện tư nhân được thành lập vào
                ngày 31 tháng 7 năm 2022. Quỹ Fpoly được thành lập bởi nhóm sinh viên team Future
                Vision trường Cao Đẳng FPT Polytechnic Thành phố Hồ Chí Minh.
              </div>
              <div class="introduce-head__member">
                {/* Fix lại đường dẫn url img của trang này!!! */}
                <div
                  class="introduce-head__image"
                  style={{ backgroundImage: 'url(img/team-dev/Dung.jpg)' }}
                ></div>
                <div
                  class="introduce-head__image"
                  style={{ backgroundImage: 'url(img/team-dev/Dung.jpg)' }}
                ></div>
                <div
                  class="introduce-head__image"
                  style={{ backgroundImage: 'url(img/team-dev/Dung.jpg)' }}
                ></div>
                <div
                  class="introduce-head__image"
                  style={{ backgroundImage: 'url(img/team-dev/Dung.jpg)' }}
                ></div>
              </div>
              <div class="introduce-head__title">Các đặc điểm của Quỹ Fpoly</div>
              <div class="introduce-head__desc">
                <h4>Tóm tắt</h4>
                <p>
                  {' '}
                  Quỹ hoạt động theo nguyên tắc: chi phí quản trị bằng không. Toàn bộ tiền đóng góp
                  của nhà hảo tâm chuyển hết cho người thụ hưởng
                </p>
                <p>
                  {' '}
                  Quỹ từ thiện Fpoly được đặt dưới sự quản lý của Ban giám hiệu trường cao đẳng
                  Fpoly, hệ thống được tích hợp công nghệ blockchain an toàn, tự động và minh bạch
                </p>
                <ul>
                  <li>
                    Quỹ chủ trương thông qua các hoạt động thiện nguyện để lan tỏa lòng nhân ái đến
                    cộng đồng, chú trọng trị liệu tinh thần, chuyển hóa khổ đau
                  </li>
                  <li>
                    {' '}
                    Quỹ đặt nặng vấn đề hiệu quả trong các dự án từ thiện, xác minh nhiều lớp, đánh
                    giá khách quan sau dự án. Quỹ tiến hành áp dụng những tính chất ưu việt của
                    blockchain như an toàn, tự động và minh bạch cho từng dự án nhỏ cũng như toàn hệ
                    thống.
                  </li>
                  <li>
                    Quỹ làm nền để biến ý tưởng thiện nguyện của tất cả mọi người thành hiện thực.
                    Mọi cá nhân và tổ chức đều có thể là đối tác của Quỹ
                  </li>
                </ul>
              </div>
              <div class="introduce-head__title">Cơ chế hoạt động</div>
              <div class="introduce-head__desc">
                <p>
                  Đây là quỹ từ thiện có chi phí quản lý bằng 0. Điều này có nghĩa là toàn bộ tiền
                  đóng góp của nhà hảo tâm đều được chuyển hết cho đối tượng thụ hưởng bằng hình
                  thức tự động hóa an toàn và minh bạch.
                </p>
              </div>
              <div class="introduce-head__desc">
                <p>
                  Tiền đóng góp của nhà hảo tâm sẽ được đưa hết 100% vào Quỹ để sử dụng cho các dự
                  án từ thiện. Nhà hảo tâm có thể đóng góp có chỉ định dự án cụ thể. Số tiền đóng
                  góp này phải được ban quản lý quỹ đối xử hết sức trân trọng, cân nhắc cẩn thận khi
                  sử dụng cho mục đích từ thiện.
                </p>
              </div>
              <div class="introduce-head__desc">
                <p>
                  Những dự án từ thiện sẽ được phê duyệt kĩ lưỡng trước khi được đưa vào hệ thống để
                  kêu gọi từ thiện. Những dự án đã được phê duyệt sẽ có những hạn mức nhất định của
                  dự án và thời gian kêu gọi của dự án. Số tiền đóng góp của từng dự án sẽ được giải
                  ngân theo đợt và sẽ giải ngân hết khi đạt số tiền kêu gọi hoặc hết thời gian kêu
                  gọi ủng hộ.
                </p>
              </div>
              <div class="introduce-head__desc">
                <p>
                  Tóm lại, những nguồn thu nhân danh Quỹ Fpoly đều phải đưa vào quỹ tiền chung và
                  chuyển cho từng dự án theo thời gian đã định sẵn. Mỗi cá nhân tổ chức đứng ra kêu
                  gọi từ thiện có trách nhiệm tự kêu gọi cho dự án đang quản lý trên hệ thống. Ban
                  quản trị hệ thống sẽ trực tiếp phê duyệt cho từng dự án.
                </p>
              </div>
              <div class="introduce-head__title">Các dự án đang tién hành</div>
              <div class="introduce-head__title introduce-head__title--font ">
                Các dự án hỗ trợ người vô gia cư
              </div>
              <div class="introduce-head__desc">
                <ul>
                  <li>
                    Cùng sinh viên FPoly lan toả yêu thương đến những người vô gia cư, cùng chung
                    tay giúp đỡ các hoàn cảnh vô gia cư đang gặp rất nhiều khó khăn trên địa bàn
                    thành phố Hồ Chí Minh.
                  </li>
                </ul>
              </div>
              <div class="introduce-head__title introduce-head__title--font ">
                Các dự án hỗ trợ người nghèo
              </div>
              <div class="introduce-head__desc">
                <ul>
                  <li>
                    Cùng sinh viên FPT Polytechnic sẻ chia yêu thương với người nghèo.Chương trình
                    nhằm góp phần san sẻ gánh nặng về mặt vật chất cho những hoàn cảnh khó khăn
                    trong cuộc sống.
                  </li>
                </ul>
              </div>
              <div class="introduce-head__title introduce-head__title--font ">
                Các dự án hỗ trợ giáo dục
              </div>
              <div class="introduce-head__desc">
                <ul>
                  <li>
                    Cùng sinh viên FPT Polytechnic sẻ chia yêu thương với những hoàn cảnh mồ côi tại
                    những mái ấm tình thương.Chương trình nhằm góp phần san sẻ gánh nặng về mặt tinh
                    thần và vật chất cho những hoàn cảnh không may mắn trong cuộc sống.
                  </li>
                </ul>
              </div>
            </div>
            <div class="introduce-menu">
              <h4 class="introduce-menu__title">VỀ CHÚNG TÔI</h4>
              <ul>
                <li class="introduce-menu__desc-link">
                  <a href="">Giới thiệu</a>{' '}
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Lịch sử</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Tổ chức</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Quy tắc ứng xử</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Quy chế tác viên</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Để trở thành đối tác Fpoy</a>
                </li>
              </ul>
              <h4 class="introduce-menu__title">CHƯƠNG TRÌNH</h4>
              <ul>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ người vô gia cư</a>{' '}
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ người nghèo</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ giáo dục</a>
                </li>
              </ul>

              <h4 class="introduce-menu__title">TIN TỨC</h4>
              <ul>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ người vô gia cư</a>{' '}
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ người nghèo</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Hỗ trợ giáo dục</a>
                </li>
                <li class="introduce-menu__desc-link">
                  <a href="">Tin tức khác</a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

      {/* <Banner /> */}
      {/* <ImportantDonation /> */}
      {/* <LastestNews /> */}
      <Footer />
    </div>
  );
}

export default IntroPage;
