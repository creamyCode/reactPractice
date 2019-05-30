import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

// 액션 타입을 정의해줍니다.
const CREATE = "book/CREATE";
const UPDATE = "book/UPDATE";
const DELETE = "book/DELETE";

// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const memberCreate = createAction(CREATE, member => member);
export const memberUpdate = createAction(UPDATE, member => member);
export const memberDelete = createAction(DELETE, delId => delId);

const initialState = Map({
  members: Map()
});

export default handleActions(
  {
    [CREATE]: (state, { payload: member }) => {
      const members = state.get("members");
      const id = members.count() + 1;
      return state.setIn(["members", id], { ...member, id: id });
    },
    [UPDATE]: (state, { payload: member }) => {
      return state.setIn(["members", member.id], member);
    },
    [DELETE]: (state, { payload: delId }) => {
      return state.deleteIn(["members", delId]);
    }
  },
  initialState
);
