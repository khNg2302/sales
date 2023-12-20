import { LightningElement, api } from 'lwc';

export default class OrderDetail extends LightningElement {
  @api detail;

  handleOK () {
    this.dispatchEvent(new CustomEvent('saveorder'));
  }
}
