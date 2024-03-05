import { Navigate, Route, Routes } from 'react-router-dom';
import { Politics } from '../pages/politics';
import { Terms } from '../pages/terms';
import Index from '../pages';

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
