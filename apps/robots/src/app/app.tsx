import React, { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './app.scss';

export type Robot = { id: string; name: string; email: string };

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const searchString = event.currentTarget.value.toLocaleLowerCase();

    setSearchField(() => {
      return searchString;
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(() => users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot: Robot) => {
      const robotName = robot?.name.toLocaleLowerCase();
      return robotName.includes(searchField);
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Robotz</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
