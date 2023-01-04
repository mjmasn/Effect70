import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {version} from 'react-native/Libraries/Core/ReactNativeVersion';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      for (let i = 0; i < 1000000000; i++) {
        //
      }
      setLoading(false);
    }
  }, [loading]);

  const onPress = () => setLoading(true);

  return (
    <View style={styles.container}>
      <Text style={styles.versionText}>
        React Native {version.major}.{version.minor}.{version.patch}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading...' : 'Press Me'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  button: {
    backgroundColor: '#00ffcc',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000000',
  },
  versionText: {
    padding: 16,
    fontSize: 32,
    color: '#ffffff',
  },
});
