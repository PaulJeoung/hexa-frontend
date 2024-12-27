import React from 'react'
import QnAListComponent from '../../components/board/QnAListComponent'
import HelpDeskLayout from '../../layout/HelpDeskLayout'

const QnAPage = () => {
  return (
    <>
        <div className='mb-5'>QnAPage</div>
        <HelpDeskLayout></HelpDeskLayout>
        <QnAListComponent />
    </>
  )
}

export default QnAPage