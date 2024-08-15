import { Observable } from "rxjs";

const meta1$ = new Observable( observe => {
    observe.next(1);
})

const observer1 = {
    next: (valor) => {
        console.log('resuelto: ' + valor)
    }
}

meta1$.subscribe(observer1)