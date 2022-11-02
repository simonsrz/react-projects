import { ChangeEvent, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Addresses from './classes/Addresses';
import './styling.css';

type TProps = {
    onSubmit: () => void;
    toNameStep: () => void;
    addressesSubmit: (addrData: Addresses) => void;
    personalAddressData: Addresses;
}

const AddressStep = (props: TProps) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Addresses>();
    const [delStreet, setDelStreet] = useState(props.personalAddressData.deliveryAddress.street);
    const [delZip, setDelZip] = useState(props.personalAddressData.deliveryAddress.zipCode);
    const [delCity, setDelCity] = useState(props.personalAddressData.deliveryAddress.city);
    const [invStreet, setInvStreet] = useState(props.personalAddressData.invoiceAddress.street);
    const [invZip, setInvZip] = useState(props.personalAddressData.invoiceAddress.zipCode);
    const [invCity, setInvCity] = useState(props.personalAddressData.invoiceAddress.city);
    const [invAsDel, setInvAsDel] = useState(false);

    useEffect(() => {
        if (invAsDel) {
            setValue("invoiceAddress.street", delStreet);
            setValue("invoiceAddress.zipCode", delZip);
            setValue("invoiceAddress.city", delCity);
            setInvStreet(delStreet);
            setInvCity(delCity);
            setInvZip(delZip);
        }
    }, [invAsDel, delZip, delCity, delStreet, setValue])

    const submitClick: SubmitHandler<Addresses> = data => {
        props.addressesSubmit(data);
        props.onSubmit();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setInvAsDel(true);
        }
        else {
            setInvAsDel(false);
            setInvStreet(delStreet);
            setInvCity(delCity);
            setInvZip(delZip);
        }
    }

    return (
        <div className="mainPageDiv">
            <form noValidate id="addressForm" onSubmit={handleSubmit(submitClick)}>
                <div id="delieveryAddress">
                    <h2>Delivery Address</h2>
                    <div className="streetDiv">
                        <label htmlFor="delStreet">Street: </label>
                        <input type="text"
                            id="delStreet"
                            placeholder="Enter your street"
                            autoComplete="off"
                            value={delStreet}
                            {...register("deliveryAddress.street", { required: true, maxLength: 20, pattern: /^[a-zA-Z0-9_ ]*$/, onChange: (e) => { setDelStreet(e.target.value) } })} />
                        {errors.deliveryAddress?.street && errors.deliveryAddress?.street.type === "required" && <span className="error">Street name is required</span>}
                        {errors.deliveryAddress?.street && errors.deliveryAddress?.street.type === "maxLength" && <span className="error">Street name is too long</span>}
                        {errors.deliveryAddress?.street && errors.deliveryAddress?.street.type === "pattern" && <span className="error">Street name is invalid</span>}
                    </div>
                    <div className="zipDiv">
                    <label htmlFor="delZipCode">Zip-Code: </label>
                        <input type="text"
                            id="delZipCode"
                            placeholder="Enter your zip code"
                            autoComplete="off"
                            value={delZip}
                            {...register("deliveryAddress.zipCode", { required: true, pattern: /^[0-9][0-9]-[0-9][0-9][0-9]$/, onChange: (e) => { setDelZip(e.target.value) } })} />
                        {errors.deliveryAddress?.zipCode && errors.deliveryAddress?.zipCode.type === "required" && <span className="error">Zip code is required</span>}
                        {errors.deliveryAddress?.zipCode && errors.deliveryAddress?.zipCode.type === "pattern" && <span className="error">Zip code is invalid (DD-DDD)</span>}
                    </div>
                    <div className="cityDiv">
                    <label htmlFor="delCity">City: </label>
                        <input type="text"
                            id="delCity"
                            placeholder="Enter your city"
                            autoComplete="off"
                            value={delCity}
                            {...register("deliveryAddress.city", { required: true, maxLength: 20, pattern: /^[a-zA-Z_ ]*$/, onChange: (e) => { setDelCity(e.target.value) } })} />
                        {errors.deliveryAddress?.city && errors.deliveryAddress?.city.type === "required" && <span className="error">City is required</span>}
                        {errors.deliveryAddress?.city && errors.deliveryAddress?.city.type === "maxLength" && <span className="error">City name too long</span>}
                        {errors.deliveryAddress?.city && errors.deliveryAddress?.city.type === "pattern" && <span className="error">City name is invalid</span>}
                    </div>
                </div>
                <div id="invoiceAddress">
                    <div id="option">
                        <input id="deliveryCopy" type="checkbox" onChange={handleChange} />
                        <label htmlFor="deliveryCopy">Invoice address same as delivery address</label>
                    </div>

                    <h2>Invoice Address</h2>
                    <div className="streetDiv">
                    <label htmlFor="invStreet">Street: </label>
                        <input type="text"
                            id="invStreet"
                            placeholder="Enter your street"
                            autoComplete="off"
                            value={invStreet}
                            disabled={invAsDel}
                            {...register("invoiceAddress.street", { required: true, maxLength: 20, pattern: /^[a-zA-Z0-9_ ]*$/, onChange: (e) => { setInvStreet(e.target.value) } })} />
                        {errors.invoiceAddress?.street && errors.invoiceAddress?.street.type === "required" && <span className="error">Street name is required</span>}
                        {errors.invoiceAddress?.street && errors.invoiceAddress?.street.type === "maxLength" && <span className="error">Street name is too long</span>}
                        {errors.invoiceAddress?.street && errors.invoiceAddress?.street.type === "pattern" && <span className="error">Street name is invalid</span>}
                    </div>
                    <div className="zipDiv">
                    <label htmlFor="invZipCode">Zip-Code: </label>
                        <input type="text"
                            id="invZipCode"
                            placeholder="Enter your zip code"
                            autoComplete="off"
                            value={invZip}
                            disabled={invAsDel}
                            {...register("invoiceAddress.zipCode", { required: true, pattern: /^[0-9][0-9]-[0-9][0-9][0-9]$/, onChange: (e) => { setInvZip(e.target.value) } })} />
                        {errors.invoiceAddress?.zipCode && errors.invoiceAddress?.zipCode.type === "required" && <span className="error">Zip code is required</span>}
                        {errors.invoiceAddress?.zipCode && errors.invoiceAddress?.zipCode.type === "pattern" && <span className="error">Zip code is invalid (DD-DDD)</span>}
                    </div>
                    <div className="cityDiv">
                    <label htmlFor="invCity">City: </label>
                        <input type="text"
                            id="invCity"
                            placeholder="Enter your city"
                            autoComplete="off"
                            value={invCity}
                            disabled={invAsDel}
                            {...register("invoiceAddress.city", { required: true, maxLength: 20, pattern: /^[a-zA-Z_ ]*$/, onChange: (e) => { setInvCity(e.target.value) } })} />
                        {errors.invoiceAddress?.city && errors.invoiceAddress?.city.type === "required" && <span className="error">City is required</span>}
                        {errors.invoiceAddress?.city && errors.invoiceAddress?.city.type === "maxLength" && <span className="error">City name too long</span>}
                        {errors.invoiceAddress?.city && errors.invoiceAddress?.city.type === "pattern" && <span className="error">City name is invalid</span>}
                    </div>
                </div>
            </form>
            <button id="prevStep" onClick={props.toNameStep}>Prev Step</button>
            <button id="nextStep" type="submit" form="addressForm">Next Step</button>
        </div>
    );
}

export default AddressStep;