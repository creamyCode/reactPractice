import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

// 액션 타입을 정의해줍니다.
const CREATE = "book/CREATE";
const UPDATE = "book/UPDATE";
const DELETE = "book/DELETE";
const CHANGE_INFO_INPUT = "book/CHANGE_INFO_INPUT";
const CHANGE_INFO_MOD = "book/CHANGE_INFO_MOD";
const CHANGE_KEYWORD = "book/CHANGE_KEYWORD";

// 액션 생성 함수를 만듭니다.
// createAction (actionType, payloadCreator)
// actionType : 액션 정의 내용
// payloadCreator : 페이로드 생성함수
export const memberCreate = createAction(CREATE, info => info);
export const memberUpdate = createAction(UPDATE, (id, info) => ({
  id: id,
  info: info
}));
export const memberDelete = createAction(DELETE, id => id);
export const changeInput = createAction(CHANGE_INFO_INPUT, (id, key, val) => ({
  id: id,
  key: key,
  val: val
}));
export const changeInfoMod = createAction(CHANGE_INFO_MOD, id => id);
export const changeKeyword = createAction(CHANGE_KEYWORD, keyword => keyword);

const initialState = Map({
  keyword: "",
  infos: Map()
});

export default handleActions(
  {
    [CREATE]: (state, { payload: memberInfo }) => {
      const infos = state.get("infos");
      const id = infos.count() + 1;
      return state.setIn(
        ["infos", id],
        Map({
          memberInfo: Map({ ...memberInfo, id: id }),
          input: Map(memberInfo),
          editMod: false
        })
      );
    },
    [UPDATE]: (state, { payload: { id, info } }) => {
      return state.setIn(
        ["infos", id],
        Map({
          memberInfo: Map({ ...info, id: id }),
          input: Map(info),
          editMod: false
        })
      );
    },
    [DELETE]: (state, { payload: id }) => {
      return state.deleteIn(["infos", id]);
    },
    [CHANGE_INFO_INPUT]: (state, { payload: { id, key, val } }) => {
      return state.setIn(["infos", id, "input", key], val);
    },
    [CHANGE_INFO_MOD]: (state, { payload: id }) => {
      return state.setIn(["infos", id, "editMod"], true);
    },
    [CHANGE_KEYWORD]: (state, { payload: key }) => {
      return state.set("keyword", key);
    }
  },
  initialState
);
