import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  styleUrls: ['./category-list.component.scss'],
  templateUrl: './category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CategoryListComponent {
  private _categoryListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public categoryList$: Observable<CategoryModel[]> = this._categoryListSubject.asObservable().pipe(switchMap(data => this._categoryService.getAll()));
categoryList: any;

  constructor(private _categoryService: CategoryService) {
  }
}
