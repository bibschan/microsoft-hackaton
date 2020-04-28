var getUserMedia = require("getusermedia");

getUserMedia({ video: true, audio: false }, function (err, stream) {
  if (err) return console.error(err);

  var Peer = require("simple-peer");
  var peer = new Peer({
    initiator: location.hash === "#init",
    trickle: false,
    stream: stream,
  });

  peer.on("signal", function (data) {
    document.getElementById("yourId").value = JSON.stringify(data);
    console.log(data);
  });

  document.getElementById("connect").addEventListener("click", function () {
    var otherId = JSON.parse(document.getElementById("otherId").value);
    peer.signal(otherId);
  });

  document.getElementById("send").addEventListener("click", function () {
    var yourMessage = document.getElementById("yourMessage").value;
    peer.send(yourMessage);
  });

  peer.on("data", function (data) {
    document.getElementById("messages").textContent += data + "\n";
  });

  peer.on("stream", function (stream) {
    console.log("Video section is on");
    var video = document.querySelector("#incomingVideo");
    // document.body.appendChild(video);

    video.srcObject = stream;
    video.play();
  });

  var localVideo = document.querySelector("#localVideo");
  localVideo.srcObject = stream;
  localVideo.play();
});
