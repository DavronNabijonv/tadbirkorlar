// Base types
export type Language = "uz" | "ru" | "eng";

export interface ILangTypes extends IBaseTypes {
  key: string;
  eng: string;
  uz: string;
  ru: string;
}

export interface IBaseTypes {
  collectionId: string;
  collectionName: string;
  id: string;
  created: string;
  updated: string;
}

export interface IShowCase{
  img?:string;
  title?:string;
  desc?:string;
}

export interface IWhyUs{
  icon?:string,
  title?:string;
  desc?:string;
  color?:string;
}

export interface ITitle{
  title?:string;
  desc?:string;
}

export type IExpandType<K extends string> = Record<K, ILangTypes>;
