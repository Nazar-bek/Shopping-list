import React from 'react'
const Filter = ({filter, onLook}) => {
  const buttons = [
    {
     id: "all",
     label: "All Products"
    },
    {
      id: "big-size",
      label: "Big Size"
    },
    {
       id: "completed",
      label: "Completed"
    }
  ]
  return (
    <div className='filter'>
        <div className="btns">
          {buttons.map(item => (
            <button onClick={() => onLook(item.id)} className={`${filter === item.id && "active"}`} key={item.id}>{item.label}</button>
          ))}
        </div>
    </div>
  )
}

export default Filter;