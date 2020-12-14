import { Router } from 'express';
const appointmentsRouter = Router();

//'date-fns' é usado para lidar com datas e horas
// parseISO: transforma string(como é enviado pelo postman ) para o formato Date();
// startOfHour: arredonda os valores da hora cadastrada
// isEqual: Verifica se duas datas sao iguais
import { parseISO } from 'date-fns';

import CreateAppointmentService from '../services/CreateAppointmentService';

import AppointmentsRepository from '../repositories/AppointmentRepository'
const appointmentsRepository = new AppointmentsRepository();

//Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.get('/', (req, res)=> {
    return res.json(appointmentsRepository.all());
})

appointmentsRouter.post('/', (req, res) => {
    const { provider, date } = req.body;

    // startOfHour: arredonda os valores da hora cadastrada
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService( appointmentsRepository );

    const appointment = new createAppointment.execute({ provider, date: parsedDate });

    
    return res.json(appointment);

})

export default appointmentsRouter;