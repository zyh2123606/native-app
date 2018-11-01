import React, { Component } from 'react'
import { Text, View, TextInput, Navigator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button, InputItem, List } from 'antd-mobile-rn'

const Item = List.Item
class Home extends Component{
    static navigationOptions = {
        title: '登录',
        header: null
    }
    login(){

    }
    goRegister(){
        
    }
    render(){
        return (
            <View style={Styles.container} flexDirection='column' justifyContent='center' alignContent='center'>
                <View style={Styles.content}>
                    <View style={Styles.inp_wrap}>
                        <InputItem maxLength={10} clear placeholder='请输入用户名' />
                        <InputItem maxLength={14} clear type='password' style={Styles.inp_item} placeholder='请输入密码' />
                    </View>
                    <View style={{marginTop:10}} flexDirection='row'>
                        <Text>还没有账号？</Text>
                        <Text onPress={this.goRegister} style={{color: '#108ee9'}}>马上注册</Text>
                    </View>
                    <View style={Styles.btn_item}>
                        <Button activeStyle={false} onAccessibilityTap='hidden' type='primary'>登录</Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(state => state)(Home)
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginLeft: 15,
        marginRight: 15
    },
    inp_wrap: {
        backgroundColor: '#fff',
        borderRadius: 5
    },
    btn_item: {
        marginTop: 20
    },
    inp_item:{
        borderBottomWidth: 0
    }
})