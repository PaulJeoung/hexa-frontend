import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from 'react-bootstrap-icons';

const OffMenu = ({menuList}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <List size={50} onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Memu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='list-unstyled mt-1'>
            {menuList.map(menu => <li className='ms-3 fw-bold mt-3'>{menu}</li>)}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffMenu