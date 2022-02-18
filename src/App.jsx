import React from 'react';
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer"
import {DataProvider} from "./components/DataProvider"
import './App.css';


function App() {
  return (
    <DataProvider>
      <main>
       <header className="todo__header">
        <h1>To Do List</h1>
        </header>     
        <FormInput />
        <TodoList />
        <Footer />
      </main>
    </DataProvider> 
  );
}

export default App;