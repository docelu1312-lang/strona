# Biologia pod klucz

Statyczna strona sprzedażowa dla poradnika do matury rozszerzonej z biologii. Do podglądu wystarczy Python 3. Uruchom z katalogu repozytorium:

```sh
python3 -m http.server 3000 --bind 0.0.0.0 --directory site
```

Otwórz w przeglądarce adres `http://localhost:3000`. Hosting Netlify publikuje katalog `site` zgodnie z `netlify.toml`. Strona nie wymaga kompilacji ani instalowania pakietów.

## Uruchomienie sprzedaży

1. Utwórz produkt w Naffy, Easycart lub wybranej platformie. Wgraj pełny PDF wyłącznie jako plik dostarczany kupującym przez platformę.
2. Ustaw cenę w PLN. Skonfiguruj wydanie pliku po płatności i zweryfikuj sposób dostarczenia w platformie.
3. Uzupełnij pola w [site/oferta.js](site/oferta.js). W polu `koszyk` wklej adres HTTPS koszyka produktu. Wpisz cenę brutto zgodną z koszykiem, opis dostawy, dane sprzedawcy, kontakt i adresy HTTPS dokumentów sprzedażowych.
4. Opublikuj stronę. W trybie testowym platformy sprawdź przejście do właściwego produktu, cenę i wydanie pliku po płatności. Przed sprzedażą sprawdź także aktualne komunikaty CKE dotyczące matury 2027, zgodnie z notą redakcyjną poradnika.

Przy niepełnej konfiguracji przycisk w sekcji oferty prowadzi do komunikatu o wersji demonstracyjnej. W katalogu publikacji znajdują się okładka i trzy wybrane strony demonstracyjne.
