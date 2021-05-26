# Dashboard

- `/` 
    - statystyki dziesiejszych zamówień (zdalne & lokalne)
    - lista rezerwacji i eventów zaplanowanych na dany dzień

# Logowanie

- `/login`
    - pola login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna równa jednemu stolikowi a wiersz równy blokiem 30min
        - na wzór kalendarzu google gdzie zamiast dni mamy stoliki
- `/tables/booking/:id`
    - zawiera informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/:new`
    - analogicznie do powyższego, bez podstawowych informacji
- `/tables/events/:id`
    - analogicznie do powyższego, bez podstawowych informacji
- `/tables/events/:new`
    - analogicznie do powyższego, bez podstawowych informacji

# Widok kelnera

- `/waiter`
    - tabela 
        - w wierszach stoliki
        - w kolumnach różne informacje (status stolika, czas od ostatniej aktywności)
        - dostępne akcje dla danego stolika
- `/waiter/order/:new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówione produkty z opcjami i ceną
    - kwota zamówienia 
- `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

- `/kitchen/`
    - wyświetla listę zamówień w kolejności ich złożenia
    - lista
        - numer stolika lub zamówienia zdalnego
        - pełne informacje dotyczące dań
        - możliwość oznaczenia zamówienia jako zrealizowane
        