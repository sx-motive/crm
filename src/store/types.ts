export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: providerData[] | [];
  createdAt: string;
  lastLoginAt: string;
}

interface providerData {
  providerId: string;
  uid: string;
  displayName: null | string;
  email: string;
  phoneNumber: null | string;
  photoURL: null | string;
}
