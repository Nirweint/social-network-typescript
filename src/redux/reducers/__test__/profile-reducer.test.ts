import {
    initialProfileState,
    ProfilePageType,
    profileReducer,
    UserInfoType
} from "../profile-reducer";
import {
    addPostAC,
    setProfileStatusAC,
    setUserInfoAC
} from "../../action-creators/profile";

let state: ProfilePageType

beforeEach(() => {
    const state = initialProfileState
})

test('new post should be added', () => {
    let newState = profileReducer(state, addPostAC('Text'))

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('Text')
})

test('set user info test', () => {
    const data: UserInfoType = {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "Alex",
        aboutMe: "Hi",
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: "222",
            large: "",
        },
    }


    let newState = profileReducer(state, setUserInfoAC(data))

    expect(newState.userInfo.aboutMe).toBe("Hi")
    expect(newState.userInfo.fullName).toBe("Alex")
    expect(newState.userInfo.photos.small).toBe('222')
})

test('change status', () => {
    let newState = profileReducer(state, setProfileStatusAC('Text'))

    expect(newState.status).toBe('Text')
})