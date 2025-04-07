import DataTableCustom from './components/DataTableCustom';
import Dashboard from './components/Dashboard.jsx';
import Projects from './components/Projects.jsx';
import Teams from './components/Teams.jsx';
import Analytics from './components/Analytics.jsx';
import Messages from './components/Messages.jsx';
import Integrations from './components/Integrations.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './components/Overview.jsx';
import Menu from './components/Menu.jsx';
// json-server --watch db.json --port 5000

function App() {
    return (
        <Router>
            <div className="grid grid-cols-5 gap-4 p-4 h-screen">
                <Menu className="col-span-1" />
                <div className="col-span-4 ">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route
                            path="/integrations"
                            element={<Integrations />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
