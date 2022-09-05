~~1. Walidacja pojedyńczego inputu na blur~~
~~2. Formatowanie wartości inputu na blur~~
3. Walidacja w locie
4. walidacja HTML5 (dodaje sam valid/invalid)
~~5. Zmień raw data tylko na onChange, formatted data zmieniaj tylko na onBlur~~
~~6. poprawic nazwe handleOnBlur~~
~~7. wyprowadzić funkcje to i from do propów.~~
~~8. poprawna walidacja postal code: tylko cyfry i tylko 5 cyfr: array of functions, jezeli valid to dalej, jezeli invalid to go zwracamy~~
~~9. funkcja formatująca, jej uruchomienie musi być uzależnione od wyniku funkcji validującej~~
~~10. usunąć z formaterów logikę walidacji~~
~~11. dodać input na numer kart kredytowych z odpowiednimi walidacjami~~
~~12, input z dropdownem z podpowiedziami uzależnionymi od tego co wpisaliśmy, to bedzie lista, po kliknięciu której podsawi sie wybór.~~
~~13. żeby w inpucie podstawiła się wartość z konkretnego klikniętego elementu~~
~~14. opóznienie w pokazaniu podpowiedzi~~
~~15. wyslanie akcji reduxa, żeby przyszły dane w propie (mapStateToProps)~~
~~16.obok inputa po prawej ikonka sygnalizująca czy sie wyszukuje ~~
~~17. na kliknięcie calego diva przesuwam na kolejnego childa~~
~~18. strzałki prawa / lewa (z b lewa przenosi do a, a prawa do c)~~
~~19. chcemy zapętlić, z c prawa strzałka przenosi do a, a z a lewa przenosi do c~~
~~20. paginacja - na dole są cyferki które informują na której stronie jesteśmy (moga być bullety), pu ich kliknięciu też przenosi do odpowiedniego widoku !!(przy przewijaniu o 2 dzieją się rzeczy niestworzone - c zmienia sie w b)~~
~~21. akordeon - znacznik np. div, i jest w nim tresc Lorem ipsum, gdy jest wyświetlany, możesz chcieć zwinąć treść klikając w szewrona. Akordeon zapewnia mechanizm do zwijania i rozwijania, bez animacji. Po zwinięciu jest albo skrót tekstu albo jakiś tytuł czy cos.~~
~~22. animacja do zwijania i rowijania akordeonu~~
~~23. loader - pozioma kreska bedzie sie ładować narastanie procesu. Zielony cały, że sie załadowało.~~
~~24. Zrobic wariacje gwiazdek jako progress bar, gdzie najpierw wszystkie puste są wyświetlone i po jednej sie zapełniają.~~
~~25. gwiadzki jako wskażnik mocy hasła (input z walidatorami ktory weryfikuje i przedstawia w formie zakolorowanych gwiazdek)~~
~~26. opcjonaly formatTo i formatFrom~~
~~27. okno modalne - wyskakuje na środku, bedzie miało overlay, pełny kolor, blurowany, transaprentny albo mieszany (input typu radio z wyborem i modal wyskakuje na button).~~
~~28. Wariacje modala: bez uzycia reactowego createPortal, druga z createPortal, trzecia natywny dialog.~~
~~29.  Focus trap (poza natywnym)~~
~~30. kiedy jest wyświetlony modal blokuje sie scroll: na mount modala w useeffect document.body.style.overflow=hidden, a na unmout robimy initial~~
31. content modala pochodzi z propów.
~~32. poziom blura równiez konfigurowalny z propa.~~
~~33. w modal wizard konfiguruje sie jaka akcja ma byc wyslana na klikniecie ktorego buttona.~~
~~34. butony na modalu wykonują różne akcje, cos tam w state zmieniają - w portal przyjmuje propy, które są callbackami (co sie wykonuje na jaki button),   w customowym też (bedzie mniej zastosowań, bo jest w konkretnym miejscu w aplikacji)~~
~~35. gdy wybierzesz manual blur pojawia sie suwak.~~
~~36. usunąć any i ts-ignore!!!~~
~~37. scroll do różnych elementów: klikasz link i po załadowaniu w nowej rutce, ma sie przeskrolowac do wyznaczonego momentu(zawartego w linku) - nie do elementu o danym ID ale do elementu, który ma sie dopiero wygenerowac dynamicznie na stronie~~
38. JEST - teściki jednostkowe - sprawdzenie wyniku funkcji, uzywanie komponentu w zupełnej izolacji (enzyme)
~~39. Pofolderkowac pliki~~
40. Dodas ES-lint: sprawdzi kod pod wzgledem stylistycznym.
41. Dev tools - react