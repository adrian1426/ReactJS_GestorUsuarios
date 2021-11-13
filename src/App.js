import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Formulario from "./components/Formulario";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (form) => {
    setUsuarios([
      ...usuarios,
      form
    ]);
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <Container>
        <Card>
          <div style={{ padding: '20px' }}>
            <Formulario submit={submit} />
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
