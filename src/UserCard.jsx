import "./UserCard.css";

// -----------------------------------------------------------------
// CHILD COMPONENT: UserCard
// -----------------------------------------------------------------
// This component does NOT create any data itself. It only RECEIVES
// data through "props" (short for properties) from whichever parent
// renders it, and displays that data. This is what makes it
// "reusable" — the same component can render 5 different people
// just by passing it different props each time.
// -----------------------------------------------------------------

function UserCard(props) {
  // Destructuring props here means: instead of writing props.name,
  // props.age, etc. everywhere, we pull each value out once at the
  // top so the JSX below stays clean and readable.
  const {
    name,
    age,
    city,
    email,
    mobile,
    occupation,
    address,
    accent, // used only for the little color tab at the top of the card
  } = props;

  return (
    <article className="user-card" style={{ "--accent": accent }}>
      <div className="user-card__tab">{occupation}</div>

      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__meta">
        {age} yrs · {city}
      </p>

      <dl className="user-card__details">
        <div className="user-card__row">
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>
        <div className="user-card__row">
          <dt>Mobile</dt>
          <dd>{mobile}</dd>
        </div>
        <div className="user-card__row">
          <dt>Address</dt>
          <dd>{address}</dd>
        </div>
      </dl>
    </article>
  );
}

export default UserCard;