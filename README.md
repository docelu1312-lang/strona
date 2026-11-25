# Biologia pod klucz

Statyczna strona sprzedażowa dla poradnika do matury rozszerzonej z biologii. Do podglądu wystarczy Python 3. Uruchom z katalogu repozytorium:

```sh
python3 -m http.server 3000 --bind 0.0.0.0 --directory site
```

Otwórz w przeglądarce adres `http://localhost:3000`. Hosting Netlify publikuje katalog `site` zgodnie z `netlify.toml`. Strona nie wymaga kompilacji ani instalowania pakietów.

## Konfiguracja sprzedaży

Przyciski zakupu prowadzą do produktu w Naffy. Cenę i adres produktu edytuj w [site/index.html](site/index.html). Cenę na stronie utrzymuj zgodną z ceną w Naffy.

W [site/oferta.js](site/oferta.js) możesz uzupełnić dane sprzedawcy, kontakt i odnośniki do dokumentów sprzedażowych. Pełny PDF wgraj wyłącznie jako plik dostarczany kupującym przez platformę. Katalog publikacji zawiera okładkę i trzy wybrane strony demonstracyjne.
