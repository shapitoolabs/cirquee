import { SafeAreaView } from 'react-native';
import {
  ErrorToast,
  InfoToast,
  SuccessToast,
  ToastProps,
} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: ToastProps) => (
    <SafeAreaView>
      <SuccessToast {...props} />
    </SafeAreaView>
  ),

  error: (props: ToastProps) => (
    <SafeAreaView>
      <ErrorToast {...props} />
    </SafeAreaView>
  ),

  info: (props: ToastProps) => (
    <SafeAreaView>
      <InfoToast {...props} />
    </SafeAreaView>
  ),
};
