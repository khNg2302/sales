import LightningModal from 'lightning/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class NewCustomer extends LightningModal {
    fields = ["Name","Address__c", "Number_phone__c"]

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Customer created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
