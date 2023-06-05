import React, { useContext } from 'react'
import { OgrenciContext } from '../App'

const OgrenciItem = () => {

  const  {ogrenci, changeRenk} = useContext(OgrenciContext)
console.table(ogrenci);
  return (
    <div>
      {ogrenci.map((item)=>{
        return (
          <div key={item.id} style={{backgroundColor:item.color}}>
            <h3>NAME: {item.name}</h3>
            <h4>EMAIL: {item.email}</h4>
            <h4>AGE: {item.age}</h4>
            Color: <input type="text" value={item.color} 
              onChange={(e)=>changeRenk(item.id, e.target.value)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default OgrenciItem