import { LightningElement } from 'lwc';
export default class SimpleLWC extends LightningElement {
    name = 'HFS'
    connectedCallback() {
        console.log('came into connectedCallback')
    }
}