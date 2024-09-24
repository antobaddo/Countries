import {Layout} from "antd";
import CustomHeader from "./CustomHeader";
import CustomContent from "./CustomContent";

export default function CustomLayout() {
    return <Layout style={{height: '100%', width: '100%', minHeight: '100vh'}}>
        <CustomHeader/>
        <CustomContent />
    </Layout>
}