import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from '../../../../../../../node_modules/@material-ui/core/index';
import { Link, useLocation } from 'react-router-dom';

SearchRow.propTypes = {};

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

function SearchRow(props) {
  // let query = useQuery();

  const { FundID, TimeDonate, DonateMoney, Name, NameProject, FundProjectId, TypeProject } = props;
  // console.log(FundProjectId);
  const linkUrlParamsFundId = `/history-detail-donation-page?name=${FundID}`;
  const linkUrlParamsProjectID = `/fund-detail-page?name=${FundProjectId}`;

  return (
    <tr class="multi-table__row">
      <td class="multi-table__cell multi-table__cell-body ">
        <Link FundID={FundID} to={linkUrlParamsFundId}>
          {FundID}
        </Link>
      </td>
      <td class="multi-table__cell multi-table__cell-body">{TimeDonate}</td>
      <td class="multi-table__cell multi-table__cell-body">{DonateMoney}</td>
      <td class="multi-table__cell multi-table__cell-body">{Name}</td>
      <td class="multi-table__cell multi-table__cell-body">
        <div class="multi-table__cell-desc">
          <Link to={linkUrlParamsProjectID}>
            {NameProject} - {FundProjectId}
          </Link>
        </div>
      </td>
      <td class="multi-table__cell multi-table__cell-body">{TypeProject}</td>
    </tr>
  );
}

export default SearchRow;
