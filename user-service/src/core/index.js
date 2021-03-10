import buildMakeUser from './user';
import buildMakeRole from "./role";
import Id from "../infrastructure/Id";
import crypto from "crypto";
const makeUser = buildMakeUser({Id, crypto})
const makeRole = buildMakeRole({Id})

export {makeUser, makeRole};