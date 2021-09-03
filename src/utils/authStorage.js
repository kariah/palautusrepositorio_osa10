import AsyncStorage from '@react-native-async-storage/async-storage';

const storegeKey = "accessToken";

class AuthStorage {
  namespace: string;

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  async getAccessToken() {  
    const rawAccessToken = await AsyncStorage.getItem(
        `${this.namespace}:${storegeKey}`,
      ); 

      return rawAccessToken ? JSON.parse(rawAccessToken) : "";
  }
 
    // Add the access token to the storage
  async setAccessToken(accessToken: any) {
    console.log('accessToken: ', accessToken);

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
 