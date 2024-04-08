import React from 'react'
import ContentHeader from "./ContentHeader"
import Card from "./Card";
const Content = () => {
  return (
    <div className='content w-full h-[100vh]'>
        <ContentHeader/>
        <div className='w-full h-[90vh] overflow-x-hidden overflow-auto'>
          <Card/>
          <Card/>
          <Card/>

        </div>
    </div>
  )
}

export default Content