import Home from "@/components/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  return (
    <main>
      <Home />
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}