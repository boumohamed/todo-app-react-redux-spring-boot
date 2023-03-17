import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hello from "./components/Home";
import NotFound from "./components/NotFound";
import DeletedTasks from "./components/DeletedTasks";
import TaskPage from "./components/TaskPage";
import Users from "./components/Users";
import UserPage from "./components/UserPage";
import TaskOfUsers from "./components/TaskOfUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hello />}></Route>
        <Route path="users">
          <Route index element={<Users />}></Route>
          <Route path="tasks" element={<TaskOfUsers />} />
          <Route path=":id" element={<UserPage />} />
        </Route>
        <Route path="deleted" element={<DeletedTasks />} />
        <Route path=":id" element={<TaskPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
