import React, { useEffect, useState } from 'react';
import {Table , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllModal from './components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {allData, deleteData, singleData } from './redux/slicer';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function App() {
  const [myState, setMyState] = useState(useSelector((state)=> state.crud))
  const reduxAllUsers = useSelector((state)=> state.crud);
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


  const [editUserData, setEditUserData] = useState(
    useSelector((state)=> state.editCrud)
  )

  useEffect(()=>{
    setMyState(reduxAllUsers)
  },[reduxAllUsers])

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
    dispatch(singleData(i))
    setAddModalVisible(true)
    setAction('edit')
  }
  
  const editSubmit = (i) => {
    const editUser = editUserData;
    // console.log(editUser);
    const oldData = myState;
    oldData.splice(i,1,editUser);
    // dispatch(allUser(oldData));
    // console.log(oldData);
    setAddModalVisible(false);
    clear();
};


  const onDelete =(i)=>{
    console.log(">>>>>>>>>>>>>>>");
    dispatch(deleteData(i))

    // console.log(reduxAllUsers);
    // reduxAllUsers.splice(i,1);

    // setMyState(reduxAllUsers);
    // myState.assign(oldData)
    // dispatch(allUser(reduxAllUsers));

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
