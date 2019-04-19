/**
 * POST the track on /track
 * @param track
 *
 * ****************************
 * Please change '/track' with
 * your service endpoint below
 * ****************************
 */
function postTrack(track) {
  fetch('/track', {
    method: 'POST',
    body: JSON.stringify(track),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .then(res => showNotification());
}

/**
 * Get the form and submit it with fetch API
 */
$("#track-form").submit(event => {

  let track = getTrackData();
  postTrack(track);

  event.preventDefault();
  event.currentTarget.reset();
});


/**
 * Add extra points
 */

$('#add-more-points').click(e => {
  $(".points").append(`
      <div class="form-group point">
        <h6>Extra point:</h6>
        <label for="lat">Lat:</label>
        <input type="number" name="lat" class="form-control">
        <label for="long">Long:</label>
        <input type="number" name="long" class="form-control">
      </div>
  `);
});

/**
 * Gets the track data with JQuery
 */
function getTrackData() {
  let points = [];
  $.each($("div.point"), function (el) {
    points.push({ lat: parseFloat($(this).find("input[name='lat']").val())
                , long: parseFloat($(this).find("input[name='long']").val())
                });
  });

  return {
    name: $("input[name='name']").val(),
    distance: parseInt($("input[name='distance']").val()),
    time: parseInt($("input[name='time']").val()),
    date: new Date($("input[name='date']").val()),
    points
  };
}

/**
 * Shows a notification when the track is accepted
 */
function showNotification() {
  let trackAlert = $("#track-alert");
  trackAlert.toggle();
  setTimeout(() => trackAlert.toggle(), 5000);
}

