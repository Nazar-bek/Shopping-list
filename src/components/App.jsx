import React from "react";
import "../App.css";
import Information from "./Information";
import ShoppingAddForm from "./ShoppingAddForm";
import ShoppinfList from "./ShoppinfList";
import Filter from "./Filter";
import { arr } from "../constants";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import SearchPanel from "./SearchPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("shopping-list")) || arr,
      search: "",
      filter: "all",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      localStorage.setItem("shopping-list", JSON.stringify(this.state.data));
    }
  }

  onDelete = (id) => {
    const newArr = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newArr,
    });
  };

  onToggleActive = (id) => {
    const newArr = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    this.setState({ data: newArr });
  };

  onAdd = (item) => {
    const { title, number } = item;
    if (number < 1 || number > 99) {
      toast.error("Number must be between 1 and 99")
      return;
    }
    const newData = { title, number, active: false, id: uuidv4() };
    const newArr = [...this.state.data, newData];
    this.setState({
      data: newArr,
    });
  };

  searchData = (arr, term) => {
    if (!term || term.length === 0) {
      return arr;
    }
    return arr.filter(
      (item) => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  onSearchUpdate = (search) => {
    this.setState({
      search,
    });
  };

  filterData = (arr, filter) => {
    switch (filter) {
      case "completed":
        return arr.filter((item) => item.active);
      case "big-size":
        return arr.filter((item) => item.number >= 10);
      default:
        return arr;
    }
  };

  onFind = (id) => {
    this.setState({
      filter: id,
    });
  };

  render() {
    const { data, search, filter } = this.state;
    const allData = this.filterData(this.searchData(data, search), filter);
    return (
      <>
        <div className="app">
          <div className="wrapper">
            <div className="todomain_cart">
              <Information length={this.state.data.length} />
              <SearchPanel onChangeStaff={this.onSearchUpdate} />
              <ShoppingAddForm onAddItem={this.onAdd} />
              <ShoppinfList
                onToggleActive={this.onToggleActive}
                onDelete={this.onDelete}
                data={allData}
              />
              <Filter filter={filter} onLook={this.onFind} />
            </div>
            <img src="/vite.svg" alt="hhyu" />
          </div>
          <ToastContainer position="top-right" autoClose={2000} />
        </div>
      </>
    );
  }
}

export default App;
