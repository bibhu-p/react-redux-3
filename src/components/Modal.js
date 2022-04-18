import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const AllModal =(props)=>{
 return(
    <Modal show={true} scrollable={true} onHide={()=>props.setAddModalVisible(false)} > 
    <Modal.Header closeButton>
    <Modal.Title> {props.action==='add'? 'Add Data':'Edit Data'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <input
        type="text"
        name="name"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter name..."
        value={props.action ==='add'?props.newUserData.name : props.editUserData.name}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, name: e.target.value }): props.setEditUserData({...props.editUserData,name:e.target.value})}}
      />
      <input
        type="text"
        name="email"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter email..."
        value={props.action ==='add'?props.newUserData.email : props.editUserData.email}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, email: e.target.value }): props.setEditUserData({...props.editUserData,email:e.target.value})}}
      />
      <input
        type="text"
        name="phone"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter phone number..."
        value={props.action ==='add'?props.newUserData.phone : props.editUserData.phone}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, phone: e.target.value }):props.setEditUserData({...props.editUserData,phone:e.target.value})}}
      />
      <input
        type="text"
        name="age"
        className="ms-3 my-2"
        required="required"
        placeholder="Enter age"
        value={props.action ==='add'?props.newUserData.age : props.editUserData.age}
        onChange={(e) => {props.action ==='add'? props.setNewUserData({ ...props.newUserData, age: e.target.value }):props.setEditUserData({...props.editUserData, age:e.target.value})}}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>props.setAddModalVisible(false)}>Close</Button>
      <Button variant="primary" onClick={()=> props.action === 'add' ? props.formSubmit() : props.editSubmit(props.editUserData.index)}>{props.action==='add'? 'Add':'Update'}</Button>
    </Modal.Footer>
    </Modal>
    )
}
export default AllModal