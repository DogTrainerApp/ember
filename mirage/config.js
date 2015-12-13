import Mirage from 'ember-cli-mirage';

export default function() {
  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split('&').forEach(function(part) {
      var item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  }

  this.post('/token', function(db, request) {
    var params = formEncodedToJson(request.requestBody);
    if (params.username === 'valid@example.com' && params.password === 'password1234') {
      return {
        access_token: 'PA$$WORD',
        token_type: 'bearer',
      };
    } else {
      var body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
  });

  this.get('/rounds');
}
