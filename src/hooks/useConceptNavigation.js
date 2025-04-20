import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useConceptNavigation = (concepts) => {
  const [currentConcept, setCurrentConcept] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const conceptId = location.pathname.split('/').pop();
    const concept = concepts[conceptId];
    if (concept) {
      setCurrentConcept(concept);
    }
  }, [location, concepts]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return {
    currentConcept,
    activeTab,
    handleTabChange,
    setActiveTab
  };
};

export default useConceptNavigation; 