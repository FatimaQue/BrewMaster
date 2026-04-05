import { Routes } from '@angular/router';
import { HotCoco } from './hot-coco/hot-coco';
import { MainPage } from './main-page/main-page';
import { EspressoCoffee } from './espresso-coffee/espresso-coffee';
import { MochaCoffee } from './mocha-coffee/mocha-coffee';
import { Checkout } from './checkout/checkout';
import { OrderSuccess } from './order-success/order-success';
import { Shop } from './shop/shop';
import { BlogPage } from './blog-page/blog-page';
import { MediaPage } from './media-page/media-page';
import { ContactPage } from './contact-page/contact-page';
import { BiscoffMilkshake } from './biscoff-milkshake/biscoff-milkshake';
export const routes: Routes = [
    
  { path: '', component: MainPage },
  { 
      
    path: 'hot-coco',           // This matches the routerLink="/hot-coco"
    component: HotCoco 
    // This loads the logic + HTML + CSS together
  },
  { path: '', component: MainPage },
  { 
      
    path: 'espresso-coffee',           // This matches the routerLink="/hot-coco"
    component: EspressoCoffee
    // This loads the logic + HTML + CSS together
  }
  ,
  { path: '', component: MainPage },
  { 
      
    path: 'mocha-coffee',           // This matches the routerLink="/hot-coco"
    component: MochaCoffee
    // This loads the logic + HTML + CSS together
  },
  { path: '', component: MainPage },
  { 
      
    path: 'checkout',           // This matches the routerLink="/hot-coco"
    component: Checkout
    // This loads the logic + HTML + CSS together
  }
  ,
  { path: '', component: MainPage },
  { 
      
    path: 'order-success',           // This matches the routerLink="/hot-coco"
    component: OrderSuccess
    // This loads the logic + HTML + CSS together
  },
   { path: '', component: MainPage },
  { 
      
    path: 'main-page',           // This matches the routerLink="/hot-coco"
    component: MainPage
    // This loads the logic + HTML + CSS together
  }
  ,
   { path: '', component: MainPage },
  { 
      
    path: 'shop',           // This matches the routerLink="/hot-coco"
    component: Shop
    // This loads the logic + HTML + CSS together
  }
  ,
   { path: '', component: MainPage },
  { 
      
    path: 'blog-page',           // This matches the routerLink="/hot-coco"
    component: BlogPage
    // This loads the logic + HTML + CSS together
  },
  { path: '', component: MainPage },
  { 
      
    path: 'media-page',           // This matches the routerLink="/hot-coco"
    component: MediaPage
    // This loads the logic + HTML + CSS together
  },
  { path: '', component: MainPage },
  { 
      
    path: 'contact-page',           // This matches the routerLink="/hot-coco"
    component: ContactPage
    // This loads the logic + HTML + CSS together
  }
  ,
  { path: '', component: MainPage },
  { 
      
    path: 'biscoff-milkshake',           // This matches the routerLink="/hot-coco"
    component: BiscoffMilkshake 
    // This loads the logic + HTML + CSS together
  }
];
