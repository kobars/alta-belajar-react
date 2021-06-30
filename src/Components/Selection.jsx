import useConsole from "../Utils/useConsole";

const Selection = ({ selectionID, options, emotion, onSelectionChange }) => {
  useConsole({ componentName: "Emotion / Selection", color: "#f1c40f" });
  return (
    <select
      className="form-select mb-2"
      id={selectionID}
      value={emotion}
      onChange={onSelectionChange}
    >
      {options?.map((e, i) => (
        <option key={i} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  );
};

export default Selection;
