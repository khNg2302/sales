import { LightningElement } from 'lwc';
import newDetail from '@salesforce/apex/OrderClass.newDetail'

export default class Order extends LightningElement {
  customer;
  detail=[];
  detailDisplay=[];
  order;

  handleSetCustomer (event) {
    this.customer = event.detail
  }

  handleAddProduct (event){
      const detailItem = event.detail;
      const newDetailValue = newDetail(this.order, detailItem.product,detailItem.quantity)
      this.detail= [...this.detail, newDetailValue]
      this.detailDisplay = [...this.detailDisplay,
      {
        product:detailItem.product,
        quantity:detailItem.quantity
      }
      ]
  }
}
