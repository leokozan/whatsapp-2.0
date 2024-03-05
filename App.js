import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import Contato from './components/Contato';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  return (
    <View>
      <View style={[styles.header, { height: '17%' }]}>
          <View style={styles.header1}>
            <Text style={styles.title}>WhatsApp</Text>
            <View style={styles.iconsContainer}>
              <Icon name="camera" size={20} color="rgba(255, 255, 255, 0.5)" style={styles.icons}/>
              <Icon name="search" size={20} color="rgba(255, 255, 255, 0.5)"style={styles.icons}/>
              <Icon name="ellipsis-v" size={20} color="rgba(255, 255, 255, 0.5)"style={styles.icons}/>
            </View>
        </View>
        <View style={styles.header2}>
            <Icon name="users" size={20} style={styles.icons} color='white'/>
            <View style={styles.options}>
              <Text style={styles.text}>Conversas</Text>
              <Text style={styles.text}>Atualizações</Text>
              <Text style={styles.text}>Chamadas</Text>
            </View>
          </View>
      </View>
      <ScrollView style={{ height: '83%'}}>
        <Contato contact='+ 42 99864-8618' message='Bom dia!'></Contato>
        <Contato contact='Nair Mainardes' message='Bom tarde!'></Contato>
        <Contato contact='+ 42 99864-8618' message='Bom noite!'></Contato>
        <Contato contact='Kobayashi' message='Bom dia!'></Contato>
        <Contato contact='Smulai Hakari' message='Hey there im using whatsapp 2'></Contato>
        <Contato contact='Vinicião' message='Jogando Stardew Rail'></Contato>
        <Contato contact='+ 42 99864-8618' message='Bom dia!'></Contato>
        <Contato contact='Nair Mainardes' message='Bom tarde!'></Contato>
        <Contato contact='+ 42 99864-8618' message='Bom noite!'></Contato>
        <Contato contact='Kobayashi' message='Bom dia!'></Contato>
        <Contato contact='Smulai Hakari' message='Hey there im using whatsapp 2'></Contato>
        <Contato contact='Vinicião' message='Jogando Stardew Rail'></Contato>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2cb961',
    height: 140,
  },
  header1:{
    flexDirection: 'row',
    paddingTop:50,
    paddingBottom:20,
    justifyContent:'space-between'
  },
  header2:{
    flexDirection: 'row',
  },
  text:{
    color:'white',
    fontWeight:'bold'
  },
  title: {
    fontSize: 28,
    color: 'white',
    paddingLeft: 10,
  },
  iconsContainer:{
    flexDirection:'row',
    paddingRight:15,
    paddingTop:10
  },
  icons:{
    paddingLeft:10,
    paddingRight:10
  },
  options:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    paddingRight:20
  }
});

