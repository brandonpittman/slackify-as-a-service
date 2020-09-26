const slackify = require("slackify-markdown");
import useClipboard from "react-use-clipboard";
const zeroWidthSpace = new RegExp(String.fromCharCode(0x200b), "g");

export default function Home() {
  const [input, setInput] = React.useState("");
  const [markdown, setMarkdown] = React.useState("");
  const [shouldCopy, setShouldCopy] = React.useState(false);
  const [isCopied, setClipboard] = useClipboard(
    markdown.replace(zeroWidthSpace, "")
  );
  const onChange = ({ target }) => {
    setInput(target.value);
    setMarkdown(slackify(target.value));
  };

  const onPaste = (event) => {
    const text = event.clipboardData.getData("text");
    setMarkdown(slackify(text));
    setShouldCopy(true);
  };

  React.useEffect(() => {
    if (shouldCopy) {
      setClipboard();
      setShouldCopy(false);
    }
  }, [markdown, shouldCopy]);

  return (
    <>
      <header>
        <h1>Slackdown</h1>
      </header>
      <textarea
        onPaste={onPaste}
        onChange={onChange}
        value={input}
        id="input"
        name="input"
        cols="80"
        rows="20"
        style={{ width: "100%" }}
      />

      {markdown ? <pre>{markdown}</pre> : null}

      <button onClick={() => setShouldCopy(true)}>Copy to Clipboard</button>
    </>
  );
}
