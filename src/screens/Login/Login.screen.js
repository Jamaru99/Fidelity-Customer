import React, {useState} from 'react';
import { connect } from "react-redux";
import {
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { texts } from '@utils';
import { authenticateCustomer } from '@state';

import styles from './login.style';

function LoginScreen({ navigation, authenticateCustomerDispatched, customerData }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginPress = () => {
        authenticateCustomerDispatched({ username, password, navigation })
    }

    return (
        <View style={styles.container}>

            <TextField
                label={texts.login["placeholder:username"]}
                onChangeText={(text) => setUsername(text)}
            />
            <TextField
                label={texts.login["placeholder:password"]}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <Button 
                title={texts.login["button:login"]} 
                onPress={handleLoginPress} 
                disabled={!username || !password}
            />

            <Text style={styles.errorText}>{customerData.error}</Text>

            <View style={styles.registerContainer}>
                <Text>{texts.login["new_user"]} </Text>
                <TouchableOpacity onPress={_ => navigation.navigate("RegisterScreen")}>
                  <Text style={styles.registerText}>{texts.login["link:sign_up"]}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}



const mapStateToProps = (state) => ({
    customerData: state.customerData
});
  
const mapDispatchToProps = {
  authenticateCustomerDispatched: authenticateCustomer
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
