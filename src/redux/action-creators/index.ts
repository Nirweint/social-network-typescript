import * as DialogActionCreators from './dialog'
import * as ProfileActionCreators from './profile'
import * as UsersActionCreators from './users'
import * as AuthActionCreators from './auth'


export default {
    ...ProfileActionCreators,
    ...DialogActionCreators,
    ...UsersActionCreators,
    ...AuthActionCreators,
}