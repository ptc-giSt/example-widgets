function twxVideo() {
  return {
    elementTag: 'twx-video',

    label: 'Video',

    properties: [
      {
        name: 'videosrc',
        label: 'Video Source',
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
      return '<span>Video</span>';
    },

    runtimeTemplate: function (props) {
      var tmpl = '<div ng-show="app.fn.isTrue(me.visible)" class="ng-hide videoWidget ' + props.class + '"><video class="videoElement" src="{{me.videosrc}}" ' + (props.showcontrols.toString() == 'true' ? 'controls' : '') + ' ></video></div>';
      return tmpl;
    }
  }
}

twxAppBuilder.widget('twxVideo', twxVideo);