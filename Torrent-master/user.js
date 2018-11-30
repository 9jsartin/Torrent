//Type your code inside this function
function User(tracker, torrent){

  let myTracker = tracker;
  let myTorrent = torrent;
  let torrentFile = [];
  let state = "seed" || "leech" 
  let downloadSpeed = 0;
  let uploadSpeed=0;


  //Type all of your code in here.

function startDownload(){

}

function updateTracker(){
 myTracker.update();

 }

function checkProgress(){
 myTorrent.reportHealth();
}
function leech(){
  uploadSpeed = 0;
  downloadSpeed=Math.random();
}

function seed(){
  uploadSpeed=Math.random() * 10
  downloadSpeed=math.random() * 25;
}