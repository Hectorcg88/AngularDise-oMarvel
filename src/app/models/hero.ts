export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ResourceList;
  series: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ResourceList {
  available: number;
  collectionURI: string;
  items: Item[]; 
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface Item {
  resourceURI:string;
  name:string;
}

