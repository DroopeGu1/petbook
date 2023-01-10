import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activateRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.searchForId(this.animalId);
  }

  curtir() {
    this.animaisService.likeAnimal(this.animalId).subscribe(
      (like) => {
        if (like) {
          this.animal$ = this.animaisService.searchForId(this.animalId);
        }
      },
      (error) => console.log(error)
    );
  }

  excluir() {
    this.animaisService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate([`/animais/`]);
      },
      (error) => console.log(error)
    );
  }
}
