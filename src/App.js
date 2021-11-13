import { useState } from "react";
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
  const [usuarios, setUsuarios] = useState([]);
  const [form, handleChange, reset] = useForm(initialState);

  const submit = e => {
    e.preventDefault();

    setUsuarios([
      ...usuarios,
      form
    ]);

    reset();
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <Container>
        <Card>
          <div style={{ padding: '20px' }}>
            <form onSubmit={submit}>
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
          </div>
        </Card>

        <Card>
          <ul>
            {usuarios.map(usr => (
              <li key={usr.email}>
                {`${usr.nombre} ${usr.apellido} - ${usr.email}`}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
