import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMenu } from './MenuContext';

const ScreenFive = ({ navigation }) => {
  const { menuItems, courses } = useMenu();

  
  const courseData = courses.map(courseName => {
    const count = menuItems.filter(item => item.course === courseName).length;
    return { name: courseName, count: count };
  });

  
  const handleCoursePress = (courseName) => {
    
    navigation.navigate('ScreenSix', { course: courseName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Menu Courses</Text>
      <Text style={styles.subHeader}>Tap a course to view filtered dishes.</Text> 
      
      <FlatList
        data={courseData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.courseItem}
            onPress={() => handleCoursePress(item.name)}
            activeOpacity={0.7}
          >
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseCount}>{item.count} Dishes</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.navBar}>
        {/* Buttons replaced with TouchableOpacity and styled */}
        <TouchableOpacity 
          style={styles.greenNavButton} 
          onPress={() => navigation.navigate('ScreenTwo')} 
        >
          <Text style={styles.whiteNavButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.greenNavButton} 
          onPress={() => navigation.navigate('ScreenFour')} 
        >
          <Text style={styles.whiteNavButtonText}>Add Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.greenNavButton} 
          onPress={() => navigation.navigate('ScreenThree')} 
        >
          <Text style={styles.whiteNavButtonText}>Manage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9', }, // Lightened background slightly
  
  // --- Header Styles (Green/Teal Colors) ---
  header: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    marginTop: 10, 
    textAlign: 'center', 
    color: '#00796b', // Dark Teal
  },
  subHeader: { 
    fontSize: 20, 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#004d40', // Very Dark Teal
  }, 
  
  // --- Course Item Styles (Green/Teal Colors) ---
  courseItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20, 
    marginVertical: 7, 
    marginHorizontal: 10, 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    borderLeftWidth: 5, 
    borderLeftColor: '#4db6ac', // Teal Accent
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 3, 
    elevation: 3, 
  },
  courseName: { 
    fontSize: 30, 
    fontWeight: '700', 
    color: '#333', 
  },
  courseCount: { 
    fontSize: 25, // Slightly reduced font size to fit better
    color: '#00796b', // Dark Teal
    fontWeight: 'bold', 
    backgroundColor: '#e0f2f1', // Light Teal/Green background
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 20, 
  },
  
  // --- Navigation Bar Styles (Matching Screen Two/Three) ---
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    borderTopWidth: 1, 
    borderTopColor: '#ddd', 
    backgroundColor: '#fff', 
    height: 100, // Sufficient height for large buttons
    alignItems: 'center',
  },
  
  // Styles for large green buttons
  greenNavButton: {
    backgroundColor: '#00796b', // Dark Teal/Green
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  whiteNavButtonText: {
    color: '#ffffff',
    fontSize: 25, // Size adjusted to fit three buttons
    fontWeight: 'bold',
  },
});

export default ScreenFive;