import React from 'react';
import PageTitle from './components/pageTitle';
import style from './styles/modules/app.module.scss'
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <>
        <div className="App">
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app__wrapper}>
       <AppHeader></AppHeader>
       <AppContent></AppContent>
      </div>
    </div>
    <Toaster 
    position="bottom-right"
    toastOptions={{style:{
      fontSize:'1.4rem'
    }}}/>
    </>

  );
}

export default App;

