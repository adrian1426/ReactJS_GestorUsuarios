import Input from "./Input";
import Button from "./Button";
import { useForm } from "../hooks/useForm";

const initialState = {
  nombre: '',
  apellido: '',
  email: ''
};

const Formulario = ({ submit }) => {
  const [form, handleChange, reset] = useForm(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default Formulario;