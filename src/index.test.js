import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
// import './main.scss'

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, document.getElementById('root'));
    });
      