import { useForm } from "./hooks/useForm";

const initialState = {
  nombre: ''
};

function App() {
  const [form, handleChange] = useForm(initialState);

  return (
    <form>
      <input
        name='nombre'
        placeholder='Nombre'
        value={form.nombre}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
