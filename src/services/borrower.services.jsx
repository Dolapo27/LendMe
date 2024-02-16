import React from 'react'
import {db} from "../config/firebase"
import {collection,getDoc,getDocs, addDoc,setDoc,updateDoc,doc,query,where} from "firebase/firestore"

const userRef = collection(db, "borrower")

// const usersRef = collection(db, "borrower")

// const userDocRef = collection(db, "users").doc(currentUserId)

// const documentId = userDocRef.id

// const [userList, setUserList] = useState([])

class Borrowerservices {

  

  addBorrower = async (anewBorrower) => {
    try{
      console.log('userRef:', userRef); // Debugging
      console.log('anewBorrower.id:', anewBorrower.id); // Debugging

      await setDoc(doc(userRef, anewBorrower.id), anewBorrower);
      console.log('Borrower document created successfully with custom ID:', anewBorrower.id);
    } catch (error) {
      console.error('Error creating borrower document:', error.message);
    }
  }

  //  setBorrower = async() => {
  //    await setDoc(doc(userRef, "borrower", newBorrowers.id), newBorrowers);

  // }


    

  updateBorrower = (id, updateUser) => {
    //check if the user you want to update exist
    const userDoc = doc(db, "borrower", id) 
    return updateDoc(userDoc, updateUser)
  }

  getAllBorrowers = () => {

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

  getBorrower = (id) => {
    const borrowerDoc = doc(db, "borrower", id)
    return getDoc(borrowerDoc)
  }




  getApprovedBorrowers = async () => {
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
      console.error('Error fetching approved borrowers:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }







}

export default new Borrowerservices();








