import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

export interface GoogleAuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

interface GoogleSignInError {
  code: string;
  message: string;
}

export const configureGoogleSignIn = (webClientId: string): void => {
  GoogleSignin.configure({
    webClientId,
  });
};

export const handleGoogleSignIn = async (): Promise<GoogleAuthResult> => {
  try {
    await GoogleSignin.hasPlayServices();
    const signInResult = await GoogleSignin.signIn();

    const user: User | null = signInResult.data;

    if (user) {
      return {
        success: true,
        user: user,
      };
    } else {
      return { success: false, error: 'Sign in succeeded but user information is missing' };
    }
  } catch (error) {
    if (isGoogleSignInError(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          return { success: false, error: 'Sign in cancelled' };
        case statusCodes.IN_PROGRESS:
          return { success: false, error: 'Sign in already in progress' };
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          return { success: false, error: 'Play services not available' };
        default:
          return { success: false, error: `Unexpected error occurred: ${error.message}` };
      }
    } else {
      return { success: false, error: 'An unknown error occurred' };
    }
  }
};

export const signOutGoogle = async (): Promise<void> => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

function isGoogleSignInError(error: any): error is GoogleSignInError {
  return error && typeof error.code === 'string' && typeof error.message === 'string';
}