export interface NestedUserModel {
   email: string;
   username: string;
   password: string;
   phone: string;
   name: Name;
   address: Address;
}

export interface Name{
   firstName: string;
   lastName: string;
}

export interface Address{
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}
