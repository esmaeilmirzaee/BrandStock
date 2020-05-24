window._wq = window._wq || [];
_wq.push({ id: 'b7emn62f5w', onReady: function(video) {
  console.log('I got handle to the video', video)
}});

$("#play").click(function() {
  _wq.push({
    id: "b7emn62f5w", onReady: function(video) {
      video.play();
      video.unmute();
    }
  });
})