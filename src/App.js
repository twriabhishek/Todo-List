import './App.scss'
import Login from './component/JsFiles/Login';
import Profile from './component/JsFiles/Profile';
import Todos from './component/JsFiles/Todos';
import UserContextProvider from './component/context/UserContextProvider';
import './component/Styles/Todos.scss'
function App() {
  return (
    <>
    {/* <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider> */}
    <Todos/>
    </>
  );
}

export default App;
