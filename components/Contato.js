import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinhaHorizontal from './LinhaHorizontal';
export default function Contato({contact,message}){
    return(
        <View style={styles.container}>
             <Icon name="user-circle-o" size={50} style={styles.icons}/>
             <View>
                <Text style={styles.contact}>{contact}</Text>
                <View style={styles.containerContacts}>
                    <Text>{message}</Text>
                </View>
             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icons:{
        paddingLeft:10,
        paddingRight:10
      },
      container:{
        flexDirection: 'row',
        marginTop:10,
        marginBottom:20
      },
      containerContacts:{
        flexDirection: 'row',
      },
      contact:{
        fontSize:20
      }
  });