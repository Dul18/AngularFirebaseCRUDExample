import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formdata = new Address();

  addresses : Address[]
//injecting service
  constructor(private addressService:AddressService) { }

  ngOnInit():void{
//this provide as observable, we have to subscribe it
   this.addressService.readAddress().subscribe(

    (data)=>{

    this.addresses =  data.map ( (document)=>{

        return {
          id:document.payload.doc.id,
          ...document.payload.doc.data as {}
        } as Address
      }
       )

      console.log("Data Recieved >>", data)
    }
   )
  }

  saveData() {

    console.log("Saving Data");
    console.log(this.formdata);
    //pase the form data to the service
    return this.addressService.saveAddress(this.formdata);
  }

}
