import express, { Request, Response } from 'express';
import path from 'path';
import Persona from './clases/persona';

const PORT = 5005;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '..', 'views'));

app.set('view engine', 'ejs');  //motor de plantillas.

app.get('/saludar', (req: Request, res: Response) => {
  const nombre = req.query.nombre;
  const edad = req.query.edad;

  res.send(
    `<html><body><h1>Hola ${nombre}</h1><p>Tu edad es: ${edad}</p></body></html>`
  );
});

app.get('/', (req: Request, res: Response) => {
  res.render('pages/home');
});

app.get('/ejemplo', (req: Request, res: Response) => {
  res.render('pages/ejemplo/index');
});

app.get('/ejemplo/crear', (req: Request, res: Response) => {
  res.render('pages/ejemplo/formulario');
});

app.post('/ejemplo/guardar', (req: Request, res: Response) => {
  console.info('-- body', req.body);

  res.redirect('/ejemplo');
});

app.get('/ejemplo/ver/:nombre', (req: Request, res: Response) => {
  console.info('---', req.params.nombre);
  res.render('pages/ejemplo/ver', { nombre: req.params.nombre });
});

app.get('/clases/persona', (req: Request, res: Response) => {
  const Tomy: Persona = new Persona("Tomás", "Ponce", 23);
  res.render('pages/clases/persona', { Persona: Tomy });
});

app.listen(PORT, () => {
  console.info(`Ejecutando en puerto ${PORT}`);
});
