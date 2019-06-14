const initialText = `
## markdown quick reference
__________
# headers

*emphasis*

**strong**

* list
* some
* items

>Block Quote to write things that people have said so that people know people have said that before. -Annon

\`<div> example of inline code</div>\`

    blocks of code need(4 spaces indent)
    let something = 'this thing';
    function myFunc(){
    do things in here
    };

## Here's a cute picture
![alt text](https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)

[Danny Brandt freeCodeCamp](https://www.freecodecamp.org/dannywithamustache)

`;

class App extends React.Component {
  state = { text: initialText };

  createMarkup = () => {
    let markdown = marked(this.state.text);
    return { __html: markdown };
  };

  handleChange = () => {
    this.setState({ text: this.refs.textarea.value });
  };

  render() {
    return (
      <div id="container">
        <textarea id="editor" ref="textarea" onChange={this.handleChange}>
          {initialText}
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
