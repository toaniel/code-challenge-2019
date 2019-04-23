/**
 * Set the id to query the track
 */
var url = new URL(window.location);
var id = parseInt(url.searchParams.get("id"));

/**
 * Fetches the track detail and appends to the page.
 *
 * ****************************
 * Please change '/json/track.json?id=${id}'
 * with your service endpoint below (e.g. `/track/:id`)
 * ****************************
 */
fetch(`json/track.json?id=${id}`)
  .then(response => response.json())
  .then(track => {
    let template = createRowTemplate(track);
    $("#track").append(template);
  });

/**
 * Find the template tag and populate it with the data
 * @param track
 */
function createRowTemplate(track) {
  let template = $("#track-template")[0].innerHTML;
  return Mustache.render(template, track);
}
