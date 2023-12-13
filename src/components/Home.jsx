import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="d-inline-flex mt-5">
      <div className="m-5">
        <img className="photo--card" src="./src/images/r.png" alt="Donorokortele" />
      </div>
      <div className="home-text m-5">
        <h1 className="text-danger mt-5 text-center">Be a Life Saver: Donate Blood</h1>
        <h2 className="text-center">Give blood and save someones life.</h2>
        <p>
          <ul>
            <li>Blood donation can save lives and improve health of people with blood disorders, injuries, surgeries, or cancer.</li>
            <li>1 donation can potentially save up to 3 lives.</li>
            <li>Every year, people donate over 100 million units of blood worldwide.</li>
          </ul>
        </p>

        <a className="m-5 d-flex justify-content-center" href="/registration">
          <Button variant="primary" size="lg" active>
            Become a donor!
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
