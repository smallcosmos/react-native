import React, {Component} from 'react';
import base64Obj from './image.base64.js';

import {View, ScrollView, Image, ImageBackground, Text} from 'react-native';

class ImageComponent extends Component {
    static navigationOptions = {
        title: 'ImageComponent',
    };

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Image source={{uri: 'https://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg'}} style={{width: 100, height: 100}} />
                <Image source={{uri: base64Obj.uri}} style={{width: 100, height: 100}} />
                <Image source={require('../../../static/image/IMG_2697.jpg')} style={{height: 100, width: 100}} />
                <Image source={require('../../../static/image/IMG_2698.jpg')} style={{height: 100, width: 100}} />
                <Image source={require('../../../static/image/IMG_1661.jpg')} style={{height: 100, width: 100}} />
                <Image source={require('../../../static/image/IMG_2696.jpg')} style={{height: 100, width: 100}} />
                <Image source={require('../../../static/image/IMG_2688.png')} style={{height: 300, width: 100, resizeMode: 'contain'}} />
                <Image source={require('../../../static/image/IMG_2695.jpg')} style={{height: 300, width: 300, resizeMode: 'cover'}} />
            </ScrollView>
        )
    }
}

export default ImageComponent; 
