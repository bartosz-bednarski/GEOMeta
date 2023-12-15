import React from "react";
import classes from "./privacy.module.scss";
const Privacy: React.FC = () => {
  return (
    <div className={classes.privacy}>
      <div className={classes["privacy-box"]}>
        <h1>Polityka prywatności</h1>
        <span className={classes["privacy-box__text"]}>
          Ostatnia aktualizacja: 12.12.2023
        </span>
        <span className={classes["privacy-box__text"]}>
          Dziękujemy za korzystanie z naszej aplikacji. Poniżej przedstawiamy
          naszą politykę prywatności, która opisuje, jak gromadzimy, używamy i
          chronimy Twoje dane osobowe.
        </span>
        <h2>1. Informacje o nas</h2>
        <span className={classes["privacy-box__text"]}>
          Niniejsza aplikacja jest oferowana przez Bartosz Bednarski.
        </span>
        <h2>2. Rodzaje zbieranych danych</h2>
        <h3>2.1. Dane osobowe</h3>
        <span className={classes["privacy-box__text"]}>
          Aplikacja może gromadzić następujące dane osobowe:
        </span>
        <ul>
          <li>adres e-mail</li>
        </ul>
        <h3>2.2. Dane nieosobowe</h3>
        <span className={classes["privacy-box__text"]}>
          Aplikacja może gromadzić dane nieosobowe, takie jak:
        </span>
        <ul>
          <li>login i hasło</li>
          <li>liczba rozegranych gier w zakładce quiz</li>
          <li>liczba zdobytych punktów w zakładce quiz</li>
        </ul>
        <h2>3. Cel zbierania danych</h2>
        <span className={classes["privacy-box__text"]}>
          Gromadzimy Twoje dane w celu:
        </span>
        <ul>
          <li>
            umożliwienia utworzenia konta użytkownika i logowania się do niego
          </li>
          <li>wyświetlania statystyk rozegranych gier w zakładce quiz</li>
          <li>umożliwienia dodawania tematów na forum</li>
          <li>
            dodawania komentarzy na forum pod określoną przez użytkownika
            aplikacji nazwą użytkownika
          </li>
        </ul>
        <h2>4. Udostępnianie danych</h2>
        <span className={classes["privacy-box__text"]}>
          Nie sprzedajemy, nie handlujemy ani nie udostępniamy Twoich danych
          osobom trzecim bez Twojej zgody, chyba że wymaga tego prawo.
        </span>
        <h2>5. Usuwanie konta</h2>
        <span className={classes["privacy-box__text"]}>
          Jeśli chcesz usunąć swoje konto, skontaktuj się z nami używając adresu
          e-mail, który został użyty do rejestracji konta, podając swoje dane
          logowania (login i hasło). Po weryfikacji Twojej tożsamości usuniemy
          Twoje konto i powiadomimy Cię o tym drogą mailową.
        </span>
        <h2>6. Bezpieczeństwo danych</h2>
        <span className={classes["privacy-box__text"]}>
          Podjęliśmy środki bezpieczeństwa w celu ochrony Twoich danych przed
          nieuprawnionym dostępem, utratą, zmianą lub zniszczeniem.
        </span>
        <h2>7. Zmiany w polityce prywatności</h2>
        <span className={classes["privacy-box__text"]}>
          Możemy czasami aktualizować naszą politykę prywatności. Każda zmiana
          będzie publikowana na tej stronie, a data ostatniej aktualizacji
          zostanie zaktualizowana.
        </span>
        <h2>8. Kontakt</h2>
        <span className={classes["privacy-box__text"]}>
          Jeśli masz pytania dotyczące naszej polityki prywatności lub
          zarządzania kontem skontaktuj się z nami pod adresem
          bartosz.bednarski97@gmail.com.
        </span>
        <span className={classes["privacy-box__text"]}>
          Dziękujemy za korzystanie z naszej aplikacji!
        </span>
      </div>
    </div>
  );
};
export default Privacy;
