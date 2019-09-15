import React from 'react';
import './App.css';
import 'react-table/react-table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuranMemorizationTable from './components/quran-memorization-table';
import { Container, Jumbotron } from "react-bootstrap";

function App() {


  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Memorized amount of Quran</h1>
          <p>
            This is a very simple calculator of how much of the Quran we memorized.
          </p>
          <p>GitHub: <a href="https://github.com/foyzulkarim/memorizedquran/tree/develop" target="_blank">foyzulkarim/memorizedquran</a></p>
        </Container>
      </Jumbotron>
      <Container>
        <QuranMemorizationTable></QuranMemorizationTable>
      </Container>
    </div>
  );
}

export default App;
