import {Content} from "antd/lib/layout/layout";
import {Outlet} from "react-router-dom";

export default function CustomContent() {
    return <Content
        style={{
            backgroundColor: 'whitesmoke',
            height: '100%',
            width: '100%'}} >
        <Outlet />
    </Content>
}