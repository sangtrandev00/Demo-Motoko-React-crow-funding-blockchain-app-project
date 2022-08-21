import React from 'react';
import PropTypes from 'prop-types';
import banner_img_1 from "../../../assets/img/banner/hinh-1.jpg"

Banner.propTypes = {
    
};

function Banner(props) {
    return (
       <div >
         <section class="banner">
        <div class="banner__img">
            <img src={banner_img_1} alt=""/>
        </div>
        <div class="cover_img"></div>
        <p class="slogan">“Với thế giới, bạn chỉ là một người bình thường,nhưng
            với riêng một người nào đó, bạn có thể là cả thế giới”</p>
        </section>
       </div>
    );
}

export default Banner;