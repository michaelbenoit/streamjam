import React from 'react';
import ReactDom from 'react-dom';
import { HomeComponent } from './component/home.component';
import './main.scss';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <div className="mainApp">
    <h1>
      Hi from a react app
    </h1>
    <HomeComponent></HomeComponent>
    </div>
  )
}

ReactDom.render(<App />, mainElement);