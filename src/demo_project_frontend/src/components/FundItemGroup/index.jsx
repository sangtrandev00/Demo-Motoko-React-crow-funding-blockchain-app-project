import React from 'react';
import PropTypes from 'prop-types';
import FundProjectItem from '../FundProjectItem';

FundItemGroup.propTypes = {};

function FundItemGroup(props) {
  console.log(props);
  const { fundProjectList, nameFundGroup } = props;
  return (
    <div>
      <section class="our_cuauses">
        <h2>{nameFundGroup}</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="our_cuauses_single owl-carousel owl-theme">
                {fundProjectList.map((fundItem) => {
                  return (
                    <FundProjectItem
                      key={fundItem.id}
                      fundId={fundItem.id}
                      imgUrl={fundItem.imgUrl}
                      fundName={fundItem.title}
                      restDate={fundItem.restDate}
                      location={fundItem.location}
                      fundInfo={fundItem.info}
                      currentDonate={fundItem.currentDonate}
                      targetDonate={fundItem.targetDonate}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FundItemGroup;
