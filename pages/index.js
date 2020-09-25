const slackify = require("slackify-markdown");

export default function Home() {
  const [input, setInput] = React.useState("");
  const [markdown, setMarkdown] = React.useState("");
  const onChange = ({ target }) => {
    setInput(target.value);
    setMarkdown(slackify(target.value));
  };

  return (
    <>
      <header>
        <h1>Slackify as a Service</h1>
      </header>
      <textarea
        value={input}
        onChange={onChange}
        id="input"
        name="input"
        cols="80"
        rows="30"
        style={{ width: "100%" }}
      ></textarea>

      {markdown ? <pre>{markdown}</pre> : null}
    </>
  );
}
