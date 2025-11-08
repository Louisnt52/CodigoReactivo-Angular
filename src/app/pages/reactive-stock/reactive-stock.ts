import { Component, inject } from '@angular/core';
import { StockService } from '../../services/stockService';
import { StockList } from '../../components/stockList/stockList';
import { StockAddReactive } from '../../components/stock-add-reactive/stock-add-reactive';

@Component({
  selector: 'app-reactive-stock',
  imports: [StockList, StockAddReactive],
  templateUrl: './reactive-stock.html',
})
export default class ReactiveStock {
  public stockService = inject(StockService);
}
