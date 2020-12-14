//uuidv4 para criar 'id' = Unique Universal Id
import { uuid } from "uuidv4";


class Appointment {
    id: string;
    
    provider: string;

    date: Date;

    //O metodo contructor nos permite instanciar essa classe.
    //Ao inves de usar uma "interface" para declarar os tipos das variaveis, podemos usar a class Appointment ja criada e omitir (Omit<>) o 'id' ja que é uma variavel dinamica q n recebe valores externos do das requisiçoes
    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;