import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from "./src/screens/login/Login";
import NewBlog from './src/screens/newBlog/NewBlog';
import Blogs from './src/screens/blogs/Blogs';
import {Button} from "react-native";


export default StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    Blogs: {
        screen: Blogs,
        navigationOptions: ({navigation}) => {
            return {
                title: 'Blogs',
                headerRight: (<Button
                    title={'New'}
                    onPress={() => navigation.navigate('NewBlog')}
                />)
            };
        },
    },
    NewBlog: {
        screen: NewBlog,
        navigationOptions: {
            title: 'NewBlog'
        }
    },
});