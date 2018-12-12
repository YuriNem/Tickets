import { connect } from 'react-redux';
import { asyncChangeCurrency } from '../actions';

import SideBar from '../components/SideBar/index.jsx';

const mapStateToProps = state => ({ currency: state.currency });

const SideBarContainer = connect(mapStateToProps, { asyncChangeCurrency })(SideBar);

export default SideBarContainer;
