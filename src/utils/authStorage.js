import AsyncStorage from '@react-native-async-storage/async-storage';

const storegeKey = "accessToken";

class AuthStorage { 

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  async getAccessToken() {  
    const rawAccessToken = await AsyncStorage.getItem(
        `${this.namespace}:${storegeKey}`,
      ); 

      // console.log('rawAccessToken ',  JSON.parse(rawAccessToken))

      return rawAccessToken ? JSON.parse(rawAccessToken) : "";
  }
 
    // Add the access token to the storage
  async setAccessToken(accessToken) {
    /*console.log('set accessToken: ', accessToken);*/

    await AsyncStorage.setItem(
        `${this.namespace}:${storegeKey}`,
        JSON.stringify(accessToken),
      );
  }

  
    // Remove the access token from the storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:${storegeKey}`);
  }
}

export default AuthStorage; 
 