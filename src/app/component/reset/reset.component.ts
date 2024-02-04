import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
