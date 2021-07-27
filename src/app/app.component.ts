import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  nEsPrimo: boolean;

  esPrimo(n: number): boolean {
    if (n !== 2 && (this.esPar(n) || n.toString()[-1] == '5')) {
      return (this.nEsPrimo = false);
    }

    let raiz = Math.sqrt(n);

    if (this.esEntero(raiz)) {
      return (this.nEsPrimo = false);
    } else {
      for (let i = 3; i < Math.round(raiz); i += 2) {
        if (n % i == 0) {
          return (this.nEsPrimo = false);
        }
      }
    }

    return (this.nEsPrimo = true);
  }

  esPar(n: number) {
    return n % 2 == 0;
  }

  esEntero(n: number) {
    return n % 1 === 0;
  }
}
