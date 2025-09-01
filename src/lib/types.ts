export interface CarouselSlide {
  imageUrl: string;
  linkUrl: string;
}

export interface CardItem {
  name: string;
  price: string;
}

export interface CardSection {
  title: string;
  items: CardItem[];
}
