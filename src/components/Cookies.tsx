interface CookiesProps {
  handelClick: (choice: string) => void;
}

export const Cookies = (props: CookiesProps) => {
  return (
    <div className="cookiesCon">
      <h5>This Website uses Cookies!</h5>
      <p>
        We use cookies to enhance your experience and to load Google Fonts. Do
        you accept the use of these cookies?
      </p>
      <hr />
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            props.handelClick("false");
          }}
        >
          Decline
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.handelClick("true");
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
