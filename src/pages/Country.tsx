import {useGetCountryByIdQuery} from "../redux/api";
import {skipToken} from "@reduxjs/toolkit/query";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Col, Descriptions, Image, Row, Skeleton, Space, Typography} from "antd";
import {MapContainer, TileLayer} from "react-leaflet";
import {ArrowLeftOutlined} from '@ant-design/icons';
import SwitchVisitCountry from "../components/SwitchVisitCountry";
import EditTripNotes from "../components/EditTripNotes";
import {useEffect} from "react";

const FORMATTER = new Intl.NumberFormat('it-IT', {});

export default function Country() {

    const {id} = useParams()
    const {data, isUninitialized, error} = useGetCountryByIdQuery(id ?? skipToken)
    const navigate = useNavigate()

    useEffect(() => {
        if (error && 'originalStatus' in error && error.originalStatus === 404) {
            navigate('/countries');
        }
    }, [error, navigate])

    return <div style={{padding: "0.5rem"}} key={id}>
        <div>
            <Link to={'/countries'}>
                <Button
                    style={{padding: 0}}
                    type={'link'}
                    icon={<ArrowLeftOutlined/>}
                >
                    Go back to countries...
                </Button>
            </Link>
        </div>

        <Skeleton loading={isUninitialized}>
            <Space align={'center'}>
                <Image src={data?.flags.svg} height={'2rem'}/>
                <Typography.Title style={{margin: 0}}>
                    {data?.name.common}
                </Typography.Title>
            </Space>
        </Skeleton>
        <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
                <div style={{width: "100%", height: "400px"}}>
                    <MapContainer
                        key={data?.id}
                        center={data?.latlng}
                        zoom={5}
                        scrollWheelZoom={false}
                        attributionControl={false}
                        preferCanvas={true}
                        style={{width: '100%', height: '100%'}}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </Col>
            <Col xs={24} md={12}>
                <Skeleton loading={isUninitialized}>
                    <Descriptions column={2}>
                        <Descriptions.Item label="Capital">{data?.capital}</Descriptions.Item>
                        <Descriptions.Item label="Continents">{data?.continents?.join(',')}</Descriptions.Item>
                        <Descriptions.Item label="Region">{data?.region}</Descriptions.Item>
                        <Descriptions.Item label="Subregion">{data?.subregion}</Descriptions.Item>
                        <Descriptions.Item label="Borders">{data?.borders?.join(',')}</Descriptions.Item>
                        <Descriptions.Item
                            label="Population">{data?.population ? FORMATTER.format(data?.population) : ""}</Descriptions.Item>
                        <Descriptions.Item
                            span={2}
                            label="Visited">
                            {data && <SwitchVisitCountry
                                key={data.id}
                                countryId={data.id}
                                switchProps={{
                                    defaultValue: data?.is_visited
                                }}
                            />}
                        </Descriptions.Item>
                        <Descriptions.Item
                            span={2}
                            label="Trip notes">
                            <EditTripNotes
                                countryId={id}
                                text={data?.trip_notes}
                            />
                        </Descriptions.Item>
                    </Descriptions>
                </Skeleton>
            </Col>
        </Row>


    </div>
}