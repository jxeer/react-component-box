import "./App.css";
import Box from "./components/Box.jsx";
import userData from "./components/data/userData.jsx";
import ShowUser from "./components/ShowUser.jsx";
const [user, setUser] = useState(userData);

function App() {
  return (
    <div className="app">
      {userData.map((user, id) => {
        <Box key={id} user={user} />;
      })}
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default App;
