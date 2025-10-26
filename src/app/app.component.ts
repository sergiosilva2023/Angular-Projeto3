import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Atributos e Propriedades Html';
/*
  inputText = "Valor inicial";
  inputType = "text";
  isDisabled = false;

  setInputPassword() {
    this.inputType = "password";
  }

    setInputText() {
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText)
  }
handleInputKeyUp(event: KeyboardEvent) {
  const currentText = (event.target as HTMLInputElement).value;
  console.log(currentText);
}
handleInputEvent(event: Event) {
  const currentText = (event.target as HTMLInputElement).value;
  console.log(currentText);
}
*/
buttonTitle = 'Titulo do botão';

buttonDisable = false;

onButtonClick() {
  this.buttonDisable = !this.buttonDisable;
  this.buttonTitle = "Texto Alteradoooo";
}


}
