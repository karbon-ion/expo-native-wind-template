
import FixturePage from "@/screen/fixturePage";
import FrontPage from "@/screen/frontPage";
import OddPage from "@/screen/oddPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="OddPage" component={OddPage} />
        <Stack.Screen name="FixturePage" component={FixturePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

