import { useEffect } from "react";

const useConsole = ({ componentName, color }) => {
  console.log(
    `%c${componentName} is Rendered`,
    `background: #222; color: ${color}`
  );
  useEffect(() => {
    return () =>
      console.log(
        `%c${componentName} is Destroyed`,
        `background: #222; color: #e74c3c`
      );
  }, [componentName]);
};

export default useConsole;
