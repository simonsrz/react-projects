class PersonalData{
    firstName: string;
    lastName: string;
    email: string;

    constructor(name:string, lastName:string, email:string)
    {
        this.firstName = name;
        this.lastName = lastName;
        this.email = email;
    }
}

export default PersonalData;