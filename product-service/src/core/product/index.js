import makeCategory from '../category';
import buildMakeProduct from './product';
import Id from "../../infrastructure/Id";

const makeProduct = buildMakeProduct({Id, makeCategory})

export default makeProduct