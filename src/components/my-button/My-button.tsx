const MyButton = ({ text = "My Button", isHidden }) => {
  return (
    <button
      className="{isHidden ? 'hidden':''}"
      disabled={isHidden === "disbaled" ? true : false}
    >
      {text}
    </button>
  );
};

export default MyButton;
