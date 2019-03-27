import React, { useReducer } from 'react';

const initialState = {
  isOpen: false,
};

function reducer(state = initialState, action: { type: any }) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const DrawerContext = React.createContext({});

interface IDrawerProvider {
    children: any
}

export const DrawerProvider = ({ children }: IDrawerProvider ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
