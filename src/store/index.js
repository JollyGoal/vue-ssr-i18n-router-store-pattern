import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";

const state = {
  categories: null
};

export default function () {
  return createStore({
    state,
    getters,
    actions,
    mutations
  });
}
