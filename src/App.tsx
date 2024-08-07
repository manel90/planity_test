import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import events from './api/data';
import './styles/app.css';

const App: React.FC = () => {
    return (
        <div className="containerApp">
            <Header />
            <Calendar events={events} />
        </div>
    );
};

export default App;
