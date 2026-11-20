import "./App.css";
import FormWithYup from "./components/form-with-yup.jsx";
import FormWithoutYup from "./components/form-with-customhooks.jsx";

function App() {
  return (
    <div>
      <FormWithoutYup />
      {/* <FormWithYup /> */}
    </div>
  );
}

export default App;