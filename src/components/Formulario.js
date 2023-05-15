import React, { useState, useEffect } from 'react'
import {Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes, paciente: pacienteObj}) => {


    const [paciente , setPaciente] = useState('')
    const [id , setId] = useState('')
    const [propietario , setPropietario] = useState('')
    const [email , setEmail] = useState('')
    const [telefono , setTelefono] = useState('')
    const [fecha , setFecha] = useState(new Date())  
    const [sintomas , setSintomas] = useState('')
    
 

    const handleCita = () => {
        //Validar
        if([paciente, propietario, email, fecha, sintomas].includes('')){
            Alert.alert(
                'Error',  
                'Todos los campos son obligatorios', 
            )

            return 
        }
        // Revisar si es nuevo o edición

        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }
        setPacientes([...pacientes, nuevoPaciente])  
        
        setModalVisible(!modalVisible)

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }
    const cancelCita = () => {
        setModalVisible(!modalVisible)
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }
  return (
    <Modal
        animationType='slide'
        visible={modalVisible}
        >  
        <SafeAreaView style={styles.contenido}>
            <ScrollView>
                <Text style={styles.titulo}>Nueva {' '}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>
                <Pressable 
                    style={styles.btnCancelar}
                    onLongPress={() => cancelCita()}
                >
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre Paciente'
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText={setPaciente}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre Propietario'
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText={setPropietario}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email Propietario:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email Propietario'
                        placeholderTextColor={'#666'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono Propietario:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Telefono Propietario'
                        placeholderTextColor={'#666'}
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={9}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta:</Text>
                    <View style={styles.fechaContenedor}>
                        <DatePicker 
                            date={fecha}
                            locale='es'
                            mode='date'  
                            onDateChange={ (date) => setFecha(date) }
                        />
                    </View>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput 
                        style={[styles.input, styles.sintomasInput]}
                        placeholder='Sintomas paciente'  
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
                <Pressable 
                    style={styles.btnNuevaCita}
                    onPress={handleCita}
                >
                    <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#6d28d9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'
    },
    btnCancelar:{
        marginVertical: 30,
        backgroundColor: '#5827a4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnCancelarTexto:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,

    },
    label:{
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput:{
        height: 100
    },
    fechaContenedor:{
        backgroundColor:'#fff',
        borderRadius: 10,
    },
    btnNuevaCita:{
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: '#f59e0b',
        paddingVertical: 14,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto:{
        color: '#5827a4',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    }
        

})

export default Formulario