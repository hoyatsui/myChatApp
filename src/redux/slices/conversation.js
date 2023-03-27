import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "phosphor-react";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.conversations.map((el) => {
        const this_user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          online: this_user.status === "Online",
          img: faker.image.avatar(),
          msg: faker.music.songName(),
          time: "10:00",
          unread: 0,
          pinned: false,
        };
      });
      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      // data={}
      // list.map((el)=> el.id=== data._id ? data :el)
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el.id !== this_conversation._id) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (elem) => elem._id.toString() !== user._id
            );
            return {
              _id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName} ${user.lastName}`,
              online: user.status === "Online",
              img: faker.image.avatar(),
              time: "10:00",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      // list.push(data)

      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (elem) => elem._id.toString() !== user._id
      );
      state.direct_chat.conversations.push({
        _id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        online: user.status === "Online",
        img: faker.image.avatar(),
        time: "10:00",
        unread: 0,
        pinned: false,
      });
    },
  },
});

export default slice.reducer;

export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversations({ conversations }));
  };
};

export const AddDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};
export const UpdateDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};
