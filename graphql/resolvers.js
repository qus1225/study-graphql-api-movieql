// Query를 처리하는 Resolver를 정의 (실제 DB를 조회)

import { getMovies, getById, addMovie, deleteMovie } from "./db";

// schema에서 정의된 opertion을 해결(resolve)하는 역할
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
