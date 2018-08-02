function twxTestWidget() {
    return {
        elementTag: 'twx-testWidget',
        label: 'CapitalLabel',
        properties: [
            {
                name: 'testProp',
                label: 'Test Property',
                datatype: 'string',
                default: 'look at me',
                isBindingTarget: false
            }
        ],
        designTemplate: function() {
            return '<span>Test</span>';
        },
        runtimeTemplate: function(props) {
            var template = '<div ng-show="app.fn.isTrue(me.visible)" class="ng-hide testWidget ' + props.class + '"><img class="testWidget" src=""></img></div>';
            return template;
        }
    }
}

twxAppBuilder.widget('twxTestWidget', twxTestWidget);