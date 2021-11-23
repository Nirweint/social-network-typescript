import * as DialogActionCreators from './dialog'
import * as ProfileActionCreators from './profile'
import * as UsersActionCreators from './users'


export default {
    ...ProfileActionCreators,
    ...DialogActionCreators,
    ...UsersActionCreators,
}