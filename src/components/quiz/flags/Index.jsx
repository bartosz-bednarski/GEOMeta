import classes from "./flagsQuiz.module.scss";
import flag from "../../../assets/images/country/flags/chile.svg";
const FlagsQuiz = () => {
  const data = [
    {
      country_name: "Turcja",
      country_flag: "turkey.svg",
    },
    {
      country_name: "Czechy",
      country_flag: "czech.svg",
    },
    {
      country_name: "Izrael",
      country_flag: "israel.svg",
    },
    {
      country_name: "Niemcy",
      country_flag: "germany.svg",
    },
    {
      country_name: "Austria",
      country_flag: "austria.svg",
    },
    {
      country_name: "RPA",
      country_flag: "rpa.svg",
    },
    {
      country_name: "Hiszpania",
      country_flag: "spain.svg",
    },
    {
      country_name: "Gwatemala",
      country_flag: "guatemala.svg",
    },
    {
      country_name: "Macedonia",
      country_flag: "macedonia.svg",
    },
    {
      country_name: "Węgry",
      country_flag: "hungary.svg",
    },
    {
      country_name: "Sri Lanka",
      country_flag: "srilanka.svg",
    },
    {
      country_name: "Peru",
      country_flag: "peru.svg",
    },
    {
      country_name: "Urugwaj",
      country_flag: "uruguay.svg",
    },
    {
      country_name: "Ghana",
      country_flag: "ghana.svg",
    },
    {
      country_name: "Kambodża",
      country_flag: "cambodia.svg",
    },
    {
      country_name: "Katar",
      country_flag: "qatar.svg",
    },
    {
      country_name: "Andora",
      country_flag: "andorra.svg",
    },
    {
      country_name: "Japonia",
      country_flag: "japan.svg",
    },
    {
      country_name: "Ukraina",
      country_flag: "ukraine.svg",
    },
    {
      country_name: "Słowenia",
      country_flag: "slovenia.svg",
    },
  ];
  let response = [];
  for (let i = 0; i <= 16; i += 4) {
    let dataWithId = data.slice(i, i + 4);
    for (let x = 0; x < 4; x++) {
      dataWithId[x] = { ...dataWithId[x], id: x };

      // console.log(dataWithId.find((el) => el.id == answer));

      // dataWithId = {
      //   ...dataWithId,
      //   question: dataWithId[x].find((el) => el.id === dataWithId.answer)
      //     .country_name,
      // };
    }
    let answer = Math.round(Math.random() * (3 - 1) + 1);

    dataWithId = {
      ...dataWithId,
      answer: answer,
    };
    let question = dataWithId[answer].country_name;
    dataWithId = {
      ...dataWithId,
      question: question,
    };
    for (let x = 0; x < 4; x++) {
      delete dataWithId[x].country_name;
    }
    console.log(question);
    response.push(dataWithId);
  }

  console.log(response);
  return (
    <div className={classes["flags-layout"]}>
      <div className={classes["flags-layout__flags-container"]}>
        <h1>Wybierz flagę Chile</h1>
        <div className={classes["flags-layout__flags-container__flags-box"]}>
          <img src={flag} />
          <img src={flag} />
          <img src={flag} />
          <img src={flag} />
        </div>
        <span className={classes["flags-layout__flags-container__timer"]}>
          10
        </span>
        <span className={classes["flags-layout__flags-container__timer-box"]} />
      </div>
    </div>
  );
};
export default FlagsQuiz;
