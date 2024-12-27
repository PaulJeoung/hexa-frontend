import React from 'react'
import FAQListComponent from '../../components/board/FAQListComponent'
import HelpDeskLayout from '../../layout/HelpDeskLayout'


const FAQPage = () => {
  return (
    <>
        <div className='mb-5'>FAQPage</div>
        <HelpDeskLayout></HelpDeskLayout>
        <FAQListComponent />
    </>
  )
}

export default FAQPage