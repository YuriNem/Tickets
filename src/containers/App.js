import { connect } from 'react-redux';
import { asyncGetTickets, asyncChangeSidebarView, asyncOffMobileSidebar } from '../actions';

import App from '../components/App.jsx';

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps, { asyncGetTickets, asyncChangeSidebarView, asyncOffMobileSidebar })(App);

export default AppContainer;
