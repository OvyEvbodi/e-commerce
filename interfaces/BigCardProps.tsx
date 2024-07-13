// big card interface

export default interface BigCardProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  label: string;
  price?: number;
  category?: string;
  quantity?: number;
}
export interface productCardProps {
  id?: string;
  title: string;
  description: string;
  image: any[];
  label: string;
  price?: number;
  category?: string;
  quantity?: number;
}