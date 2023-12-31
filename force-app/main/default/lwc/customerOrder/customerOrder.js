import getCustomer from '@salesforce/apex/CustomerOrder.getCustomer'
import createOrder from '@salesforce/apex/OrderClass.createOrder'
import { LightningElement } from 'lwc';
import newCustomer from "c/newCustomer"

export default class CustomerOrder extends LightningElement {
  customer={};
  order={};
  error='';
  // a03Hp00002RXUCCIA5
  handleEnterId (e) {
    if(e.key === 'Enter'){
      getCustomer({id: e.target.value})
      .then(async (data)=>{
        if(!data.length){
          this.customer = {};
          this.error='Not found customer';
          return
        }

        this.customer = data[0];
        this.order = await createOrder({customer: this.customer})
        const findIdEvent = new CustomEvent('createorder',{detail: this.order})
        this.dispatchEvent(findIdEvent)
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
