require('./bootstrap');


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'

import { authCheck } from './modules/auth/store/actions'

store.dispatch(authCheck())

render((<Provider store={store}>
        <Routes/>
    </Provider>),
    document.getElementById('app'),
)
