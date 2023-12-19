import LightningModal from 'lightning/modal';
import { api } from 'lwc';


export default class Modal extends LightningModal {
  @api header;
}
