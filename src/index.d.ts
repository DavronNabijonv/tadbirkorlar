declare module "swiper/css";
declare module "swiper/css/navigation";
declare module 'swiper/css/pagination';
declare module "react-router-hash-link" {
    import * as React from "react";
    import { LinkProps } from "react-router-dom";
  
    export interface HashLinkProps extends LinkProps {
      scroll?(el: Element): void;
      smooth?: boolean;
    }
  
    export const HashLink: React.FC<HashLinkProps>;
  }
  