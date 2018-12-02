// import { LocalStorageService } from 'ngx-store';

export class StoreService {
 constructor(
  //  private localStorageService: LocalStorageService,
 ) {
 }

 public saveSomeData(key: string, value: string) {
  //  this.localStorageService.set(key, object);
  localStorage.setItem(key, value);
 }

//  public clearSomeData(key: string): void {
//    this.localStorageService.clear('prefix', key);
//  }

 public getSomeData(key: string): any {
    //  return this.localStorageService.get(key);
    localStorage.getItem(key);
 }
}