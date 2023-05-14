
import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,  
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native'

import Formulario from './src/components/Formulario';

const nuevaCitaHandler = () =>{
  console.log('diste click nueva cita handler')
}    
const App = () => {

  //Los Hooks van en la parte superior
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''} 
      <Text style={styles.tituloBold}>Veterinarias</Text>
      </Text>
      <Pressable
        onPress={ () => setModalVisible(!modalVisible) }
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? <Text style={styles.noPacientes}>No hay pacientes aún</Text> : <Text>Si hay pacientes</Text> }

      <Formulario
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container:{
      backgroundColor: '#f3f4f6',
      flex: 1
   },
   titulo:{
      textAlign:'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: '600'
   },
   tituloBold:{
      fontWeight: '900',
      color: '#6d28d9'
   },
   btnNuevaCita:{
      backgroundColor: '#6d28d9',
      padding: 15,
      marginTop: 30,
      marginHorizontal: 20,
      borderRadius: 10
   },
   btnTextoNuevaCita:{
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: '900',
      textTransform: 'uppercase'
   }
})

export default App;
