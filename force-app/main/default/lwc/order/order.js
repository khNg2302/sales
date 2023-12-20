import { LightningElement } from 'lwc';
import newDetail from '@salesforce/apex/OrderClass.newDetail'
import insertDetail from '@salesforce/apex/OrderClass.insertDetail'

export default class Order extends LightningElement {
  customer;
  detail=[];
  detailDisplay=[];
  order;


  handleSetOrder (event) {
    this.order = event.detail
  }

  async handleAddProduct (event){
      const detailItem = event.detail;
      const newDetailValue = await newDetail({order:this.order, product:detailItem.product,quantity:detailItem.quantity})
      this.detail= [...this.detail, newDetailValue]
      this.detailDisplay = [...this.detailDisplay,
      {
        product:detailItem.product,
        quantity:detailItem.quantity
      }
      ]
  }

  handleSaveOrder () {
    insertDetail({detail:this.detail})
  }
}
