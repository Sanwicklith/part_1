const Button = ({ value, setValue, text }) => {
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>{text}</button>
    </div>
  );
};

export default Button;
