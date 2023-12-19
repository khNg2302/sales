import { LightningElement, api } from 'lwc';

export default class SectionLayout extends LightningElement {
  @api title;
  @api divider;
}
