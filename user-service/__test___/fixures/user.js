import faker from "faker";
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
})

export default function makeFakeUser(overrides) {
  const user = {
      id: Id.makeId(),
      roleId: Id.makeId(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber("##########"),
      address: faker.address.city(),
      email: faker.internet.email(),
      password: faker.random.words(),
  }  
  return {...user, ...overrides};
} 