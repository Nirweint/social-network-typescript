import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {store} from "./redux/redux-store";
import React from "react";
import './index.css'
import {Provider} from "react-redux";

// let renderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        // store={store}
                        // dispatch={store.dispatch.bind(store)}
                    />
                </Provider>

            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
// }
// renderEntireTree();

// store.subscribe(() => {
//     renderEntireTree();
//     // store.getState()
// });