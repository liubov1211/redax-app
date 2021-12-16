import { ADD_POST } from "./actions";
import p1 from "../assets/img/p1.jpg"
import p2 from "../assets/img/p2.jpg"
import p3 from "../assets/img/p3.jpg"
import l1 from "../assets/img/l1.jpeg"
import l2 from "../assets/img/l2.jpg"
import l3 from "../assets/img/l3.jpg"

const POSTS = [
    {
        avatar: l1,
        name: "Anakin skywalker",
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        date: "26 feb",
        comment: 482,
        commented: true,
        retweet: 146,
        retweeted: false,
        likes: 887,
        liked: false,
        image: p1,
        id: 'dart',
    },
    {
        avatar: l2,
        name: "Chewbacca",
        nickname: "@chewbacca",
        content: "Where is the full map, BB-8?",
        date: "26 feb",
        comment: 234,
        commented: false,
        retweet: 354,
        retweeted: false,
        likes: 999,
        liked: true,
        image: p2,
        id: 'chewbacca',
    },
    {
        avatar: l3,
        name: "Yoda",
        nickname: "@grand_master_yoda",
        content: "The balance of the universe is shaking again...",
        date: "27 feb.",
        comment: 123,
        commented: false,
        retweet: 11,
        retweeted: false,
        likes: 222,
        liked: false,
        image: p3,
        id: 'yoda',
    }
]

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
};