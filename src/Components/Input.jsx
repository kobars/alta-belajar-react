import useConsole from "../Utils/useConsole";

const Input = ({ inputID, defaultValue }) => {
  useConsole({ componentName: "Reaction / Input", color: "#bada55" });

  return (
    <input
      id={inputID}
      disabled
      className="form-control"
      value={defaultValue}
      // defaultValue={defaultValue}
    />
  );
};

export default Input;
