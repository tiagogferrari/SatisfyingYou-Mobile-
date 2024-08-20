import { createContext, useContext, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const researchesContext = createContext({});

export const ResearchesProvider = ({ children }) => {
  const [activeSearchId, setActiveSearchId] = useState();

  const selectSearch = searchId => setActiveSearchId(searchId);

  const getSearch = async () => {
    if (!activeSearchId) {
      console.log('Erro: nenhuma pesquisa foi selecionada');
      return;
    }

    const searchRef = doc(db, 'researches', activeSearchId);

    const search = await getDoc(searchRef);

    return search.data();
  };

  return (
    <researchesContext.Provider
      value={{ selectSearch, getSearch, activeSearchId }}>
      {children}
    </researchesContext.Provider>
  );
};

export const useResearches = () => useContext(researchesContext);
