export interface Person {
  name: string;
  description: string;
  image: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  venue: string;
}

export interface WeddingData {
  groom: Person;
  bride: Person;
}