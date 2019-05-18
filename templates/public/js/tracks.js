/**
 * Fetch tracks and append them to the table
 *
 * ****************************
 * Please change 'json/tracks.json'
 * with your service endpoint below
 * ****************************
 */
fetch('http://localhost:3002/tracks')
  .then(response => response.json())
  .then(tracks => {
    let rows = tracks.map(element => createTracksTemplate(element));
    let table = $("#tracks tbody");
    table.append(rows);
  });

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createTracksTemplate(track) {
  let template = $("#track-item-template")[0].innerHTML;
  return Mustache.render(template, track);
}
