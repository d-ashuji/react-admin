import MiniDrawer from './components/navbar/drawer';
import Login from './pages/login';
import Dashboard from './pages/login/Dashboard';
import ResponsiveDrawer from './components/responsiveNavbar';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f1f4f8' }}>
      {/* <ResponsiveDrawer /> */}
      <Dashboard />
    </div>
  );
}

export default App;
