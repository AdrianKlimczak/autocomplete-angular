import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-input-autocomplete',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  template: `
    <div class="form-group">
      <label for="autocompleteInput">Autocomplete</label>
      <input type="text" class="form-control" id="autocompleteInput" [(ngModel)]="searchTerm" (input)="filterOptions()">
      <ul class="list-group" *ngIf="filteredOptions.length > 0">
        <li class="list-group-item" *ngFor="let option of filteredOptions" (click)="selectOption(option)">{{ option }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .list-group {
      position: absolute;
      z-index: 1000;
      width: 100%;
    }
  `]
})
export class InputAutocompleteComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  public filteredOptions: string[] = [];
  searchTerm: string = '';

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.filteredOptions);
  }

  selectOption(option: string) {
    this.searchTerm = option;
    this.filteredOptions = [];
  }
}
