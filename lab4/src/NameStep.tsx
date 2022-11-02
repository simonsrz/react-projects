import { useForm, SubmitHandler } from "react-hook-form";
import PersonalData from './classes/PersonalData';
import './styling.css';

type TProps = {
    onSubmit: () => void;
    personalDataSubmit: (pData: PersonalData) => void;
    hidden: number;
}

const NameStep = (props: TProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<PersonalData>();

    const submitClick: SubmitHandler<PersonalData> = data => {
        props.personalDataSubmit(data);
        props.onSubmit();
    }
    return (
        <div hidden={props.hidden!==1} className="mainPageDiv">
            <form noValidate id="nameStep" onSubmit={handleSubmit(submitClick)}>
                <h2>Personal Data</h2>
                <div id="firstname">
                    <label htmlFor="fname">First Name: </label>
                    <input type="text"
                        id="fname"
                        placeholder="Enter your first name"
                        autoComplete="off"
                        {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]*$/ })} />
                    {errors.firstName && errors.firstName.type === "required" && <span className="error">Name is required</span>}
                    {errors.firstName && errors.firstName.type === "maxLength" && <span className="error">Name is too long</span>}
                    {errors.firstName && errors.firstName.type === "pattern" && <span className="error">Name is invalid</span>}
                </div>
                <div id="lastname">
                    <label htmlFor="lname">Last Name: </label>
                    <input type="text"
                        id="lname"
                        placeholder="Enter your last name"
                        autoComplete="off"
                        {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]*$/ })} />
                    {errors.lastName && errors.lastName.type === "required" && <span className="error">Last name is required</span>}
                    {errors.lastName && errors.lastName.type === "maxLength" && <span className="error">Last name is too long</span>}
                    {errors.lastName && errors.lastName.type === "pattern" && <span className="error">Last name is invalid</span>}
                </div>
                <div id="email">
                    <label htmlFor="mail">E-mail address: </label>
                    <input type="email"
                        id="mail"
                        placeholder="Enter your email"
                        autoComplete="off"
                        {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                    {errors.email && errors.email.type === "required" && <span className="error">E-mail is required</span>}
                    {errors.email && errors.email.type === "pattern" && <span className="error">E-mail is invalid</span>}
                </div>
            </form>
            <button id="nextStep" type="submit" form="nameStep">Next Step</button>
        </div>
    );
}

export default NameStep;