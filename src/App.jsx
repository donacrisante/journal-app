/* import { useState } from 'react' */
import './App.css'
import Header from "./components/Header/Header.jsx";
import EntryForm from "./components/EntryForm/EntryForm.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import EntryList from "./components/EntryList/EntryList.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <>
      <Header />
      <EntryForm />
      <Tabs />
      <EntryList />
      <Footer />
    </>
  );
}

export default App;
