import { createStore } from "vuex";
import count from "./modules/count";
import todos from "./modules/todos";
import characters from "./modules/characters";

const store = createStore({
    modules: {
        count,
        todos,
        characters
    },
});

export default store;
