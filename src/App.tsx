import { Route, Routes } from "react-router-dom";

import ScrollToHash from "@components/ScrollToHash";
import Home from "@pages/Home/Home";
import IncomeCalculator from "@pages/IncomeCalculator/IncomeCalculator";
import AspidaRe from "@pages/AspidaRe/AspidaRe";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/income-calculator" element={<IncomeCalculator />} />
        <Route path="/work/aspida-re" element={<AspidaRe />} />
      </Routes>
    </>
  );
}

export default App;
