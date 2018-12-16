import { connect } from 'react-redux';
import { asyncGetTickets } from '../actions';

import App from '../components/App.jsx';

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps, { asyncGetTickets })(App);

export default AppContainer;
