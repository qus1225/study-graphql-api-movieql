export const people = [
  {
    id: 1,
    name: "Qus",
    age: 32,
    gender: "male"
  },
  {
    id: 2,
    name: "My",
    age: 29,
    gender: "female"
  },
  {
    id: 3,
    name: "Chang",
    age: 17,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
