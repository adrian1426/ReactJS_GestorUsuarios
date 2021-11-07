import Input from "./components/Input";
import { useForm } from "./hooks/useForm";

const initialState = {
  nombre: '',
  apellido: ''
};

function App() {
  const [form, handleChange] = useForm(initialState);

  return (
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
    </form>
  );
}

export default App;
