import React from 'react'
import {db} from "../config/firebase"
import {collection,getDoc,getDocs, addDoc,setDoc,updateDoc,doc,query,where} from "firebase/firestore"

const userRef = collection(db, "borrower")

// const usersRef = collection(db, "borrower")

// const userDocRef = collection(db, "users").doc(currentUserId)

// const documentId = userDocRef.id

// const [userList, setUserList] = useState([])

class Lenderservices {

  

  addLender = async (anewLender) => {
    try{
      console.log('userRef:', userRef); // Debugging
      console.log('anewBorrower.id:', anewLender.id); // Debugging

      await setDoc(doc(userRef, anewLender.id), anewLender);
      console.log('Lender document created successfully with custom ID:', anewLender.id);
    } catch (error) {
      console.error('Error creating borrower document:', error.message);
    } 
  }

  //  setBorrower = async() => {
  //    await setDoc(doc(userRef, "borrower", newBorrowers.id), newBorrowers);

  // }


    

  updateLender = (id, updateUser) => {
    //check if the user you want to update exist
    const userDoc = doc(db, "borrower", id) 
    return updateDoc(userDoc, updateUser)
  }

  getAllLenders = () => {

    return getDocs(userRef)
    // const borrowers = []
    // let users = getDocs(userRef)
    // foreach (user in users) {
    //   if user.role === "borrower"{
    //     borrowers.push(user)
    //   }
    // } 

    // const borrowers = [];
    //     try {
    //       const users = await getDocs(userRef);
    //       users.forEach(() => {
    //         const user = doc.data();
    //         if (user.role === "borrower") {
    //           borrowers.push(user);
    //         }
    //       });
    //     } catch (error) {
    //       console.error("Error fetching users:", error);
    //     }
  }

  getLender = (id) => {
    const lenderDoc = doc(db, "borrower", id)
    return getDoc(lenderDoc)
  }




  getApprovedLenders = async () => {
    try {
      
      // Query for approved borrowers
      const q = query(userRef, where('status', '==', 'Approved'));
      const querySnapshot = await getDocs(q);

      // Map the approved borrowers and return them
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (error) {
      console.error('Error fetching approved lenders:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }







}

export default new Lenderservices();








