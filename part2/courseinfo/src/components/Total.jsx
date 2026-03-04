const Total = ({ parts }) => {
  const totalExercises = () => {
    return parts.reduce((total, part) => {
      return (total + part.exercises, 0);
    });
  };

  return <p>total of {totalExercises()} exercises</p>;
};

export default Total;
