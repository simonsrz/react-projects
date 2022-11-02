import React, { useState } from 'react';
import NameStep from './NameStep';
import AddressStep from './AddressStep';
import SummaryStep from './SummaryStep';
import PersonalData from './classes/PersonalData';
import AddressData from './classes/AddressData';
import Addresses from './classes/Addresses';
import './styling.css';

const CustomerForm = () => {
    const [currStep, setCurrStep] = useState(1);
    const [personalData, setPersonalData] = useState(new PersonalData('', '', ''));
    const [addressData, setAddressData] = useState<Addresses>({
        deliveryAddress: new AddressData("", "", ""),
        invoiceAddress: new AddressData("", "", "")
    });

    return (
        <div id="mainForm">
            <NameStep
                hidden={currStep}
                personalDataSubmit={(data: PersonalData) => setPersonalData(data)}
                onSubmit={() => setCurrStep(2)} />
            <AddressStep
                hidden={currStep}
                addressesSubmit={(data: Addresses) => setAddressData(data)}
                toNameStep={() => setCurrStep(1)}
                onSubmit={() => setCurrStep(3)} />
            <SummaryStep
                hidden={currStep}
                addressesPass={addressData}
                personalDataPass={personalData}
                toNameStep={() => setCurrStep(1)}
                toAddressStep={() => setCurrStep(2)} />
        </div>
    );
}

export default CustomerForm;