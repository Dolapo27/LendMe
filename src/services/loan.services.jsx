import React from 'react'
import {db} from "../config/firebase"
import {collection,getDoc,getDocs, addDoc,updateDoc,doc} from "firebase/firestore"

const userRef = collection(db, "users")

 // getUserList = () => {

  //   const data = getDocs(userRef)
  //   const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id }) )
  //   setUserList(filteredData)
  //   return(userList)
          
  // } 

  

const loanServices = () => {
  return (
    <>

    </>
  )
}

export default loanServices