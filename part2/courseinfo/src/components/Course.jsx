import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return course.map((courseElement) => {
    return (
      <div key={courseElement.id}>
        <Header course={courseElement.name} />
        <Content parts={courseElement.parts} />
        <Total parts={courseElement.parts} />
      </div>
    );
  });
};

export default Course;
