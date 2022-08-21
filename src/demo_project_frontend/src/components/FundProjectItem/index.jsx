import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

FundProjectItem.propTypes = {};

function FundProjectItem(props) {
  const { fundId, imgUrl, fundName, restDate, location, fundInfo, currentDonate, targetDonate } =
    props;

  const progressPercent = (currentDonate / targetDonate) * 100;

  const completeBtnStyle = {
    backgroundColor: progressPercent === 100 && '#f26f21',
    color: progressPercent === 100 && '#fff',
    cursor: progressPercent === 100 && 'not-allowed',
  };

  return (
    <div class="col-md-4 col-xs-12">
      <div class="item">
        <img src={imgUrl} alt="" />
        <div class="for_padding">
          <h2 class="name_event">
            Kỳ {fundId} : {fundName}
          </h2>
          <p>
            <span class="event_left">
              <i class="material-icons">access_time</i>
              {restDate} ngày
            </span>
            <p></p>
            <span class="event_right">
              <i class="material-icons">location_on</i>
              {location}
            </span>
          </p>
          <p class="describe_event">{fundInfo} </p>
          <div class="progress-text">
            <p class="progress-top">{progressPercent}%</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow={currentDonate}
                aria-valuemin="0"
                aria-valuemax={targetDonate}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p class="progress-left">
              Đã góp: <span>{currentDonate}</span>
            </p>
            <p class="progress-right">
              Mục tiêu: <span>{targetDonate}</span>
            </p>
          </div>
          <h2 class="borderes">
            <Link style={completeBtnStyle} to="/donation-page">
              {progressPercent === 100 ? 'ĐÃ HOÀN THÀNH' : 'ĐÓNG GÓP NGAY'}
            </Link>
          </h2>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  );
}

export default FundProjectItem;
