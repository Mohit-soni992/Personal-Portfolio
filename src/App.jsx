import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useLenis from "./lib/useLenis";

export default function App() {
  useLenis();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
