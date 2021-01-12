$(document).ready(function(){
  classValidation()
  deityValidation()
  raceValidation()

  $('#character_characterclass_id').change(function() {
    classValidation()
  });

  $('#character_deity_id').change(function() {
    deityValidation()
  });

  $('#character_race_id').change(function() {
    raceValidation()
  });
});
  
function classValidation() {
  var characterclass = $('#character_characterclass_id option:selected').text()
  var classTokenFileName = '/images/classtoken/'+characterclass+'.png'

  if (document.getElementById("character_characterclass_id").selectedIndex > 0) {
    $.ajax({
      url: '/characterclass/' + document.getElementById('character_characterclass_id').value + '/getcharacterclass',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        $('#ClassDesc').html(data.shortdescription)
      }
    })
    document.getElementById('classtoken').src = classTokenFileName
    document.getElementById('classtoken').style.visibility = 'visible';
    document.getElementById('classtoken').title = characterclass;
  } else {
    document.getElementById('classtoken').style.visibility = 'hidden';
    document.getElementById('classtoken').title = '';
    $('#ClassDesc').html('')
  }

  if (characterclass == 'Druid') {
    $('#totemselect').show()
    $("#character_totem").prop('required',true);
  }  else {
    document.getElementById('character_totem').selectedIndex = 0
    $('#totemselect').hide()
    $("#character_totem").prop('required',false);
  }

  if (characterclass == 'Cleric' || characterclass == 'Paladin') {
    $("#character_deity_id").prop('required',true);
  }  else {
    $("#character_deity_id").prop('required',false);
  }
  
}

function deityValidation() {
  var deity = $('#character_deity_id option:selected').text()
  var deityTokenFileName = '/images/deitytoken/'+deity+'.gif'

  if (document.getElementById("character_deity_id").selectedIndex > 0) {
    $.ajax({
      url: '/deity/' + document.getElementById('character_deity_id').value + '/getdeity',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        $('#DeityDesc').html(data.shortdescription)
      }
    })
    document.getElementById('deitytoken').src = deityTokenFileName
    document.getElementById('deitytoken').style.visibility = 'visible';
    document.getElementById('deitytoken').title = deity;
  } else {
    document.getElementById('deitytoken').style.visibility = 'hidden';
    document.getElementById('deitytoken').title = '';
    $('#DeityDesc').html('')
  }
  
}

function raceValidation() {
  var race = $('#character_race_id option:selected').text()

  if (document.getElementById("character_race_id").selectedIndex > 0) {
    $.ajax({
      url: '/race/' + document.getElementById('character_race_id').value + '/getrace',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        $('#RaceDesc').html(data.shortdescription)
      }
    })
  } else {
    $('#RaceDesc').html('')
  }
  
}