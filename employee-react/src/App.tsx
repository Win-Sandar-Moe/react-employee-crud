import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./employee/component/Header.tsx";
import Footer from "./employee/component/Footer.tsx";
import EmployeeList from "./employee/component/EmployeeList.tsx";


import EmployeeFormV3 from "./employee/component/EmployeeFormV3.tsx";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<EmployeeList />} />
                        <Route path="/create-employee" element={<EmployeeFormV3 />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
