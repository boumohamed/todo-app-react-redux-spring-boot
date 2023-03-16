import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hello from "./components/Home";
import NotFound from "./components/NotFound";
import DeletedTasks from "./components/DeletedTasks";
import TaskPage from "./components/TaskPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hello />}></Route>
        <Route path="deleted" element={<DeletedTasks />} />
        <Route path=":id" element={<TaskPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
