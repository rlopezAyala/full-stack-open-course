const PersonForm = ({ setNewName, setPhone, newName, phone, nameSubmit }) => {
  const onChange = (event) => {
    setNewName(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };
  return (
    <form onSubmit={nameSubmit}>
      <div>
        name: <input value={newName} onChange={onChange} />
      </div>
      <div>
        number: <input value={phone} onChange={onChangePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
