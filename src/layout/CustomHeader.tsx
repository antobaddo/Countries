import {Flex, Layout, Menu, Typography} from "antd";
import {ItemType, MenuItemType} from "antd/lib/menu/interface";
import {useNavigate} from "react-router-dom";

const ITEMS: ItemType<MenuItemType>[] = [
    {
        key: 'visited_countries',
        label: 'Visited countries'
    },
    {
        key: 'countries',
        label: 'Countries'
    },
]
export default function CustomHeader() {
    const {Header} = Layout;
    const navigate = useNavigate();

    return <Header style={{padding: 0}}>
        <Flex justify={'space-between'} align={'center'}>
            <Typography.Title level={4} style={{margin: '0 8px', color: "white"}}>My Trips</Typography.Title>
            <Menu
                defaultSelectedKeys={['visited_countries']}
                theme="dark"
                mode="horizontal"
                items={ITEMS}
                onSelect={({key}) => {
                    navigate(`/${key}`)
                }}
            />
        </Flex>

    </Header>

}

