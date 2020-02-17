// Query를 처리하는 Resolver를 정의 (실제 DB를 조회)

import { people, getById } from "./db";

// schema에서 정의된 opertion을 해결(resolve)하는 역할
const resolvers = {
  // db를 조회하는 쿼리 역할
  Query: {
    people: () => people,
    person: (_, { id }) => {
      return getById(id);
    }
  }
};

export default resolvers;
