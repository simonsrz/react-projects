import Addresses from "./classes/Addresses";
import PersonalData from "./classes/PersonalData";
import './styling.css';

type TProps = {
    personalDataPass: PersonalData;
    addressesPass: Addresses;
    toNameStep: () => void;
    toAddressStep: () => void;
}

const SummaryStep = (props: TProps) => {

    return (
        <div className="mainPageDiv">
            <h2>PERSONAL DATA</h2>
            <p>FIRST NAME: {props.personalDataPass.firstName}</p>
            <p>LAST NAME: {props.personalDataPass.lastName}</p>
            <p>E-MAIL ADDRESS: {props.personalDataPass.email}</p>
            <button id="prevStep" onClick={props.toNameStep}>Edit personal data</button>
            <h2>DELIVERY ADDRESS</h2>
            <p>DELIVERY STREET: {props.addressesPass.deliveryAddress.street}</p>
            <p>DELIVERY ZIP-CODE: {props.addressesPass.deliveryAddress.zipCode}</p>
            <p>DELIVERY CITY: {props.addressesPass.deliveryAddress.city}</p>
            <h2>INVOICE ADDRESS</h2>
            <p>INVOICE STREET: {props.addressesPass.invoiceAddress.street}</p>
            <p>INVOICE ZIP-CODE: {props.addressesPass.invoiceAddress.zipCode}</p>
            <p>INVOICE CITY: {props.addressesPass.invoiceAddress.city}</p>
            <button id="prevStep" onClick={props.toAddressStep}>Edit addresses</button>
        </div>
    );
}

export default SummaryStep;