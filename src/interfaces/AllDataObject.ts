export interface AllDataRoot {
  count: number;
  isLastPage: boolean;
  cats: OnlyCatDatas[];
  datas: CatDatas[];
  filter: Function;
}

export interface OnlyCatDatas {
  category_id: number;
  category_name: string;
  category_thumb: string;
}

export interface CatDatas {
  category_id: number;
  category_name: string;
  category_thumb: string;
  template_model: TemplateModel[];
}

export interface TemplateModel {
  category_id: number;
  category_name: string;
  category_size: string;
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  width: number;
  height: number;
  pages: number;
  latest: boolean;
  is_premium: boolean;
  auto_create: boolean;
}
