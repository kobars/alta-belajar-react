import { useState } from "react";
import Input from "./Components/Input";
import Selection from "./Components/Selection";
import Label from "./Components/Label";
import { emotionOptions, reactions } from "./Utils";

function App() {
  const [emotion, setEmotion] = useState(emotionOptions[0].value);
  const handleChange = (e) => {
    if (e.target) {
      e.preventDefault();
      setEmotion(e.target.value);
    }
  };
  return (
    <div className="container pt-2">
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
          key={emotion}
          inputID="reaction"
          defaultValue={reactions[emotion]}
        />
      </form>
    </div>
  );
}

export default App;
