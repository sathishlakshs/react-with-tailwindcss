import { useState } from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import SideBar from './components/SideBar';
import Dashboard from './module/Dashboard';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className='h-screen overflow-y-hidden'>
    <Header setIsOpen={setIsOpen} />
    <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className='ml-20 h-screen overflow-y-auto'>
          <Dashboard />
        </div>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </Drawer> */}
    </main>
  );
}

export default App;
