var Weather = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      temp: '',
      icon: '',
      desc: '',
      wind: '',
    };
  },
  componentDidMount: function() {
    var APPID = '6abad23c4f6f7e68dcbc7d4c48683108';
    var REQUEST_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=no&";
    var formattedURL = REQUEST_URL + "APPID="+APPID+ "&lat=" + this.props.lat + "&lon=" + this.props.lon;
    console.log(formattedURL);
    $.get(formattedURL, function(result) {
      console.log(result)
      if (this.isMounted()) {
        this.setState({
          name: result.name,
          temp: result.main.temp,
          icon:'http://openweathermap.org/img/w/'+result.weather[0].icon+'.png',
          desc:result.weather[0].description,
          wind:result.wind.speed,
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div class="col-md-4">
        <h2>{this.state.name}</h2>
        {this.state.desc} <br />
        <img src={this.state.icon} />
        {this.state.temp} °C <br />
        wind:
        {this.state.wind} m/s     
        <hr />
      </div>
    );
  }
});
var Main = React.createClass({
  render: function(){
   return (
     <div>
<Weather lat="62.282848" lon="8.211105" />
<Weather lat="62.454944" lon="6.449074" />
<Weather lat="62.007983" lon="6.561767" />
<Weather lat="61.958093" lon="5.932392" />
<Weather lat="62.423477" lon="7.219444" />
<Weather lat="62.290880" lon="6.844043" />
<Weather lat="61.924573" lon="6.698377" />
<Weather lat="62.550755" lon="6.872996" />
<Weather lat="62.337428" lon="6.763769" />
<Weather lat="62.453736" lon="6.900681" />
<Weather lat="62.154540" lon="6.150190" />
<Weather lat="62.520657" lon="6.916140" />
<Weather lat="62.151720" lon="6.249814" />
     </div>
     ) 
  }
});
React.render(<Main />, document.getElementById("root"));