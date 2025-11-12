import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from './MenuContext';

const ScreenTwo = ({ navigation }) => {
  const { menuItems, courses } = useMenu();

  
  const calculateAveragePrice = (courseData) => {
    if (courseData.length === 0) {
      return 0;
    }
    
    const total = courseData.reduce((sum, item) => sum + item.price, 0);
    
    const average = total / courseData.length;
    return average;
  };

  
  const groupedMenu = courses.map(course => {
    const data = menuItems.filter(item => item.course === course);
    const averagePrice = calculateAveragePrice(data); 
    return {
      course: course,
      data: data,
      averagePrice: averagePrice, 
    };
  });

  
  const renderDishes = (data) => {
    if (data.length === 0) {
      return <Text style={styles.noItems}>No items in this course.</Text>;
    }
    return data.map((dish) => (
      <View key={dish.id} style={styles.dishItem}>
        <Text style={styles.dishName}>{dish.name} - R{dish.price.toFixed(2)}</Text>
        <Text style={styles.dishDescription}>{dish.description}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.totalText}>
        Total Menu Items: {menuItems.length}
      </Text>

      <FlatList
        data={groupedMenu}
        keyExtractor={(item) => item.course}
        renderItem={({ item }) => (
          <View style={styles.courseSection}>
            
            
            <Text style={styles.courseHeader}>
              {item.course} ({item.data.length})
            </Text>
            <Text style={styles.averagePriceText}>
              Avg. Price: R{item.averagePrice.toFixed(2)}
            </Text>
            
            
            
            {renderDishes(item.data)} 
          </View>
        )}
      />
      
      
     
      <View style={styles.navBar}>
        
        <TouchableOpacity 
          style={styles.largeButton} 
          onPress={() => navigation.navigate('ScreenThree')}
        >
          <Text style={styles.largeButtonText}>Manage Menu</Text> 
        </TouchableOpacity>

        
        <TouchableOpacity 
          style={styles.largeButton} 
          onPress={() => navigation.navigate('ScreenFive')}
        >
          <Text style={styles.largeButtonText}>Courses</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  totalText: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    padding: 10, 
    backgroundColor: '#e0f7fa', 
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b2ebf2',
    
  },
  courseSection: { 
    padding: 15, 
    marginBottom: 10, 
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  courseHeader: { 
    fontSize: 35, 
    fontWeight: 'bold', 
    color: '#00796b', 
    paddingBottom: 5,
  },
  
  averagePriceText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#004d40', 
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#e0f2f1',
    paddingBottom: 5,
  },
  
  dishItem: { 
    marginBottom: 8, 
    paddingLeft: 8, 
    borderLeftWidth: 3, 
    borderLeftColor: '#4db6ac', 
  },
  dishName: { 
    fontWeight: '600', 
    fontSize: 30, 
    color: '#333' 
  },
  dishDescription: { 
    fontSize: 25, 
    color: '#555' 
  },
  noItems: { 
    fontStyle: 'italic', 
    color: '#999' 
  },
  
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1, 
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  
 
  largeButton: {
    backgroundColor: '#00796b', 
    paddingVertical: 20, 
    paddingHorizontal: 30, 
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  largeButtonText: {
    color: '#ffffff', 
    fontSize: 30, 
    fontWeight: 'bold',
  },
});

export default ScreenTwo;