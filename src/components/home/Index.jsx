import classes from "./home.module.scss";
import Africa from "../../assets/images/home/africa.1024x977.png";
import LogoBig from "../ui/LogoBig";
import worldBookImg from "../../assets/images/home/world.png";
import lemur from "../../assets/images/home/lemur.png";
import rucksack from "../../assets/images/home/rucksack.png";
import forum from "../../assets/images/home/forum.png";
import QuizLogo from "../ui/QuizLogo";
const Home = () => {
  return (
    <div className={classes.home}>
      <main className={classes["home__main-container"]}>
        <div className={classes["home__main-container__text-box"]}>
          <LogoBig />
          <span className={classes["home__main-container__text-box__text"]}>
            Twój kompleksowy przewodnik po grze GeoGuessr, który dostarczy Ci
            niezbędnych narzędzi i wskazówek, abyś mógł odkrywać świat w pełni
            świadomie i skutecznie!
          </span>
        </div>
        <img
          src={worldBookImg}
          className={classes["home__main-container__worldBookImg"]}
        />
      </main>
      <section
        className={`${classes["home__section"]} ${classes["home__section__left"]}`}
      >
        <div className={classes["home__section__content"]}>
          <img src={Africa} className={classes["home__section__content-img"]} />
          <span
            className={`${classes["home__section__content-text"]} ${classes["home-border-right"]}`}
          >
            <h1>Kontynenty</h1>
            <br />
            <p>
              Doskonały sposób na naukę fascynujących ciekawostek o kontynentach
              i ich unikalnych cechach.
            </p>
            <br />
            <p>
              Podczas podróży wirtualnymi ścieżkami po całym globie, będziesz
              mógł odkryć różnorodność kulturową, krajobrazy, zwierzęta i
              rośliny, co pozwoli Ci na zgłębianie swojej wiedzy geograficznej w
              niezwykle angażujący sposób. Poznawanie tych informacji będzie nie
              tylko edukacyjne, ale także inspirujące, zachęcając Cię do
              odkrywania różnorodności naszej planety!
            </p>
          </span>
        </div>
        <div className={`${classes["home__section__no-content"]}  `}>
          <span className={classes["home-border-bottom"]} />
          <span />
        </div>
      </section>
      <section
        className={`${classes["home__section"]} ${classes["home__section__right"]}`}
      >
        <div className={classes["home__section__no-content"]}>
          <span />
          <span className={`${classes["home-border-bottom"]}`} />
        </div>
        <div className={classes["home__section__content"]}>
          <span
            className={`${classes["home__section__content-text"]}  ${classes["home-border-bottom"]} ${classes["home-corners-right"]}`}
          >
            <h1>Wyspy</h1>
            <br />
            <p>
              Podczas wirtualnych podróży po tych malowniczych miejscach, możemy
              dowiedzieć się więcej o ich unikalnej florze, faunie oraz
              geografii, co pozwoli nam poszerzyć naszą wiedzę o tajemniczych
              światach otoczonych oceanami.
            </p>
            <br />
            <p>
              Poznanie tych informacji wciągający sposób inspiruje nas do
              doceniania niezwykłej różnorodności i piękna, jakie wyspy oferują
              naszej planecie.
            </p>
          </span>
          <img src={lemur} className={classes["home__section__content-img"]} />
        </div>
      </section>
      <section
        className={`${classes["home__section"]} ${classes["home__section__left"]}`}
      >
        <div className={classes["home__section__content"]}>
          <img
            src={rucksack}
            className={classes["home__section__content-img"]}
          />
          <span
            className={`${classes["home__section__content-text"]} ${classes["home-corners-left"]}`}
          >
            <h1>Trekkery</h1>
            <br />
            <p>
              Pokażemy Ci charakterystyczne "trekkery" - zaawansowane urządzenia
              Google, które pozwoliły uwiecznić nieosiągalne dla samochodów
              zakątki świata.{" "}
            </p>
            <br />
            <p>
              Dzięki nim będziesz mógł odkryć malownicze krajobrazy i ukryte
              perły, które zostały sfotografowane podczas wędrówek pieszych,
              wypraw górskich czy nawet morskich ekspedycji. Przygotuj się na
              niezapomniane wirtualne podróże, podczas których zaprezentujemy
              unikalne miejsca, dostępne dzięki niezwykłym trekkerom Google!{" "}
            </p>
          </span>
        </div>
        <div className={classes["home__section__no-content"]} />
      </section>
      <section
        className={`${classes["home__section"]} ${classes["home__section__right"]}`}
      >
        <div className={classes["home__section__no-content"]}>
          <span />
          <span className={`${classes["home-border-top"]} `} />
        </div>
        <div className={classes["home__section__content"]}>
          <span
            className={`${classes["home__section__content-text"]}  ${classes["home-border-top"]} ${classes["home-corners-right"]}`}
          >
            <h1>Quizy</h1>
            <br />
            <p>
              Zapraszamy do rozpoczęcia przygody z naszymi quizami, gdzie możesz
              stawić czoła wyzwaniom związanymi krajami.
            </p>
            <br />
            <p>
              Każdy quiz to możliwość zgłębienia wiedzy o różnych krajach, ich
              symbolach narodowych oraz rozpoznawania charakterystycznych cech
              geograficznych. Wybierz kategorię, którą chcesz zgłębić, i pokaż,
              jak dobrze znasz świat! Czy jesteś gotowy na to wyzwanie?
            </p>
          </span>
          <QuizLogo />
        </div>
      </section>
      <section
        className={`${classes["home__section"]} ${classes["home__section__left"]}`}
      >
        <div className={classes["home__section__content"]}>
          <img src={forum} className={classes["home__section__content-img"]} />
          <span
            className={`${classes["home__section__content-text"]} ${classes["home-corner-left-top"]} ${classes["home-border-top"]}`}
          >
            <h1>Forum</h1>
            <br />
            <p>
              Nasze forum to miejsce, gdzie pasjonaci i eksperci mogą ze sobą
              dzielić swoją wiedzą, doświadczeniem i pasją.
            </p>
            <br />
            <p>
              To platforma, która stwarza możliwość nawiązywania wartościowych
              interakcji, gdzie użytkownicy wspierają się nawzajem, odpowiadając
              na pytania i udzielając cennych wskazówek. Wspólnie tworzymy
              dynamiczną społeczność, której celem jest wzajemna pomoc i wzrost
              wiedzy we GeoGuessrowych podróżach.
            </p>
          </span>
        </div>
        <div className={classes["home__section__no-content"]}>
          <span className={classes["home-border-top"]} />
          <span />
        </div>
      </section>
    </div>
  );
};
export default Home;
