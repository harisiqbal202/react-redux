import { Button } from "reactstrap";
import "./App.css";
import Counter from "./redux/pages/counter";
import UserForm from "./redux/pages/userForm";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2">
        <Button
          color="primary"
          onClick={() => {
            navigate("/addproduct");
          }}
        >
          List of Products
        </Button>
      </div>
      <Counter />
      <UserForm />
    </>
  );
}

export default App;
