import { connect } from 'react-redux';
import { asyncFilterStops, asyncFilterStopsOnly } from '../actions';

import Filter from '../components/Filter/index.jsx';

const mapStateToProps = state => ({ stops: state.stops });

const FilterContainer = connect(mapStateToProps, { asyncFilterStops, asyncFilterStopsOnly })(Filter);

export default FilterContainer;
