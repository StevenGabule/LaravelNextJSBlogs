import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reducer'
import user from '../modules/user/store/reducer'
// import articles from '../modules/article/store/reducer'

export default combineReducers({ auth, user }) // , articles
