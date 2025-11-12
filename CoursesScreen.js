import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation';


const COURSE_DATA = [
  { id: '1', name: 'Starters', icon: '🥗' },
  { id: '2', name: 'Main Dinner', icon: '🍗' },
  { id: '3', name: 'Desserts', icon: '🧁' },
  { id: '4', name: 'Drinks', icon: '🥤' },
];

const CoursesScreen = () => {
  const navigation = useNavigation();

  
  const handleCoursePress = (courseName) => {
    
    navigation.navigate('ChefMenu', { filterCourse: courseName });
  };

  
  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => handleCoursePress(item.name)}
      activeOpacity={0.7}
    >
      <Text style={styles.courseIcon}>{item.icon}</Text>
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.arrowIcon}>›</Text>
    </TouchableOpacity>
  );

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse by Course</Text>
      
      
      <FlatList
        data={COURSE_DATA}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        
        ListEmptyComponent={() => <Text style={styles.emptyText}>No courses available. Check data source.</Text>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF9F6', 
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#A0522D', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  courseIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  courseName: {
    flex: 1, 
    fontSize: 19,
    fontWeight: '600',
    color: '#333',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#A0522D',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  }
});

export default CoursesScreen;