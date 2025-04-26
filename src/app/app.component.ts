import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cardOptionsItems, KeypadButton } from './models/keypad';
import { Product, products } from './models/product';

type PaymentKind = "cash" | "card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PROTOPIE VENMA';
  currentAmount = signal(0);
  paymentKind: WritableSignal<PaymentKind> = signal("cash");
  productItems = products;
  cardOptions = cardOptionsItems;
  selectedCardProvider = signal<string>('hana');
  selectedProduct: WritableSignal<Product | undefined> = signal(undefined);

  updateCurrentAmount = (input: number): void => {
    this.currentAmount.update((v) => v + input);
  };

  clear(): void {
    this.currentAmount.set(0);
  };
  
  keypadItems: KeypadButton[] = [{
    label: '₩100',
    value: 100,
    func: this.updateCurrentAmount,
  },
  {
    label: '₩500',
    value: 500,
    func: this.updateCurrentAmount,
  },
  {
    label: '₩1,000',
    value: 1000,
    func: this.updateCurrentAmount,
  },
  {
    label: '₩5,000',
    value: 5000,
    func: this.updateCurrentAmount,
  },
  {
    label: '₩10,000',
    value: 10000,
    func: this.updateCurrentAmount,
  },
{
  label: 'Clear',
  value: 0,
  func: (_: number) => {
    if(this.currentAmount() > 0) {
      alert(`남은 현금을 (₩${this.currentAmount()}) 가져가세요. 구매 취소됩니다.`);
    }
    this.clear();
  },
}
];

  selectVendingItem(item: Product): void {
    if(!item.inStock) {
      alert('선택하신 음료수는 품절이 되었습니다. 구매가 취소됩니다.');
      this.clear();
      return;
    }

    if(this.paymentKind() === "cash") {
      const currentAmountAsNumber = Number(this.currentAmount());
      if(currentAmountAsNumber < item.price) {
        alert('현재 금액이 음료수 가격보다 부족해서 구매 불가능합니다. 현금 더 넣으주세요.');
        return;
      }
    }

    this.selectedProduct.set(item);
  }

  setPaymentKind(kind: PaymentKind): void {
    this.paymentKind.set(kind);
  }

  setCardProvider(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCardProvider.set(selectElement.value);
  }

  payByCash(): void {
    if(this.selectedProduct() === undefined) {
      alert('음료수를 선택하지 않으셨습니다. 선택해주세요!');
      return;
    }
    const remainingAmount = this.currentAmount() - this.selectedProduct()!.price;
    if(remainingAmount < 0) {
      alert('현재 금액이 음료수 가격보다 부족해서 구매 불가능합니다. 현금 더 넣으주시고 음료수 다시 선택해주세요.');
      this.selectedProduct.set(undefined);
      return
    }
    if(remainingAmount > 0) {
      alert(`차감 후 남은 금액을 (₩${remainingAmount}) 돌려줍니다.`);
      this.currentAmount.set(0);
    }
    alert('구매 완료되었습니다. 음료수 가져가세요.');
    this.selectedProduct.set(undefined);
  }

  payByCard(): void {
    if(this.selectedProduct() === undefined) {
      alert('음료수를 선택하지 않으셨습니다. 선택해주세요!');
      return;
    }

    if(this.selectedCardProvider() === 'foreign' || this.selectedCardProvider() === 'kakaobank') { // check for supported card
      alert('해외나 카카오뱅크 신용카드는 지원하지 않습니다. 다른 카드 사용하시거나 현금 사용해주세요.');
      this.selectedProduct.set(undefined);
      return
    }

    alert('구매 완료되었습니다. 음료수 가져가세요.');
    this.selectedProduct.set(undefined);
  }
}
