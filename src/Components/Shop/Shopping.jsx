import { React } from 'react'
import ReactDOM from 'react-dom'
import './Shopping.css';

export default function Shopping() {
    return ReactDOM.createPortal(
        <div className="shopContainer">
            <div>
                heloooo
            </div>

        </div>, document.getElementById('shopping')


    )
}
