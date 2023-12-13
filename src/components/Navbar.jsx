export default function Navbar() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());

  return (
    <nav>
      <div>
        <a href="/">
          <img
            className="nav--icon"
            src="/src/icons/react-icon-small.png"
            alt="react"
          />
        </a>
        <h3 className="nav--logo_text">BloodBank</h3>
      </div>

      <ul>
        <li>
          <a href="/registration">Registration</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/info">Donor info</a>
        </li>

      </ul>

      <p className="nav--title, fontsize:px;">
        The current time is {h}:{m}
      </p>
    </nav>
  );
}
