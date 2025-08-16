import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

class ShoppingAddForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: "Buy",
      number: ""
    }
  } 
  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onAdd = () => {
    const data = {
     title: this.state.title,
     number: this.state.number
    }
    if(!data.number.length  || !data.title.length){
     return toast.error("Please fill the gap")

    }else if(data.number < 0 || data.number > 100){
      toast.error("Number must be between 1 and 99")
      return
    } else{
      this.props.onAddItem(data)
      this.state.title = "Buy"
      this.state.number = ""
      toast.success("You added a list")
    }
  }
  render(){
    const {title, number} = this.state
    return(
       <div className='form'>
        <input name='title' value={title} onChange={this.onChange} type="text" className='title'  placeholder='Tittle...'/>
       <input name="number" max="99" min="1" value={number} onChange={this.onChange} type="number" className='number' placeholder='14'/> 
       <button onClick={this.onAdd}>Add</button>
    </div>
    )
  }
}

export default ShoppingAddForm;