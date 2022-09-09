import './App.css';
import SupportTickets from './Components/SupportTicket/SupportTickets';
import TicketsMobileView from './Components/SupportTicket/ticketsmobileview/TicketsMobileView';

function App() {
  return (
    <div className="App">
      <TicketsMobileView />
      <SupportTickets />
    </div>
  );
}

export default App;
