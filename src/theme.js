import {
  Platform
} from 'react-native';

const theme = {
  appbar: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#24292e',
    color: '#fff',
    fontWeight: '700',
  },

  //Test
  // appbar: 
  // Platform.select({
  // 	android: { 
  //     paddingTop: 50,
  //     paddingBottom: 20,
  //     backgroundColor: 'red',
  //     color:'black',
  //     fontWeight: '700', 
  //   },
  //   ios: { 
  //     paddingTop: 50,
  //     paddingBottom: 20,
  //     backgroundColor: 'blue',
  //     color:'black',
  //     fontWeight: '700', 
  //   },
  //   default: { 
  //     paddingTop: 50,
  //     paddingBottom: 20,
  //     backgroundColor: 'green',
  //     color:'black',
  //     fontWeight: '700', 
  //   }, 
  // }), 

  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  }, 

  fonts: Platform.select({
    android: {
      main: 'Roboto',
      fontSize: 20,
    },
    ios: {
      main: 'Arial'
    },
    default: {
      main: 'System',
    },
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  }, 
  appButton: {
    appButtonContainer: {
      elevation: 8,
      backgroundColor: '#0000FF',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 5
      },
    appButtonContainerRed: {
        elevation: 8,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    appButtonText: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'normal',
        alignSelf: 'center',
        padding: 5,
    }
  },
  inputField: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#232f34',
    borderRadius: 4,
  },
  errorText: {
    marginTop: 5,
    color: '#d73a4a'
  }
};

export default theme;