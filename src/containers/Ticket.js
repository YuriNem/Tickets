import { connect } from 'react-redux';

import Ticket from '../components/Ticket/index.jsx';

const mapStateToProps = state => ({ currency: state.currency });

const TicketContainer = connect(mapStateToProps)(Ticket);

export default TicketContainer;
