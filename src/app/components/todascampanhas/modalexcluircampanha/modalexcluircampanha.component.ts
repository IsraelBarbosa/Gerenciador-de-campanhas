import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Campanha } from 'src/app/model/campanha.model';
import { ModalexcluircampanhaService } from 'src/app/services/modalexcluircampanha.service';

@Component({
  selector: 'app-modalexcluircampanha',
  templateUrl: './modalexcluircampanha.component.html',
  styleUrls: ['./modalexcluircampanha.component.sass'],
})
export class ModalexcluircampanhaComponent implements OnInit, OnDestroy {
  constructor(private modalexcluircampanha: ModalexcluircampanhaService) {}

  getDisplayModalExcluirCampanha() {
    return this.modalexcluircampanha.getDisplayModalExcluirCampanha();
  }

  setDisplayModalExcluirCampanha(displayModalExcluirCampanha: boolean) {
    return this.modalexcluircampanha.setDisplayModalExcluirCampanha(
      displayModalExcluirCampanha
    );
  }

  getCampanhaASerExcluida(): Campanha {
    return this.modalexcluircampanha.getCampanhaASerExcluida();
  }

  ngOnDestroy(): void {
    this.setDisplayModalExcluirCampanha(false);
  }

  ngOnInit(): void {}
}
