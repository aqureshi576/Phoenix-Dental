export type Tab = 'home' | 'services' | 'team' | 'prices';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  designation: string;
  image: string;
  bio: string;
  longBio: string;
  specialties: string[];
  education: string;
}

export interface ServicePrice {
  name: string;
  price: string;
  details?: string;
  subsidized?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServicePrice[];
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  createdAt: string;
  status: 'Pending' | 'Completed';
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  dentist: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
}
