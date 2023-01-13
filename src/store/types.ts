export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: providerData[] | [];
}

interface providerData {
  providerId: string;
  uid: string;
  displayName: null | string;
  email: string;
  phoneNumber: null | string;
  photoURL: null | string;
}
