import Base from "./components/Base";
import Form from "./components/Form";
import List from "./components/List";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Base>
          <Form />
          <List />
        </Base>
      </AppProvider>
    </div>
  );
}

export default App;
