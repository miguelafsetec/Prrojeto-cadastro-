import React,{ useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
 
export default function App(){
  //Estado para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [data_de_admissão, setData_de_admissão] = useState('');
  const [resultado, setResultado] = useState('');
  const mostrarResultado =()=>
    {
      if(nome && idade && cargo && telefone && email && data_de_admissão){
      setResultado(
       `Nome: ${nome},
        Idade: ${idade}, 
        Cargo: ${cargo}, 
        Telefone: ${telefone}, 
        Email: ${email}, 
        Data_de_admissão: ${data_de_admissão}`
      );
      }else{
        setResultado("Por favor, preencha os campos");
      }
      };
 
  return(
    <View>
    <View style={styles.container}></View>

      <Text style={styles.title}>Formulário</Text>
 
      <TextInput style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
 
      <TextInput style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />

<TextInput style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={setCargo}

        
      />

<TextInput style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

<TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

<TextInput style={styles.input}
        placeholder="Data_de_admissão"
        value={data_de_admissão}
        onChangeText={setData_de_admissão}
      />
 
      <Button title="Mostrar resultado"
                  onPress={mostrarResultado}></Button>
 
      {resultado?(
      <Text style={styles.input1} >{resultado}</Text>):null}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#000000',
  },
 
  title:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 10,
  },
  input:{
    height: 40,
    borderColor:'#ccc',
    borderWidth: 1,
    marginBottom: 20,
    textAlign:'center',
    paddingHorizontal: 10,
    borderRadius:5,
    width: '15%',
    flexDirection:'column',

  },
  input1:{
    height: 40,
    borderColor:'#ccc',
    borderWidth: 1,
    marginBottom: 50,
    textAlign:'center',
    paddingHorizontal: 2,
    borderRadius:8888,
    flexDirection:'column',
  },
  resultado:{
    marginTop: 20,
    fontSize: 18,
    color:'#b10000',
    textAlign:'center',
    width: '15%',
  },
 
})