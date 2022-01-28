import profileReducer from "./profile-reducer ";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hey,haw are you?",
          likesCount: 12,
        },
        {
          id: 2,
          message: "Hi , I'm fine",
          likesCount: 16,
        },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
      messages: [
        {
          id: 1,
          message: "Hi",
        },
        {
          id: 2,
          message: "Haw are you?",
        },
        {
          id: 3,
          message: "I'm fine,thank you",
        },
        {
          id: 4,
          message: "it kamasutra",
        },
      ],
      newMessageBody: "",
      dialogs: [
        {
          id: 1,
          name: "Diam",
        },
        {
          id: 2,
          name: "Sergio",
        },
        {
          id: 3,
          name: "Katrina",
        },
        {
          id: 4,
          name: "Mask",
        },
        {
          id: 5,
          name: "Victoria",
        },
      ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("да бля!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
