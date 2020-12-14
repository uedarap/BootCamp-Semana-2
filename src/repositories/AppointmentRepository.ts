//Repositorio fica responsavel por fazer operações do banco de dados (metodos)
import Appointment from '../models/Appointment'

import { isEqual } from 'date-fns'

//DTO: Data Transfer Object
interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentRepository {
    // private: declara a variavel como n acessivel por fora da classe, somente os metodos da classe serao acessiveis
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];

    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment => 
            isEqual(date, appointment.date),
        ); 
        return findAppointment || null;
    }

    public create({ provider, date }: CreateAppointmentDTO): Appointment{
    //public create(data: CreateAppointmentDTO): Appointment{

        //O instanciamento da class Appointment ocorre atraves do metodo constructor dentro de ../models/Appointment.ts
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentRepository;