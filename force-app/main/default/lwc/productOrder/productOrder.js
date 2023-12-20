import { LightningElement } from 'lwc';
import getProduct from '@salesforce/apex/ProductOrder.getProduct'

export default class ProductOrder extends LightningElement {
  product={Name:'',Price:null};
  quantity;
  error;


  handleEnterId (e) {
    if(e.key === 'Enter'){
      this.id = e.target.value;
      getProduct({id: e.target.value})
      .then((data)=>{
        if(!data.length) {
          this.product = {};
          this.error='Not found product';
          return
        }

        this.product = data[0];
        this.refs.quantityField.focus();
        this.error = '';
      })
      .catch(()=>{
        this.product = {};
        this.error='Not found product';
      })
    }
  }

  handleChangeQuantity (event) {
    this.quantity = event.target.value
  }

  handleVerify(){
    const getProductEvent = new CustomEvent('findproduct',{
      detail: {
        product: this.product,
        quantity:this.quantity
      }
    })
    this.dispatchEvent(getProductEvent)
  }
}
