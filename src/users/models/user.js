


// La clase la conformamos con los datos (supuestamente los datos que vienen de la api)
// En el constructor describo la forma de la clase que va a tener los datos que quiero manejar localmente, luego transformo con el mapper
    
export class User {

    /**
     * 
     * @param{Like<User>} UserDataLike
     */
    constructor({ id, isActive, balance, avatar, firstName, lastName, gender, }) {
        this.id         = id;
        this.isActive   = isActive;
        this.balance    = balance;
        this.avatar     = avatar;
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.gender     = gender;
    };
};