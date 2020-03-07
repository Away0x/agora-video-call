; (function (name, definition, context) {
  if ((typeof module !== 'undefined') && module.exports)
    module.exports = definition()
  else if ((typeof context['define'] === 'function') && (context['define']['amd'] || context['define']['cmd']))
    define(definition)
  else
    context[name] = definition()
})('MAIN_CONFIG', function () {

  return {
    API_ROOT: ''
  };

}, this);
