import React from 'react';
import axios from 'axios';
import Header from './Header';
import EnviosPrevio from './EnviosPrevio';
//import data from '../testData2.json';
//import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = {
      pageHeader: 'CHL Guatemala',
      envios: []
    };
    componentDidMount(){
      axios.get('/api/envios')
        .then(resp => {
          this.setState({
            envios: resp.data.envios
          });
        //  console.log(resp.data.envios);
        })
        .catch(console.error);

      //console.log('did Mount');
      //debugger;
      /** this.setState({
        envios: data.envios
      });*/
    }
    componentWillUnmount(){
      // console.log('Will Unmount');
      //debugger;
    }
    render() {
      return (
          
        <div className="App">
          <Header message={this.state.pageHeader} />
          <div>
            {this.state.envios.map(envio =>
              <EnviosPrevio key={envio.id} {...envio} />
            )}
          </div>
        </div>
      );
    }
}

/**Sin Estado 
const App = () => {
  return (
    <div className="App">
      <Header message="CHL Guatemala" />
      <div>
          ...
      </div>
    </div>
  );
};
*/

export default App;