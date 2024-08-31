import React, { useEffect } from 'react';

import { initializeDatabase } from './src/db';
import Navigation from './src/navigation';

export default function App(): React.JSX.Element {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return <Navigation />;
}
