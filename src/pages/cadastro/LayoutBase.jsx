import { Outlet } from "react-router-dom";
import { Card } from "../../components/Card/Card";

const LayoutBase = () => {
    return ( 
        <Card>
            <Outlet />
        </Card>
     );
}
 
export default LayoutBase;