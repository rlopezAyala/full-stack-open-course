const Names = ({ persons, filter }) => {
  return persons.map((person) => {
    const filterincludes = person.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    // debugger;
    return (
      filterincludes && (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )
    );
  });
};

export default Names;
