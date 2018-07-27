function twxVideoTemplate() {
    return {
        elementTag: 'twx-videoTemplate',
        label: 'videoTemplate',
        properties: [
            {
                name: 'videosrc',
                label: 'Video Source',
                datatype: 'string',
                default: 'Enter a source',
                isBindingTarget: false
            }
        ],
        designTemplate: function() {
            return '<span>This would be a video</span>';
        },
        runtimeTemplate: function(props) {
            var template = '<div ng-show="app.fn.isTrue(me.visible)" class="ng-hide testWidget ' + props.class + '"><img class="testWidget" src=""></img></div>';
            return template;
        }
    }
}

twxAppBuilder.widget('twxVideoTemplate', twxVideoTemplate);