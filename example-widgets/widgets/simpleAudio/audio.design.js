function twxAudio() {
  return {
    elementTag: 'twx-audio',

    label: 'Audio',

    properties: [
      {
        name: 'audiosrc',
        label: 'Audio Source',
        datatype: 'resource_url',
        default: '',
        isBindingTarget: true
      },
      {
        name: 'class',
        label: 'Class',
        datatype: 'string',
        default: ''
      },
      {
        name: 'showcontrols',
        label: 'Show Controls',
        datatype: 'boolean',
        alwaysWriteAttribute: true,
        default: true
      },
      {
        name: 'visible',
        label: 'Visible',
        datatype: 'boolean',
        default: true,
        isBindingTarget: true
      }
    ],

    designTemplate: function () {
      return '<span>Audio</span>';
    },

    runtimeTemplate: function (props) {
      var tmpl = '<div ng-show="app.fn.isTrue(me.visible)" class="ng-hide audioWidget ' + props.class + '"><audio class="audioElement" src="{{me.audiosrc}}" ' + (props.showcontrols.toString() == 'true' ? 'controls' : '') + ' ></audio></div>';
      return tmpl;
    }
  }
}

twxAppBuilder.widget('twxAudio', twxAudio);