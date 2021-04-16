import Header from './components/Header'
import Nav from './components/Nav'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Welcome to Ms. Greenlee's Hatch Cam" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-erEW8aZJHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>
          Count down to hatch day!
        </h2>
      </header>
      <p className="btn btn-primary btn-lg btn-block" id="clock"></p>
      <h3>Hatch journal</h3>

      <textarea rows="4" cols="50">
        "Of course, it is likely enough, my friends," he said slowly, "likely enough that we are going to our doom: the last march of the Ents. But if we stayed home and did nothing, doom would find us anyway, sooner or later. That thought has long been growing in our hearts; and that is why we are marching now. It was not a hasty resolve. Now at least the last march of the Ents may be worth a song."
      </textarea>

    </div>

  );
}
export default App;

// Set the date we're counting down to
var countDownDate = new Date("April 23, 2021 7:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);