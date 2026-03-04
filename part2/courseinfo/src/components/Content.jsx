const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts && parts.map((part) => <Part key={part.name} part={part} />)}
    </div>
  );
};

export default Content;
