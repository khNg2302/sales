import getCustomer from '@salesforce/apex/CustomerOrder.getCustomer'
import { LightningElement } from 'lwc';
import newCustomer from "c/newCustomer"

export default class CustomerOrder extends LightningElement {
  id='';
  customer={};
  error='';
  // a03Hp00002RXUCCIA5

  handleEnterId (e) {
    if(e.key === 'Enter'){
      this.id = e.target.value;
      getCustomer({id: e.target.value})
      .then((data)=>{
        this.customer = data[0];
        this.error = '';
      })
      .catch(()=>{
        this.customer = {};
        this.error='Not found customer';
      })
    }
  }

  handleClickNewCustomer(){
    newCustomer.open()
  }
}
