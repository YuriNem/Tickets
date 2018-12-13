import { connect } from 'react-redux';
import { asyncChangeCurrency } from '../actions';

import Sidebar from '../components/Sidebar/index.jsx';

const mapStateToProps = state => ({ currency: state.currency });

const SidebarContainer = connect(mapStateToProps, { asyncChangeCurrency })(Sidebar);

export default SidebarContainer;
