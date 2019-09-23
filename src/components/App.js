import React from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/Api";
import StarshipList from "./StarshipList";
import Header from "./Header";
import Form from "./Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starships: [],
      filterValue: "",
      checked: []
    };
    this.filterByText = this.filterByText.bind(this);
    this.filterByMovie = this.filterByMovie.bind(this);
  }
  componentDidMount() {
    getDataFromApi().then(starships => {
      this.setState({ starships });
    });
  }

  filterByText(value) {
    const newState = {
      ...this.state,
      filterValue: value
    };
    this.setState(newState);
  }

  filterByMovie(value) {
    const checked = [];
    this.state.starships.map(starship => {
      starship.films.filter(film => (film === value ? (starship.checked = !starship.checked) : starship.checked));
      return checked.push(starship);
    });
    this.setState({ checked }, this.getChecked);
  }

  getChecked() {
    const checked = this.state.checked.filter(starship => starship.checked);
    console.log(checked);
    this.setState({ checked });
  }

  render() {
    const filterStarships = this.state.starships.filter(starship => starship.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));

    return (
      <div>
        <Header />
        <Form starships={this.state.starships} filterByMovie={this.filterByMovie} filterByText={this.filterByText} />
        <StarshipList starships={this.state.checked} />
        <hr></hr>
        <StarshipList starships={filterStarships} />
      </div>
    );
  }
}

export default App;
