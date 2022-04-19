import React, { useEffect, useState } from 'react';
import {Table , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllModal from './components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {allData, deleteData, updateData } from './redux/slicer';
import { singleData } from './redux/editSlicer';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function App() {
  const [myState, setMyState] = useState(useSelector((state)=> state.crud))
  const reduxAllUsers = useSelector((state)=> state.crud);
  const reduxSingleUsers = useSelector((state)=> state.editCrud);
  const dispatch = useDispatch();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [action, setAction] = useState('add');

  const [newUserData, setNewUserData] = useState(
    {
      name: "",
      email:'',
      age: '',
      phone: '',
      
    }
  )

  const [editUserData, setEditUserData] = useState({})
  useEffect(()=>{
    setMyState(reduxAllUsers)
  },[reduxAllUsers])


  useEffect(()=>{
    setEditUserData(reduxSingleUsers)
  },[reduxSingleUsers])

  const clear = () => { setNewUserData({ ...newUserData, name: '', email: "", phone: "", age: ""})}
  
  const createModal = ()=>{
    clear()
    setAddModalVisible(true)
    setAction('add')
  }
  const formSubmit = () =>{
    setAddModalVisible(false)
    dispatch(allData(newUserData));
    clear()
  }
  const viewData=(i)=>{
    const data = {
      name : reduxAllUsers[i].name,
      email : reduxAllUsers[i].email,
      phone : reduxAllUsers[i].phone,
      age : reduxAllUsers[i].age,
      index : i,
    }
    
    dispatch(singleData(data))
    setAddModalVisible(true)
    // console.log(reduxSingleUsers);
    setAction('edit')
  }

  const editSubmit = (i) => {
    const editUser ={
      name: editUserData.name,
      email:editUserData.email,
      age:editUserData.age,
      phone:editUserData.phone
    }
    const index = parseInt(i);
    var oldData = myState;
    const temp =oldData.map((el,i) => i ===  index? el =  editUser : el) 
    dispatch(updateData(temp));
    setAddModalVisible(false);
    clear();
};

  const onDelete =(i)=>{
    dispatch(deleteData(i))
  }

  return (
    <>
    {/* MAIN View */}
    <div className='App'>
    <Button className='mt-3 ms-3 mb-3' style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={createModal}>Add User</Button>
    <h3 className='text-center mb-2'>USERS DATA</h3>
      <Table bordered >
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myState.map((data, i) => 
             <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.age}</td>
              <td><Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>viewData(i)} ><BiEditAlt color='black' /></Button><Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
    {addModalVisible && <AllModal
      addModalVisible = {addModalVisible}
      setAddModalVisible = {setAddModalVisible}
      formSubmit = {formSubmit}
      newUserData = {newUserData}
      setNewUserData = {setNewUserData}
      editUserData = {editUserData}
      setEditUserData = {setEditUserData}
      action = {action}
      editSubmit = {editSubmit}
     />}
    </>
  )
}
export default App;