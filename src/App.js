import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import { useForm } from "./hooks/useForm";

const initialState = {
  nombre: '',
  apellido: '',
  email: ''
};

function App() {
  const [form, handleChange] = useForm(initialState);

  return (
    <Container>
      <Card>
        <form>
          <Input
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
            label='Nombre'
          />

          <Input
            name='apellido'
            value={form.apellido}
            onChange={handleChange}
            label='Apellido'
          />

          <Input
            name='email'
            value={form.email}
            onChange={handleChange}
            label='Correo'
          />

          <Button >Enviar</Button>
        </form>
      </Card>
    </Container>
  );
}

export default App;
