import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadStoragedData() {
      const [token, name] = await AsyncStorage.multiGet(['@CaderninhoBMG:token', '@CaderninhoBMG:name']);

      if(token[1] && name[1]) {
        setData({ token: token[1], user: name });
      }
    }
    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/users/auth', {
      email,
      password,
    });

    const { token, name } = response.data;

    await AsyncStorage.multiSet([
      ['@CaderninhoBMG:token', token],
      ['@CaderninhoBMG:name', name],
    ]);

    setData({ token, name });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@CaderninhoBMG:name', '@CaderninhoBMG:token']);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, name: data.name, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used from within an AuthProvider');
  }

  return context;
}
