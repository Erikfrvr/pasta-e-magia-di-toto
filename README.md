# Pasta e Magia di Totó 🍝

Site do restaurante **Pasta e Magia di Totó**, cozinha 100% italiana e
exclusivamente delivery, comandada pelo chef Salvatore Costantino.

## O que tem no site

* Cardápio com os 6 pratos da casa, cada um com foto própria e botões de
  pedido direto para iFood e Keeta.
* Seção com a história do chef Salvatore "Totó" Costantino.
* Layout responsivo, pensado primeiro para celular.
* Site 100% estático: HTML, CSS e JavaScript puros, sem framework e sem
  build.

## Estrutura de pastas

```
PastaeMagia/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## Colocar os links reais de iFood e Keeta

Cada prato tem 2 botões com `href="#"`. Em `index.html`, procure os blocos
`delivery-buttons` (um por prato) e troque o `#` pelo link real da loja em
cada plataforma:

```html
<a class="delivery-btn ifood" href="https://www.ifood.com.br/delivery/sua-cidade/seu-restaurante" target="_blank" rel="noopener noreferrer">iFood</a>
<a class="delivery-btn keeta" href="https://www.keeta.com/sua-loja" target="_blank" rel="noopener noreferrer">Keeta</a>
```

Se o link for o mesmo em todos os pratos (leva para a página geral da loja
no app), basta usar a mesma URL em todos os botões daquele tipo.

## Testar localmente

Basta abrir o `index.html` clicando nele, ou rodar um servidor local para
evitar problemas de cache:

```powershell
python -m http.server 8000
# depois acesse http://localhost:8000 no navegador
```

## Publicar uma alteração

O site já está publicado com GitHub Pages. Para atualizar, basta commitar
e enviar as mudanças:

```powershell
git add .
git commit -m "Descrição da alteração"
git push
```

Em um ou dois minutos o site no ar já reflete a mudança.

## Paleta de cores

| Cor | Uso |
|---|---|
| `#c0392b` (tomate) | destaque principal, botões, títulos |
| `#d4a017` (dourado azeite) | detalhes, bordas, hover |
| `#4c7031` (manjericão) | pequenos detalhes e acentos |
| `#f5e6c8` (massa/creme) | fundo claro das seções |
| `#2b1810` (marrom café) | header, rodapé, fundo do hero |
