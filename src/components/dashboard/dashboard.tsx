import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    ChakraProvider,
    CardBody,
    Card,
    Stack,
    Divider,
    CardFooter,
    ButtonGroup, Button
} from '@chakra-ui/react';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {
    return (
        <ChakraProvider>
            <Flex>
                <Box flex="1">
                <Card maxW='sm'>
                    <CardBody>
                        Body
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        Footer
                    </CardFooter>
                </Card>
                </Box>
                <Box flex="1">
                    <Card maxW='sm'>
                        <CardBody>
                            asdasdas
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            Footer
                        </CardFooter>
                    </Card>
                </Box>
                <Box flex="1">
                    <Card maxW='sm'>
                        <CardBody>
                            Body
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            Footer
                        </CardFooter>
                    </Card>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Dashboard;
