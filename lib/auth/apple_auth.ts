import { appleAuth, AppleRequestResponse } from '@invertase/react-native-apple-authentication';

export interface AppleAuthResult {
  success: boolean;
  credentials?: AppleRequestResponse;
  error?: string;
}

export const handleAppleSignIn = async (): Promise<AppleAuthResult> => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    if (credentialState === appleAuth.State.AUTHORIZED) {
      return { success: true, credentials: appleAuthRequestResponse };
    } else {
      return { success: false, error: 'Apple Sign In failed' };
    }
  } catch (error) {
    return { success: false, error: 'Unexpected error occurred' };
  }
};