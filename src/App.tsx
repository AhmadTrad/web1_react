import MyButton from "./components/my-button/my-button";

const App = () => {
  const addCourse = () => {};
  let courses = ["CSC101", "CSC102", "CSC103", "CSC104", "CSC105", "CSC106"];
  return (
    <>
      <MyButton text="Butn 10" isHidden={false} />
      <MyButton isHidden={true} />
      <ul>
        {courses.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
      <input type="text" />
      <button onClick={addCourse}>Add Course</button>
    </>
  );
};

export default App;
