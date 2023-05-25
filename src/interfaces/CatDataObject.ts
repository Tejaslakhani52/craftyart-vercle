export interface CatDataRoot {
  message: string;
  isLastPage: boolean;
  datas: CatTemp[];
  total_count: boolean;
  total_pages: number;
  cat_id: number;
}

export interface CatTemp {
  category_id: string;
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
  extraData: any;
  title: any;
}
