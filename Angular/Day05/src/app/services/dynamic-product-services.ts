import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class DynamicProductServices {
  baseUrl: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }
  getProductById(productId: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
  }
  addNewProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product);
  }
  editProduct(productId: any, product: any) {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }
  deleteProduct(productId: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseUrl}/${productId}`);
  }
}
