import { render } from "react-dom";

import Test from './components/Test'

import './index.scss';

function App () {
    return (
        <div>
            Hello React!!
            <Test></Test>
        </div>
    )
}

// console.log(document.querySelector('#app'));

render(<App />, document.querySelector('#app'));