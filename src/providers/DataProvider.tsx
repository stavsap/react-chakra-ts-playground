import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define your data type
interface YourDataType {
    // Define the structure of your data
    title: string;
    // Add more fields as needed
}

interface DataContextProps {
    data: YourDataType | null;
    fetchData: () => Promise<void>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<YourDataType | null>(null);

    const fetchData = async () => {
        // Implement your API fetching logic here
        try {
            let response = await fetch('/api/v1/data');
            let result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <DataContext.Provider value={{ data, fetchData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = (): DataContextProps => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};