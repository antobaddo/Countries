import {Avatar, List, Typography} from "antd";
import {useGetPaginatedCountriesQuery} from "../redux/api";
import {useState} from "react";
import {Link} from "react-router-dom";
import SwitchVisitCountry from "../components/SwitchVisitCountry";


export default function Countries() {

    const [pagination, setPagination] = useState({page: 1, per_page: 10})
    const {data: countries, isFetching, isUninitialized} = useGetPaginatedCountriesQuery(pagination)
    const isLoadingCountries = isFetching || isUninitialized

    return <div style={{padding: '0.5rem'}}>
        <Typography.Title style={{margin: "0.5rem 0"}} level={4}>Countries list</Typography.Title>
        <List
            loading={isLoadingCountries}
            pagination={{
                pageSize: pagination.per_page,
                current: pagination.page,
                total: countries?.items,
                showSizeChanger: false,
                onChange: (page) => setPagination(prevState => ({...prevState, page}))
            }}
            itemLayout="horizontal"
            dataSource={countries?.data}
            renderItem={(item, index) => (
                <List.Item
                    actions={[
                        <SwitchVisitCountry
                            key={item.id}
                            countryId={item.id}
                            switchProps={{
                                disabled: isLoadingCountries,
                                defaultValue: item?.is_visited,
                                checkedChildren: "Visited",
                                unCheckedChildren: "Not visited",
                            }}
                        />,
                        <Link to={item.id}>Details...</Link>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.flags.svg}/>}
                        title={item.name.common}
                        description={item.trip_notes}
                    />
                </List.Item>
            )}
        />
    </div>
}