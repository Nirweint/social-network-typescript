import {v1} from "uuid";

export type FriendType = {
    id: string
    name: string
    img: string
}
export type FriendsType = {
    friends: Array<FriendType>
}

const initialSidebarState = {
    friends: [
        {
            id: v1(),
            name: "Alex",
            img: "https://sun9-52.userapi.com/impf/c850120/v850120142/de34f/-V0Lx1I09fo.jpg?size=2160x2160&quality=96&sign=e11d8ba5c927096811c14b692a8f67e0&type=album"
        },
        {
            id: v1(),
            name: "Sofa",
            img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
        },
        {
            id: v1(),
            name: "Oleg",
            img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
        },
    ],
}

export const sidebarReducer = (state: FriendsType = initialSidebarState, action: any): FriendsType => {
    return state;
}