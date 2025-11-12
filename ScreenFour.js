import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMenu } from './MenuContext';

const ScreenFour = ({ navigation }) => {
  const { addDish, courses } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const [course, setCourse] = useState(courses.length > 0 ? courses[0] : ''); 
  const [price, setPrice] = useState('');

  const handleAddDish = () => {
    if (!name || !description || !price || !course) {
      Alert.alert('Error', 'Please fill in all dish details.');
      return;
    }
    
    
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Error', 'Price must be a valid number greater than zero.');
      return;
    }

    
    
    addDish({ name, description, course, price: parsedPrice.toFixed(2) });

    
    setName('');
    setDescription('');
    setPrice('');
    
    Alert.alert('Success', `${name} added to the menu!`);
    
    navigation.navigate('ScreenThree'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        
        <Text style={styles.label}>Dish Name:</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
          placeholderTextColor="#999"
        />

        
        <Text style={styles.label}>Description:</Text>
        <TextInput 
          style={[styles.input, styles.multilineInput]} 
          value={description} 
          onChangeText={setDescription} 
          multiline 
          numberOfLines={4} 
          placeholderTextColor="#999"
        />

        
        <Text style={styles.label}>Select Course:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={course}
            onValueChange={(itemValue) => setCourse(itemValue)}
            
            itemStyle={styles.pickerItem}
          >
            {courses.length > 0 ? (
              courses.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))
            ) : (
              
              <Picker.Item label="No Courses Available" value="" />
            )}
          </Picker>
        </View>

        
        <Text style={styles.label}>Price (R):</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="e.g., 100.00" 
          placeholderTextColor="#999"
        />

        
        <TouchableOpacity style={styles.actionButton} onPress={handleAddDish}>
          <Text style={styles.actionButtonText}>ADD DISH TO MENU</Text>
        </TouchableOpacity>

      </ScrollView>

      
      
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('ScreenTwo')} 
        >
          <Text style={styles.navButtonText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('ScreenFive')} 
        >
          <Text style={styles.navButtonText}>COURSES</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.goBack()} 
        >
          <Text style={styles.navButtonText}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  scrollContent: { padding: 20 },
  

  label: { 
    fontSize: 35, 
    marginTop: 15, 
    marginBottom: 5, 
    fontWeight: 'bold', 
    color: '#004d40' 
  },
  input: { 
    borderWidth: 2, 
    borderColor: '#4db6ac', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 15, 
    backgroundColor: '#fff',
    fontSize: 28, 
  },
  multilineInput: {
    minHeight: 120, 
    textAlignVertical: 'top', 
  },
  
  
  pickerContainer: { 
    borderWidth: 2, 
    borderColor: '#4db6ac', 
    borderRadius: 8, 
    marginBottom: 15, 
    backgroundColor: '#fff',
    overflow: 'hidden', 
  },
  pickerItem: {
    fontSize: 28, 
    color: '#333',
  },

  
  actionButton: {
    backgroundColor: '#00796b', 
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    borderTopWidth: 1, 
    borderColor: '#ddd', 
    backgroundColor: '#fff',
    height: 100, 
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#00796b', 
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ScreenFour;