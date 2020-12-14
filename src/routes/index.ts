import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

//Usando "use" defininmos que toda rota raiz no nosso componente 'appointmentsRouter' vai partir de '/appointments'
routes.use('/appointments', appointmentsRouter);

export default routes;
