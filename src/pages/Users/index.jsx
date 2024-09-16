import { Route, Routes } from "react-router-dom";
import Employed from "./Employed.routes";
import { Profile_routes } from "./profile.routes.jsx";
import { ProtectedRoles } from "../ProtectedRoles.routes.jsx";
export function UserRoutes() {
  return (
    <Routes>
      <Route
        path="/empleado"
        element={
          <ProtectedRoles>
            <Employed />
          </ProtectedRoles>
        }
      />
      <Route path="/perfil" element={<Profile_routes />} />
    </Routes>
  );
}
