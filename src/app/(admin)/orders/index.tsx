import OrderListItem from '@components/OrderListItem';
import React from 'react';
import { FlatList} from 'react-native';
import orders from '@assets/data/orders';
import { Stack } from 'expo-router';


const Orders = () => {
    return (
        <>
        <Stack.Screen options={{ title:"Orders"}}/>
            <FlatList 
            data={orders}
            renderItem={({item})=><OrderListItem order={item}/>}
            contentContainerStyle={{gap:10,padding:10}}
            />
        </>
    );
}

 

export default Orders;
