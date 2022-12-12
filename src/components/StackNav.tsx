import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNav = ({ components }: { components: any[]}) => {
  console.log(components)
  
  return (
    <Stack.Navigator 
      initialRouteName={components[0].displayName} 
      screenOptions={{
        headerShown: false
      }}
    >
      {
        components.map((c, index) => (
          <Stack.Screen key={index} name={c.displayName} component={c} />
        ))
      }
    </Stack.Navigator>
  )
}

export default StackNav