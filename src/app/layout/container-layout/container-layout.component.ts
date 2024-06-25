import { Component } from '@angular/core'; 
import { InternetConnectionService } from 'src/app/core/services/internet-connection/internet-connection.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-container-layout',
  templateUrl: './container-layout.component.html',
  styleUrls: ['./container-layout.component.scss']
})
export class ContainerLayoutComponent {
  constructor(private readonly connectivityService: InternetConnectionService , private readonly toastService: ToastService) {
    this.connectivityService.isOnline$.subscribe((data) => {
      this.toastService.open(data)
    })
  }
}
