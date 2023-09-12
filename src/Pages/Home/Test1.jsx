import React from 'react'

export default function Test1(props) {
  let roll= props.name1
  console.log(roll) 
  return (
    <div>
        {roll}
    </div>
  )
}
