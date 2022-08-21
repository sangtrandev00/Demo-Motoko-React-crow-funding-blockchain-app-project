import React from 'react';
import PropTypes from 'prop-types';

LastestNews.propTypes = {
    
};

function LastestNews(props) {
    return (
        <div>
             <div class="clear"></div>

<section class="letast_news">
    <h2>TIN TỨC</h2>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="single_news">
                    <img src="img/news_images_1.jpg" alt=""/>
                    <div class="texts">
                        <p class="date"><a href="#">30 May, 2017</a></p>
                        <h3>Thông báo kết thúc Dự án Nụ Cười 7 và Nụ Cười 8</h3>
                        <p class="test">Sau nhiều năm đồng hành cùng Quỹ Từ thiện Bông Sen, Quán cơm xã hội Nụ
                            Cười 7 và Quán cơm xã hội Nụ Cười 8 đã cung cấp hơn...</p>
                        <h3><a href="#">READ MORE</a></h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="single_news">
                    <img src="img/news_images_2.jpg" alt=""/>
                    <div class="texts">
                        <p class="date"><a href="#">30 May, 2017</a></p>
                        <h3>Bàn giao 5 chiếc xe Ba bánh điện cho Nhà May Mắn</h3>
                        <p class="test">Niềm hân hoan, vui mừng hiện rõ trên gương mặt các anh chị. Có anh thì
                            chạy vèo vài vòng trên chiếc xe mới nhưng cũng có anh lần đầu... </p>
                        <h3><a href="#">READ MORE</a></h3>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="single_news">
                    <img src="img/news_images_3.jpg" alt=""/>
                    <div class="texts">
                        <p class="date"><a href="#">30 May, 2017</a></p>
                        <h3>Bình Chánh, bồi hồi ngày trở lại</h3>
                        <p class="test">Trở lại Bình Chánh từ sau đợt hỗ trợ lúc giãn cách, dịch bệnh đã qua đi
                            nhưng những mất mác của những trẻ em ở đây vẫn là một...</p>
                        <h3><a href="#">READ MORE</a></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}

export default LastestNews;