import buildMakeUser from './user';
import buildMakeRole from "./role";
import Id from "../infrastructure/Id";

const makeUser = buildMakeUser({Id})
const makeRole = buildMakeRole({Id})

export {makeUser, makeRole};