import { Injectable } from '@angular/core';
import { Address } from './address';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  //injected firestore

  constructor(private firestore:AngularFirestore) { 


  }
//this function use to store data in database, firebase
  saveAddress(address:Address){

   
    console.log("From Service Class");
    console.log(address);
    this.firestore.collection("address").add({...address})

  }

  //read data in a database
  readAddress(){

    return this.firestore.collection("address").snapshotChanges();
    //this output is an observable
    //then we have suscribe 
    // go to address.com.ts
  }
}
