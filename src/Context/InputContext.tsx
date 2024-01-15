// import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

// const DEFAULT_VALUE = {
//   state: {
//     title: '',
//     img: '',
//     description: '',
//   },
//   setState: () => {},
// };

// export interface UserType {
//   title: string;
//   img: string;
//   description: string;
// }

// export interface PropsUserContext {
//   state: UserType;
//   setState: Dispatch<SetStateAction<UserType>>;
// }

// const InputContext = createContext<PropsUserContext>(DEFAULT_VALUE);

// const InputContextProvider = ({ children }: { children?: React.ReactNode }) => {
//   const [state, setState] = useState<UserType>(DEFAULT_VALUE.state);

//   return (
//     <InputContext.Provider value={{ state, setState }}>
//       {children}
//     </InputContext.Provider>
//   );
// };

// export { InputContextProvider }
// export default InputContext;