import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Hello } from '~/components/Hello/Hello';
import TestTailwind from '~/components/TestTailwind/TestTailwind';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="*" element={<TestTailwind />} />
        </Routes>
      </Router>
    </div>
  );
}
