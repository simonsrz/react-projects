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

    const renderStep = () => {
        if (currStep === 1) {
            return <NameStep 
                    personalData={personalData} 
                    personalDataSubmit={(data: PersonalData) => setPersonalData(data)} 
                    onSubmit={() => setCurrStep(2)} />
        }
        else if (currStep === 2) {
            return <AddressStep 
                    addressesSubmit={(data: Addresses) => setAddressData(data)}
                    personalAddressData={addressData} 
                    toNameStep={() => setCurrStep(1)} 
                    onSubmit={() => setCurrStep(3)} />
        }
        else {
            return <SummaryStep
                    addressesPass={addressData}
                    personalDataPass={personalData}
                    toNameStep={() => setCurrStep(1)}
                    toAddressStep={() => setCurrStep(2)} />
        }
    }

    return (
        <div id="mainForm">
            {renderStep()}
        </div>
    );
}

export default CustomerForm;