import {Tabs} from "expo-router";

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            title: "Home",
            headerTitle: "Home",
            headerTitleStyle: {
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: '#006878'
            },
        }}/>
        <Tabs.Screen name="users/[id]" options={{
            title: "User", // for tab name at the bottom
            headerTitle: "User",
            headerTitleStyle: {
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: '#006878'
            },
        }}/>
        <Tabs.Screen name="map" options={{
            title: "Map",
            headerTitle: "Map",
            headerTitleStyle: {
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: '#006878'
            },
        }}/>
    </Tabs>

}

export default TabsLayout;
