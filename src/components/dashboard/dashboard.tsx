import React from 'react';

import {
    Flex,
    Box,
    Card,
} from '@chakra-ui/react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useData} from "../../providers/DataProvider";



const Dashboard = () => {
    const {data, fetchData} = useData();

    const statistics = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Fab',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <Flex flexDirection="column">
            <Flex>
                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>

                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>
            </Flex>
            <Flex>
                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>

                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>
            </Flex>

            <Flex>
                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>

                <Box style={{ flex: 1, margin:"10px", padding:"10px" }}>
                    <Card style={{ height: "20rem", width: "100%", padding:"10px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={statistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                {/*<Legend />*/}
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Box>
            </Flex>
        </Flex>


    );
};

export default Dashboard;
