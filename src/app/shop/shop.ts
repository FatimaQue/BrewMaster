import { Component, computed, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface CartItem {
  name: string;
  price: number;
  quantity?: number;
  id?: string;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  router = inject(Router);
  private el = inject(ElementRef);

  // --- Signals for State ---
  isCartOpen = signal(false); 
  isBuyNowDrawerOpen = signal(false);
 cartItems = signal<any[]>([]);
  buyNowItem = signal<CartItem | null>(null);

  isMenuOpen = false;
  isDropdownOpen = false;

  // --- Drawer Methods ---
  
  // This single method handles opening and closing the cart
 toggleCartDrawer(isOpen: boolean): void {
    this.isCartOpen.set(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // This method adds an item and then opens the drawer
  addToCart(name: string, price: number): void {
    console.log('Button Clicked!', name, price);
    const newItem: CartItem = { 
      id: Math.random().toString(36).substring(2, 9), 
      name: name, 
      price: price, 
      quantity: 1 
    };

    // 1. Update the signal (the badge count will increase automatically)
    this.cartItems.update(items => [...items, newItem]);
    
    // 2. Open the side drawer to show the new item
    this.toggleCartDrawer(true);
  }

  // --- Navigation & UI ---

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.isCartOpen() && target.classList.contains('drawer-overlay')) {
      this.toggleCartDrawer(false);
    }
  }
  

  onSearch(event: Event, query: string) {
    event.preventDefault();
    if (!query) return;
    const formattedQuery = query.toLowerCase().trim().replace(/\s+/g, '-');
    this.router.navigate([`/${formattedQuery}`]).catch(() => {
      alert("Coffee not found in our menu!");
    });
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate() {
    this.router.navigate(['/hot-coco']);
  }
calculateTotal = computed(() => {
    const total = this.cartItems().reduce((acc, item) => {
      // Use the Nullish Coalescing operator (??) to default to 1 if quantity is undefined
      const qty = item.quantity ?? 1; 
      return acc + (item.price * qty);
    }, 0);
    
    return total.toFixed(2);
  });

// Remove an item by its index
removeFromCart(index: number) {
    this.cartItems.update(items => items.filter((_, i) => i !== index));
  }

// Action for the checkout button
proceedToCheckout() {
  this.toggleCartDrawer(false); // Close drawer first
  this.router.navigate(['/checkout']); // Navigate to your checkout route
}
}