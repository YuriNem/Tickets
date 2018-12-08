import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Filter from '../components/ControlsBar/Filter/index.jsx';

const mapStateToProps = state => state;

const FilterContainer = connect(mapStateToProps, actionCreators)(Filter);

export default FilterContainer;