import React, {Component} from 'react';
import {Animated} from 'react-native';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),
        fadeSpring: new Animated.ValueXY({x: 0, y: 0}),
        fadeScale: new Animated.Value(2),
        fadeX: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.sequence([

            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    {
                        toValue: 1,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    this.state.fadeX,
                    {
                        toValue: 1,
                        duration: 1000
                    }
                )
            ]),
            Animated.delay(250),
            Animated.timing(
                this.state.fadeScale,
                {
                    toValue: 1,
                    duration: 1000
                }
            ),
            Animated.spring(this.state.fadeSpring, {
                toValue: { x: 1, y: 1 }
            }),
        ]).start();
    }

    render() {
        let {fadeAnim, fadeScale, fadeX, fadeSpring} = this.state;
        return (
            <Animated.View style={{...this.props.style,
                position: 'relative',
                left: fadeSpring.x.interpolate({
                    inputRange: [0,1],
                    outputRange: [-20, 0]
                }),
                top: fadeSpring.y.interpolate({
                    inputRange: [0,1],
                    outputRange: [-20, 0]
                }),
                opacity: fadeAnim,
                transform: [{translateX: fadeX.interpolate({
                    inputRange: [0,1],
                    outputRange: [-100, 100]
                })}, {scale: fadeScale}]}}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeInView;