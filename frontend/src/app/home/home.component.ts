import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
//import { ProductService } from '../services/product.service';

const a={headers:new HttpHeaders({'Content-Type':'application/json'})}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  constructor(){}
 

  ngOnInit(): void {
  }
  
    

  

}
