import MyButton from "./components/my-button/my-button";

const App = () => {
  return (
    <>
      <MyButton text="Butn 10" isHidden={false} />
      <MyButton isHidden={true} />
    </>
  );
};

export default App;
