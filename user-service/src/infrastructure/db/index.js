import models from "./models";
import RoleMapper from "./mappers/role.mapper";
import UserMapper from "./mappers/user.mapper";

const userMapper = UserMapper(models.user, models.role);
const roleMapper = RoleMapper(models.role);

export { userMapper, roleMapper };