const Label = ({ labelID, content }) => (
  <label htmlFor={labelID} className="mt-2 mb-2">
    {content}
  </label>
);

export default Label;
