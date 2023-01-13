export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: providerData[] | [];
}

interface providerData {
  readonly providerId: string;
  readonly uid: string;
  readonly displayName: null | string;
  readonly email: string;
  readonly phoneNumber: null | string;
  readonly photoURL: null | string;
}
