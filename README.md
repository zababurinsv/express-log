# express-log


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>


<script>

    console.log('~~~~~~~~~~~~~~~~~~', window)
    document['body'].attachShadow({mode: 'open'});
    let mountPoint = document.createElement('div')
    document['body']['shadowRoot'].appendChild(mountPoint)

    let out = Babel['transform'](`

       class Form extends React.Component {
          constructor(props) {
            super(props);
            this.state = {value: ''};
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleChange(event) {
          console.log('~~~~~~~1~~~~~~~~~~~~')
            this.setState({value: event.target.value});
          }

          handleSubmit(event) {
            console.log('~~~~~~~~~~~~~~~2~~~~')
            alert('Text field value is: ' + this.state.value);
          }

          render() {
            return (
              <div>
                <input type="text"
                  placeholder="Hello!"
                  value={this.state.value}
                  onChange={(e)=> this.handleChange(e)} />
                <button onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            );
          }
        }
        ReactDOM.render(<Form />, mountPoint)
     `, Babel['availablePresets']['react'])
        eval(out.code)
</script>
</body>
</html>
