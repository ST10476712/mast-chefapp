import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMenu } from './MenuContext';


const DishItem = ({ dish, onRemove }) => (
  <View style={itemStyles.container}>
      <Image 
        source={dish.imageSource} 
        style={itemStyles.dishImage} 
        resizeMode="cover"
    />
    <View style={itemStyles.details}>
      <Text style={itemStyles.name}>{dish.name} - R{dish.price.toFixed(2)}</Text>
      <Text style={itemStyles.description}>{dish.description}</Text>
      <Text style={itemStyles.course}>Course: {dish.course}</Text>
    </View>
    
    <TouchableOpacity onPress={() => onRemove(dish.id)} style={itemStyles.removeButton}>
      <Ionicons name="trash" size={40} color="red" />
    </TouchableOpacity>
  </View>
);


const ScreenThree = ({ navigation }) => {
  const { menuItems, removeDish } = useMenu();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={() => navigation.navigate('ScreenFour')}
      >
        <Text style={styles.actionButtonText}>+ Add New Dish</Text>
      </TouchableOpacity>
      <Text style={styles.header}>All Menu Items ({menuItems.length} Total)</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DishItem dish={item} onRemove={removeDish} />
        )}
      />
      
      
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('ScreenTwo')} 
        >
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('ScreenFive')} 
        >
          <Text style={styles.navButtonText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.goBack()} 
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  header: { fontSize: 40, fontWeight: 'bold', marginVertical: 10, paddingLeft: 5, color: '#004d40' },
  
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    borderTopWidth: 1, 
    borderColor: '#ddd', 
    backgroundColor: '#fff',
    height: 70, 
    alignItems: 'center',
  },

  navButton: {
    paddingVertical: 40,
    paddingHorizontal: 15,
    borderRadius: 8,
    
  },
  navButtonText: {
    fontSize: 50,
    fontWeight: '600',
    color: '#00796b', 
  },
  
  actionButton: {
    backgroundColor: '#00796b',
    borderRadius: 10,
    marginVertical: 15,
    
    paddingVertical: 15,   
    paddingHorizontal: 30, 
    alignSelf: 'stretch', 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  actionButtonText: {
    color: 'white',
    
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});


const itemStyles = StyleSheet.create({
  container: { 
   flexDirection: 'row', 
   padding: 10,
   marginVertical: 4,
   backgroundColor: '#fff',
   borderRadius: 8,
   borderLeftWidth: 5,
   borderLeftColor: '#4db6ac', 
   alignItems: 'center' 
 },
  dishImage: { 
    width: 150, 
    height: 200, 
    borderRadius: 30, 
    marginRight: 10,
  },
  details: { 
    flex: 1,
    paddingLeft: 5 
   },
  
  name: { 
    fontWeight: '600', 
    fontSize: 30, 
    color: '#333',
    marginBottom: 2, 
  },
  description: { 
    fontSize: 25, 
    color: '#555',
    marginTop: 2 
  },
  course: { 
    fontSize: 20, 
    fontStyle: 'italic', 
    color: '#999',
    marginTop: 5, 
  },
  
  removeButton: { 
    padding: 10, 
    marginLeft: 10,
    borderRadius: 20, 
  },
  
});

export default ScreenThree;