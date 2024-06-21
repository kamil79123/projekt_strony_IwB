let JSON_response;
fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => {
    if (!response.ok) {
      throw new Error('Nie udało się pobrać danych');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.name);
    $('#lat').html(data.latitude);
    $('#lon').html(data.longitude);
    $('#alt').html(data.altitude+' km');
    $('#vel').html(data.velocity+' km/h');
    $('#vis').html(data.visibility);
    cords('https://api.wheretheiss.at/v1/coordinates/'+data.latitude+','+data.longitude);
    $('#ramka').attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBXrBRgkylV-qh73IlNrTeJ4a60erLd8x8&zoom=2&q='+data.latitude+','+data.longitude)
  })
  .catch(error => {''
    console.error('Wystąpił błąd:', error);
  });

  function cords (req) {
    console.log('req: '+req);
    fetch(req)
  .then(response => {
    if (!response.ok) {
      throw new Error('Nie udało się pobrać danych');
    }
    return response.json();
  })
  .then(data => {
    $('#tim').html(data.timezone_id);
    if(data.country_code = '??') {
            $('#cou').html('Brak');
        }
    else {
        $('#cou').html(data.country_code);
    }
  })
  .catch(error => {
    console.error('Wystąpił błąd:', error);
  });

  }