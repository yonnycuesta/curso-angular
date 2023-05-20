import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from './location.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  public departments: any;
  public cities: any;

  public myForm: FormGroup = this.fb.group({
    department: ['', Validators.required],
    city: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private sLocation: LocationService) {}

  ngOnInit(): void {
    this.sLocation.getDepartments().subscribe((data: any) => {
      this.departments = data;
    });

    this.myForm.get('department')?.valueChanges.subscribe((id: number) => {
      this.sLocation.getMunicipalities(id).subscribe((data: any) => {
        this.myForm.get('city')?.reset('');
        this.cities = data;
      });
    });
  }
}
