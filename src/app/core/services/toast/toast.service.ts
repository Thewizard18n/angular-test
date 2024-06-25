import { Injectable } from '@angular/core';
import { MatSnackBarRef, MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/ui/components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  	private notificacao!: MatSnackBarRef<any>;
 
	constructor(
		private snackBar: MatSnackBar
	) { }

	open(message: string) {
		this.notificacao = this.snackBar.openFromComponent(ToastComponent, { duration: 6000 , horizontalPosition: 'end' , verticalPosition:'top'});
		this.notificacao.instance.message = message;  
	}
}
