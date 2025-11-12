import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();


export const COURSES = ['Starters', 'Mains', 'Dessert', 'Drinks'];


export const MenuProvider = ({ children }) => {
  
  const [menuItems, setMenuItems] = useState([

     { 
        id: 1, 
        name: 'Caesar Salad', 
        description: 'Classic romaine, croutons, and parmesan.', 
        course: 'Starters', 
        price: 85.00,
        imageSource: require('./assets/images/caesar salad.jpg') 
    },
    
     { 
        id: 2, 
        name: 'Grilled Salmon', 
        description: 'Served with seasonal vegetables.', 
        course: 'Mains', 
        price: 195.00,
        imageSource: require('./assets/images/grilled salmon.jpg') 
    },
   
    { id: 3, name: 'Chocolate Cake', description: 'Rich fudge cake with vanilla ice cream.', course: 'Dessert', price: 70.00, imageSource: require('./assets/images/chocolate cake.jpg') },
    { id: 4, name: 'Soft drnks', description: 'Bubbly,flavorful refreshment in every sip.', course: 'Drinks', price: 25.00, imageSource: require('./assets/images/soft drinks.jpg') },

    { id: 5, name: 'Garlic Bread', description: 'Golden-baked bread infused with butter garlic, and parsley.', course: 'Starters', price: 60.00, imageSource: require('./assets/images/garlic bread.jpg') },
    { id: 6, name: 'Tomato Soup', description: 'A rich, Creamy tomato soup simmered with fresh herbs and a bist of garlic.', course: 'Starters', price: 100.00, imageSource: require('./assets/images/tomato soup.jpg')},
    { id: 7, name: 'beef steak', description: 'Juicy grilled beef steak served with seasonal vegetables and rich peppercorn sauce.', course: 'Mains', price: 150.00, imageSource: require('./assets/images/beef steak.jpg')},
    { id: 8, name: 'Chicken Alfredo', description: 'Tender chicken strips tossed with fettuccine pasta in a creamy Alfredo sauce.', course: 'Mains', price: 120.00, imageSource: require('./assets/images/chicken alfredo.jpg')},
    { id:  9, name: 'CheeseCake', description: 'Classic baked cheeesecake topped with a strawberry compote.', course: 'Dessert', price: 150.00, imageSource: require('./assets/images/cheese cake.jpg')},
    { id: 10, name: 'Ice Cream Sundae', description: 'Creamy vanilla ice cream topped with chocolate sauce,nuts, and a cherry.', course: 'Dessert', price: 80.00, imageSource: require('./assets/images/ice cream sundae.jpg')},
    { id: 11, name: 'Wines', description: 'Full-bodied cabernet sauvignon with rich oak ubdertones.', course: 'Drinks', price: 250.00, imageSource: require('./assets/images/wines.jpg')},
    { id: 12, name: 'Sparkling/Still Water', description: 'Refreshing chilled sparkling and mineral water.', course: 'Drinks', price: 10.00, imageSource: require('./assets/images/water.jpg')},
  ]);

  
  const addDish = (dish) => {
    const newDish = {
      ...dish,
     
      id: Date.now(),
      price: parseFloat(dish.price), 
    };
    setMenuItems(currentItems => [...currentItems, newDish]);
  };

  
  const removeDish = (id) => {
    setMenuItems(currentItems => currentItems.filter(item => item.id !== id));
  };


  const value = {
    menuItems,
    addDish,
    removeDish,
    courses: COURSES,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};


export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
   
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};