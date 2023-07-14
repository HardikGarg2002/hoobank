
import './App.css';
import Navbar from './containers/navbar/Navbar';
import Header from './containers/header/Header'
import Analytics from './components/analytics/Analytics';
import Buisness from './containers/buisness/Buisness';
import Biling from './containers/biling/Biling';
import Deal from './containers/deal/Deal';
import Thoughts from './containers/thoughts/Thoughts';
import ActionCall from './components/actionCall/ActionCall';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='flex analyticsSection section'>
        <Analytics number='3800' info='user active' />
        <div className='line'></div>
        <Analytics number='230' info='TRUSTED BY COMPANY' />
        <div className='line'></div>
        <Analytics number='$230M' info='Transactions' />
      </div>

      <Buisness />
      <Biling />
      <Deal />
      <Thoughts />
      <ActionCall />
    </div>
  );
}

export default App;
