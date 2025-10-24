## Angular 16 - módules

## Projeto2
# Conceitos de componente
- Como criar componentes
- Como declarar componentes em modeus
- Problema na duplicação de componentes
- Como criar componentes filhos
- Como refencciar componentes de outros módulos (externos)
- Estratégias de estilização de componentes
    - Configuração de Inline Template e Inline Css
    -  :: ng-deep
    -   :host
- View Encapsulation
    - None
    - Emulated
    - ShadowDom

# Criar novo componente, todos os componentes são classes javascript
ng g c card

# Decoreters
@Component
@NgModule ({declarations: [todos os Components e pipes]})
imports: [BrowserModule], (o imports é para todos os modules)

# Dividir os componentes por módulos
- Na estrutura do projeto ao momento da componentização, ter em atenção para nem sempre criar todos os componentes no mesmo módulo
- Criar os modulos com os componentes espeficicos
- Não declarar componentes em 2 módulos

- Criar módulo (ng g m cards)

# Importar a Ref de outro módulo para aceder aos componentes desse módulo
- No app.module, importar a ref do módulo que tem os componentes e exportar os componentes dentro do próprio módulo

# Utilização de Interpolação
- Criar propriedades dentro da class do componente, dentro das chaves do export class; tipo = "Simples", preco = 100

# Encadeamento Opcional na Interpolação
- Atribuir um valor undefined para mais tarde receber a informação
- Erros de runtime, já não compila a solução
- Resolver com optional chain

# Template dentro do componente (prop "template")
- Colocar o template html do componente dentro do decorater do proprio componente
- template: `<div class="card-button">Comprar</div>`, é pouco aconselhado a menos que seja realmente pouco código
- Preferivél usar sempre templateUrl: './card-button.component.html', e atualizar o template html do componente
- ng g c inline --inline-template: gera o componente sem o template .html, ficando o template dentro inline.component.ts 

# Estilos CSS Dentro do Componente(prop "Styles")
- ng g c card-button-cancel --inline-style, gera o componente sem o template css, ficando o scss dentro do card-button-cancel.component.ts
- Commentar o ficheiro scss para teste // stylesUrls
- Criar styles, é sempre um array onde podemos criar vários objetos um para cada estilo com crazes styles ex: [`{.class1}`, `{.class2}`]

# Estilos dentro do template (inline styles)
- Tag style dentro do template html
- <style> codigo <style/>
- É sempre o mais forte, tém mais precedência a menos que nos sytles do componente sejamos especifícos com as tags tipo div.

# Importar arquivos de estilo com @Import
- Criar variavéis no styles.css do projeto
- $bg-color: green;
- No ficheiro que queremos usar a variavél, temos de importar o ficheiro que contém as variáveis
- @import "../../styles.scss";
- Também podemos apontar a pasta styles para os nossos componentes, configuração no ficheiro angular.json logo abaixo da propriedade scripts;
"scripts": [],
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            }

- Reiniciar o projeto

# Utilização do Selector "::ng deep"
- Aceder a componentes filhos
- Perfura o view encapsulation dos componentes
- Muito usadas para estilizar componentes de bibliotecas
- A partir do componente Pai para o filho
  ::ng-deep .card-button { 
    background-color: yellow!important;
}
- Tem um comportamento muito peculiar
- Se usarmos os componentes referenciados pelo ::ng-deep altera a nível global da aplicação
- Caso queira atualizar um componente global, aplicamos a regra css (classes) dentro do ficheiro styles.scss da aplicação

# Utilização do Selector ":host"
- Elimina o efeito do selector ::ng-deep nos outros componentes
- O componente que usar o :host ::ng-deep é que vai receber as estilizações, os outros serão ignorados
- Também podemos criar um ficheiro _global-overrides.scss com as classes e importar dentro do styles global: @import "./styles/global-overrides.scss";

# Instalar o @Angular/Material
- npm i @angular/material ou ng add @angular/material
- Indigo/Pink
- Setup Global / yes
- import {MatSliderModule} from '@angular/material/slider'; no módulos onde tenhos os componentes referenciados

# View Encapsulation None
- encapsulation: ViewEncapsulation.None (Uma camada mais alta da nossa aplicação)
- Não é muito usual

# View Encapsulation Emulated
- Automático
- É o que está por padrão no Angular
- Deixa-se subescrever pelo styles globais

# View Encapsulation ShadowDOM
- Não pode ser afetado por classes globais
- Podemos afetar os componentes filhos sem usar o ::ng-deep
- Também não tém muito uso

# Emulação ShadowDOM do Angular
- Os atributos dos elementos só funcionam com o encapsulation: ViewEncapsulation.Emulated
- Atributos ex: <div felipe>Felipe<div/> na folha de estilo ex: div[felipe] {background-color: green;}

## Projeto3cd projeto3
