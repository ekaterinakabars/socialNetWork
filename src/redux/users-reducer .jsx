import { usersApi } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
};
// users: [
// {
//   id: 1,
//   photoUrl: "https://avatarko.ru/img/kartinka/31/multfilm_30428.jpg",
//   followed: false,
//   fullName: "Henry",
//   status: "I am a boss",
//   location: { city: "Minsk", country: "Belarus" },
// },
// {
//   id: 2,
//   photoUrl:
//     "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
//   followed: true,
//   fullName: "Olga",
//   status: "I am a programmer",
//   location: { city: "Moscow", country: "Russia" },
// },
// {
//   id: 3,
//   photoUrl:
//     "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
//   followed: true,
//   fullName: "Katrina",
//   status: "I am a hairdresser",
//   location: { city: "Kiev", country: "Ukraine" },
// },
//   ],
// };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSusses = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSusses = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = (userTd) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userTd));

    usersApi.follow(userTd).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSusses(userTd));
      }
      dispatch(toggleFollowingProgress(false, userTd));
    });
  };
};
export const unfollow = (userTd) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userTd));

    usersApi.unfollow(userTd).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSusses(userTd));
      }
      dispatch(toggleFollowingProgress(false, userTd));
    });
  };
};

export default usersReducer;
