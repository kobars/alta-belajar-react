import { useState } from "react";
import Input from "./Components/Input";
import Selection from "./Components/Selection";
import Label from "./Components/Label";
import { emotionOptions, reactions } from "./Utils";

const Form = () => {
  const [emotion, setEmotion] = useState(emotionOptions[0].value);
  const handleChange = (e) => {
    if (e.target) {
      setEmotion(e.target.value);
    }
  };
  return (
    <form>
      <Label labelID="emotion" content="Select emotions" />
      <Selection
        selectionID="emotion"
        options={emotionOptions}
        value={emotion}
        onSelectionChange={handleChange}
      />
      <Label labelID="reaction" content="Reaction" />
      <Input
        // key={emotion}
        inputID="reaction"
        defaultValue={reactions[emotion]}
      />
    </form>
  );
};

function App() {
  const [isShow, setShow] = useState(true);
  const handleButtonClick = () => {
    setShow(!isShow);
    // sama dengan bawah
    // setShow((prev) => !prev);
  };
  return (
    <div className="container pt-2">
      {isShow && <Form />}
      <button onClick={handleButtonClick} className="btn btn-primary mt-4">
        Show / Hide
      </button>
    </div>
  );
}

export default App;
