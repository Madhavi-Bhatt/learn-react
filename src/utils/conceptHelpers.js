export const formatCode = (code) => {
  // Remove any leading/trailing whitespace
  return code.trim();
};

export const getConceptCategory = (conceptId) => {
  // Map concept IDs to categories
  const categoryMap = {
    '1': 'basics',
    '2': 'basics',
    '3': 'basics',
    '4': 'state-management',
    '5': 'basics',
    '6': 'basics',
    '7': 'advanced',
    '8': 'basics',
    '9': 'advanced',
    '10': 'basics',
    '11': 'advanced',
    '12': 'advanced',
    '13': 'state-management',
    '14': 'testing'
  };
  return categoryMap[conceptId] || 'basics';
};

export const getConceptIcon = (conceptId) => {
  // Map concept IDs to Material-UI icons
  const iconMap = {
    '1': 'ComponentIcon',
    '2': 'StateIcon',
    '3': 'HookIcon',
    '4': 'ContextIcon',
    '5': 'FormIcon',
    '6': 'RouterIcon',
    '7': 'SecurityIcon',
    '8': 'HookIcon',
    '9': 'ExtensionIcon',
    '10': 'StorageIcon',
    '11': 'ApiIcon',
    '12': 'PaymentIcon',
    '13': 'StoreIcon',
    '14': 'BugReportIcon'
  };
  return iconMap[conceptId] || 'ArticleIcon';
};

export const getConceptColor = (conceptId) => {
  // Map concept IDs to colors
  const colorMap = {
    '1': '#1976d2',
    '2': '#2e7d32',
    '3': '#ed6c02',
    '4': '#9c27b0',
    '5': '#d32f2f',
    '6': '#0288d1',
    '7': '#2e7d32',
    '8': '#ed6c02',
    '9': '#9c27b0',
    '10': '#1976d2',
    '11': '#2e7d32',
    '12': '#ed6c02',
    '13': '#9c27b0',
    '14': '#0288d1'
  };
  return colorMap[conceptId] || '#1976d2';
}; 