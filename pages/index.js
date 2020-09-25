const slackify = require("slackify-markdown");
import useClipboard from "react-use-clipboard";

export default function Home() {
  const [input, setInput] = React.useState("");
  const [markdown, setMarkdown] = React.useState("");
  const [isCopied, setClipboard] = useClipboard(markdown);
  const onChange = ({ target }) => {
    setInput(target.value);
    setMarkdown(slackify(target.value));
  };
  const onPaste = (event) => {
    const text = event.clipboardData.getData("text");
    setMarkdown(slackify(text));
    setClipboard();
  };

  React.useEffect(() => {
    console.log("markdown:", markdown);
    console.log("clippy:", isCopied);
  });

  return (
    <>
      <header>
        <h1>Slackify as a Service</h1>
      </header>
      <textarea
        onPaste={onPaste}
        onChange={onChange}
        value={input}
        id="input"
        name="input"
        cols="80"
        rows="30"
        style={{ width: "100%" }}
      ></textarea>

      {markdown ? <pre>{markdown}</pre> : null}

      <button onClick={() => setClipboard()}>Copy to Clipboard</button>
    </>
  );
}
