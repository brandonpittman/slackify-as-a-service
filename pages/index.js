const slackify = require("slackify-markdown");
const zeroWidthSpace = new RegExp(String.fromCharCode(0x200b), "g");

export default function Index() {
  // React.useEffect(() => {
  //   navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
  //     if (result.state == "granted" || result.state == "prompt") {
  //       navigator.clipboard.readText().then((data) => {
  //         console.log(data);
  //       });
  //     }
  //   });
  // }, []);

  const [input, setInput] = React.useState("");
  const [markdown, setMarkdown] = React.useState("");
  const convertToMarkdown = (input) => {
    const markdown = slackify(input)
      .replace(zeroWidthSpace, "")
      .trim();
    setMarkdown(markdown);
  };
  const onCopy = (text) => navigator.clipboard.writeText(text);
  const onChange = ({ target }) => {
    const input = target.value;
    setInput(input);
    convertToMarkdown(input);
  };

  // Do we *really* want to do this to people?
  // React.useEffect(() => {
  //   onCopy(markdown);
  // }, [markdown]);

  return (
    <>
      <header>
        <h1>Slackdown</h1>
      </header>
      <textarea
        onChange={onChange}
        value={input}
        id="input"
        name="input"
        cols="80"
        rows="20"
        style={{ width: "100%" }}
      />

      {markdown ? <pre>{markdown}</pre> : null}

      <button onClick={() => onCopy(markdown)}>Copy to Clipboard</button>
    </>
  );
}
