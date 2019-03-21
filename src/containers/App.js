import { connect } from 'react-redux';
import { asyncGetTickets, asyncChangeSidebarView } from '../actions';

import App from '../components/App.jsx';

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps, { asyncGetTickets, asyncChangeSidebarView })(App);

export default AppContainer;
