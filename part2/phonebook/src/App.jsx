import { useState } from "react";
import Names from "./components/Names";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");

  const nameSubmit = (event) => {
    event.preventDefault();
    setNewName("");
    setPhone("");
    const personExist = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (personExist) {
      window.alert(`${newName} is already added to phonebook`);
    } else setPersons(persons.concat({ name: newName, number: phone }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        setNewName={(value) => setNewName(value)}
        setPhone={(value) => setPhone(value)}
        newName={newName}
        phone={phone}
        nameSubmit={(event) => nameSubmit(event)}
      />
      <h2>Numbers</h2>
      <Names persons={persons} filter={filter} />
    </div>
  );
};

export default App;
