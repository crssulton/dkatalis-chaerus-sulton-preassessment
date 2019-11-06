class ReactProblem3 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setInterval(() => {
      
    }, 5000);
  }

  render() {
    return (
        <div>
          <h1>Countdown timer using React</h1>
          <Fruits/>
        </div>
    );
  }
};
