// Query를 처리하는 Resolver들

// datasource의 역할
const qus = {
  name: "Qus",
  age: 32,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => qus // db를 조회하는 쿼리 역할
  }
};

export default resolvers;
