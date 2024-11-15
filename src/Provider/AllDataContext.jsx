import { createContext } from "react";

export const DataContext = createContext(null);

const AllDataContext = ({children}) => {

  const x= 'hi'
  return (
    <DataContext.Provider value={x}>
{children}
    </DataContext.Provider>
  );
};

export default AllDataContext;