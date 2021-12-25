// 한군데에서 사용하는 데이터를 굳이 리듀서로 옮기면서 생기는 베네핏 : 테스팅에서 유리하다.
import { SECTIONS_DATA } from '../../data/section.data';

const INITIAL_STATE = {
  sections: SECTIONS_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
