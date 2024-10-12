import React, { createContext, ReactNode, useContext } from 'react';

type ContentContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

type ContentProviderProps = {
  children: ReactNode;
};

export const ContentProvider: React.FC<ContentProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(true);
  return (
    <ContentContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent deve ser usado dentro de um ContentProvider');
  }
  return context;
};
