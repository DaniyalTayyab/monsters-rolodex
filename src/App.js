import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilterdMonster] = useState(monsters);

  // console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []);

  useEffect(() => {
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterdMonster(filteredArray);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="app">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [{ id: 0, name: "Data is not available" }],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((monsters) => {
//         this.setState({ monsters });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value;

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredArray = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="app">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredArray} />
//       </div>
//     );
//   }
// }

export default App;
