import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment'
import appointmentsRouter from '../routes/appointments.routes';
import AppointmentsRepository from '../repositories/AppointmentRepository'

interface Request {
    provider: string;
    date: Date;
}

//Dependency Inversion 

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    };

    public execute({ provider, date }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate)

    if (findAppointmentInSameDate) {
        throw Error( 'This Appointment is Already booked');
    }

    const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate });

    return appointment;
    }

}

export default CreateAppointmentService;

//Obs Todo "service" tem um unico metodo, o public execute().