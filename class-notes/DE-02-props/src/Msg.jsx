import React from 'react'
//todo illede props yazilmak zorunda degil...
const Msg = (pro) => {
  console.log(pro);
  return (
    <div>
        <h1>Merhaba ben {pro.myName}</h1>
    </div>
  )
}
// const Msg = ({myName, telefon}) => {
//   return (
//     <div>
//         <h1>Merhaba ben {myName}</h1>
//     </div>
//   )
// }

export default Msg