import React from "react";

class SearchPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const value = e.target.value
        this.setState({
            search: value
        })
        this.props.onChangeStaff(value)
    }
    render(){
        const {search}  = this.state
        return(
            <input type="text" value={search} onChange={this.onChange} placeholder="Search..." className="search-input" />
        )
    }


}

export default SearchPanel;