import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from './MenuContext';

const ScreenSix = ({ route, navigation }) => {
  
  const { course } = route.params; 
  const { menuItems } = useMenu();

  
  const filteredDishes = menuItems.filter(item => item.course === course);

  
  const renderDish = ({ item }) => (
    <View style={dishStyles.dishItem}>
      <Text style={dishStyles.dishName}>{item.name} - R{item.price.toFixed(2)}</Text>
      <Text style={dishStyles.dishDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={dishStyles.container}>
      <Text style={dishStyles.header}>Menu: {course}</Text>
      
      <Text style={dishStyles.countText}>Showing {filteredDishes.length} item(s)</Text>

      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDish}
        ListEmptyComponent={() => (
          <Text style={dishStyles.emptyText}>No dishes found in the {course} course.</Text>
        )}
      />

      
      <View style={dishStyles.navBar}>
        <TouchableOpacity 
          style={dishStyles.largeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={dishStyles.largeButtonText}>← Back to Courses</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const dishStyles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f9f9f9' }, 
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b', 
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#e0f2f1', 
    paddingBottom: 5,
  },
  countText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    color: '#004d40', 
  },
  dishItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4db6ac', 
    elevation: 1,
  },
  dishName: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
  },
  dishDescription: {
    fontSize: 25,
    color: '#555',
  },
  emptyText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
  },
  navBar: {
    paddingTop: 10,
    alignItems: 'center', 
    paddingBottom: 10,
  },

  
  largeButton: {
    backgroundColor: '#00796b', 
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    
    width: '90%', 
    maxWidth: 400,
  },
  largeButtonText: {
    color: '#ffffff', 
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScreenSix;