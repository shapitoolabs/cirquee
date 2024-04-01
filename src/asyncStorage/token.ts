import AsyncStorage from '@react-native-async-storage/async-storage';

type TLocalStorageKey = 'token';

export const saveToStorage = async <T>(key: TLocalStorageKey, data: T) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const saveToStoragePlaintext = async <T>(
  key: TLocalStorageKey,
  data: string
) => {
  await AsyncStorage.setItem(key, data);
};

export const getStorageData = async <T>(
  key: TLocalStorageKey
): Promise<T | undefined> => {
  const data = await AsyncStorage.getItem(key);
  if (data) return JSON.parse(data) as T;
  return undefined;
};

export const getStorageDataPlaintext = async (
  key: TLocalStorageKey
): Promise<string | undefined> => {
  const data = await AsyncStorage.getItem(key);
  if (data) return data as string;
  return undefined;
};

// get Storage boolean
export const getStorageBoolean = async (
  key: TLocalStorageKey
): Promise<boolean | undefined> => {
  const data = await AsyncStorage.getItem(key);
  if (data) return JSON.parse(data) as boolean;
  return undefined;
};

// save to Storage boolean
export const saveToStorageBoolean = async <T>(
  key: TLocalStorageKey,
  data: boolean
) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const removeFromStorage = async (key: TLocalStorageKey) => {
  await AsyncStorage.removeItem(key);
};
