import { connect } from 'react-redux';
import { asyncChangeCurrency, asyncChangeSidebarView } from '../actions';

import Sidebar from '../components/Sidebar/index.jsx';

const mapStateToProps = state => ({ currency: state.currency, mobileSidebar: state.mobileSidebar });

const SidebarContainer = connect(mapStateToProps, { asyncChangeCurrency, asyncChangeSidebarView })(Sidebar);

export default SidebarContainer;
