import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useProgressStore } from './store/useProgressStore';
import Layout from './components/layout/Layout';
import Welcome from './components/Welcome';
import SplashScreen from './components/SplashScreen';
import Module1 from './modules/module1/Module1';
import Module2 from './modules/module2/Module2';
import Module3 from './modules/module3/Module3';
import Module4 from './modules/module4/Module4';
import Module5 from './modules/module5/Module5';
import Module6 from './modules/module6/Module6';
import Module6_1 from './modules/module6_1/Module6_1';
import Module7 from './modules/module7/Module7';
import Module8 from './modules/module8/Module8';
import Module9 from './modules/module9/Module9';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Show splash only if not seen in this session
    return !sessionStorage.getItem('splash_seen');
  });

  const handleSplashFinish = () => {
    sessionStorage.setItem('splash_seen', '1');
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/module/1" element={<Module1 />} />
            <Route path="/module/2" element={<Module2 />} />
            <Route path="/module/3" element={<Module3 />} />
            <Route path="/module/4" element={<Module4 />} />
            <Route path="/module/5" element={<Module5 />} />
            <Route path="/module/6" element={<Module6 />} />
            <Route path="/module/6.1" element={<Module6_1 />} />
            <Route path="/module/7" element={<Module7 />} />
            <Route path="/module/8" element={<Module8 />} />
            <Route path="/module/9" element={<Module9 />} />
            <Route path="*" element={<Navigate to={`/module/${useProgressStore.getState().currentModule || 1}`} replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
