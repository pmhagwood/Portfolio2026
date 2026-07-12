import { Route, Routes } from "react-router-dom";

import ScrollToHash from "@components/ScrollToHash";
import Home from "@pages/Home/Home";
import IncomeCalculator from "@pages/IncomeCalculator/IncomeCalculator";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/income-calculator" element={<IncomeCalculator />} />
      </Routes>
    </>
  );
}

export default App;
