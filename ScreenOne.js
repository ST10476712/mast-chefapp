import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScreenOne = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>Welcome Christoffel’s Culinary Experience</Text>
      
      <Image 
        source={require('./assets/images/logo.jpg')} 
        style={styles.logoImage} 
      />
      <Text style={styles.slogan}>Crafted with passion...</Text>

      
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('ScreenTwo')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>VIEW MENU</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f9f9f9' 
  },
  
  logo: { 
    fontSize: 60, 
    fontWeight: 'bold', 
    color: '#00796b', 
    marginBottom: 15, 
    textAlign: 'center', 
    paddingHorizontal: 5, 
  },
  
  logoImage: { 
    width: 450, 
    height: 450, 
    marginBottom: 30, 
  },
  slogan: { 
    fontSize: 18, 
    color: '#004d40', 
    marginBottom: 60 
  },
  continueButton: {
    backgroundColor: '#00796b', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default ScreenOne;