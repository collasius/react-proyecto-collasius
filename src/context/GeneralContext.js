import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <GeneralContext.Provider value={{ updateCounter, counter }}>
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralProvider };
export default GeneralContext;