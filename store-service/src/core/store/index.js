import buildMakeStore from './store';
import Id from "../../infrastructure/Id";

const makeStore = buildMakeStore({Id});

export default makeStore;