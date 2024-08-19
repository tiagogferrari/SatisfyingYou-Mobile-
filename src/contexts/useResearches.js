import { createContext, useContext, useState } from 'react';
import { doc, getDoc, query, where, collection } from 'firebase/firestore';
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

  const getOpnion = async () => {
    if (!activeSearchId) {
      console.log('Erro: nenhuma pesquisa foi selecionada');
      return;
    }
    console.log(activeSearchId)
    const rf = collection(db, 'research_opinion')
    const searchOp = await rf.where('researchId', '==', activeSearchId)

    //const searchRef = doc(db, 'researches', activeSearchId);
    //const search = await getDoc(searchRef);
    console.log(searchOp)
    //return search.data();
  };

  return (
    <researchesContext.Provider
      value={{ selectSearch, getSearch, getOpnion, activeSearchId }}>
      {children}
    </researchesContext.Provider>
  );
};

export const useResearches = () => useContext(researchesContext);
